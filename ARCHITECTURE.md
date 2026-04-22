# 🏗️ Arquitectura del Sistema de Almacenamiento

## Diagrama de la Estructura

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND (Next.js)                     │
│                                                              │
│  Botón "Agregar Atún" → Formulario → POST /api/atunes      │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (Express)                        │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Routes (atunesRoutes.js)                           │  │
│  │  - GET    /api/atunes                               │  │
│  │  - POST   /api/atunes  ← Crear nuevo atún          │  │
│  │  - GET    /api/atunes/:id                           │  │
│  │  - PUT    /api/atunes/:id  ← Actualizar (prep.)    │  │
│  │  - DELETE /api/atunes/:id  ← Eliminar (prep.)      │  │
│  └────────────────┬─────────────────────────────────────┘  │
│                   │                                         │
│                   ↓                                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Controller (atunesController.js)                    │  │
│  │  - obtenerAtunes()                                   │  │
│  │  - obtenerAtunPorId()                                │  │
│  │  - agregarAtun()  ← Validaciones                    │  │
│  │  - actualizarAtun()                                  │  │
│  │  - eliminarAtun()                                    │  │
│  └────────────────┬─────────────────────────────────────┘  │
│                   │                                         │
│                   ↓                                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Service Abstracción (atunesService.js)              │  │
│  │                                                      │  │
│  │  ┌────────────────────┬──────────────────────┐     │  │
│  │  │   STORAGE_TYPE     │                      │     │  │
│  │  │   (variable .env)  │                      │     │  │
│  │  │                    │                      │     │  │
│  │  │  ┌──────────────┬──┴───────────────────┐ │     │  │
│  │  │  │              │                      │ │     │  │
│  │  │  ↓              ↓                      │ │     │  │
│  │  │array         mongodb                  │ │     │  │
│  │  │Storage       Storage                  │ │     │  │
│  │  │              (PREPARADO)              │ │     │  │
│  │  └──────────────────────────────────────┘ │     │  │
│  └──────────────────────────────────────────────┘  │
│                   │                                 │
│         ┌─────────┴──────────┐                      │
│         ↓                    ↓                      │
│   ┌──────────────┐   ┌──────────────┐              │
│   │ Array Memory │   │   MongoDB    │              │
│   │              │   │              │              │
│   │ (En RAM)     │   │ (Persistente)│              │
│   │ Rápido       │   │ Escalable    │              │
│   │ Datos =✗     │   │ Datos =✓     │              │
│   └──────────────┘   └──────────────┘              │
└─────────────────────────────────────────────────────────────┘
```

## Flujo de Funcionamiento

### 1️⃣ Crear Atún

```
Frontend → Formulario → POST /api/atunes
                           ↓
                    atunesController
                           ↓
                    validarDatos()
                           ↓
                    atunesService.crear()
                           ↓
         ┌──────────────────┴──────────────────┐
         ↓                                      ↓
    Array: Push() + ID                    MongoDB: save()
    Retorna objeto                         Retorna documento
         ↓                                      ↓
    ✓ Respuesta 201                        ✓ Respuesta 201
    Frontend recarga lista
```

### 2️⃣ Obtener Atunes

```
Frontend → GET /api/atunes
              ↓
      atunesController
              ↓
      atunesService.obtenerTodos()
              ↓
   ┌─────────┴─────────┐
   ↓                   ↓
Array: Retorna        MongoDB: find()
array en RAM          Retorna documentos BD
   ↓                   ↓
[...datos...]       [...datos...]
```

## 🔀 Cambiar Almacenamiento

### Opción 1: Array (Desarrollo)

```env
STORAGE_TYPE=array
```

**Ventajas:**
- ✅ Sin configuración extra
- ✅ Rápido para testing
- ✅ Funciona sin instalaciones

**Desventajas:**
- ❌ Datos se pierden al reiniciar
- ❌ Solo útil para desarrollo

### Opción 2: MongoDB (Producción)

```env
STORAGE_TYPE=mongodb
MONGODB_URI=mongodb://localhost:27017/atunes
```

**Ventajas:**
- ✅ Datos persistentes
- ✅ Escalable y profesional
- ✅ Soporta múltiples usuarios

**Desventajas:**
- ❌ Requiere MongoDB instalado
- ❌ Configuración más compleja

## 📁 Estructura de Carpetas Creada

```
backend_examenCanoJoel/
├── controller/
│   └── atunesController.js      # Lógica de negocio (ACTUALIZADO)
├── services/
│   └── atunesService.js         # Abstracción de almacenamiento (NUEVO)
├── models/
│   └── Atun.example.js          # Modelo MongoDB (EJEMPLO)
├── routes/
│   └── atunesRoutes.js          # Rutas API (ACTUALIZADO)
├── .env                         # Variables de entorno (ACTUALIZADO)
├── index.js                     # App principal
├── index.example.js             # Ejemplo con MongoDB (NUEVO)
├── STORAGE_GUIDE.md             # Guía de almacenamiento (NUEVO)
└── package.json
```

## 🚀 Próximos Pasos

1. **Actualmente**: Usa `STORAGE_TYPE=array` (no requiere configuración)
2. **Cuando necesites persistencia**:
   - Instala MongoDB
   - Cambia `STORAGE_TYPE=mongodb`
   - Descomentar código en services/atunesService.js
   - Seguir pasos en STORAGE_GUIDE.md

## ✅ Código Preparado

El servicio ya tiene TODO preparado para ambas opciones:
- ✅ Funciones async/await listas
- ✅ Validaciones incluidas
- ✅ Manejo de errores configurado
- ✅ Comentarios de código MongoDB listos para descomentar
