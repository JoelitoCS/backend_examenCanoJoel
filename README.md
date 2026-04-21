# Backend - Atunes API

API Express.js que proporciona información sobre diferentes especies de atunes.

## 🚀 Características

- **API REST** simple y rápida
- **Endpoints CRUD** para atunes
- **CORS habilitado** para comunicación con frontend
- **Gestión de errores** adecuada
- **Estructura modular** con controllers y rutas

## 📋 Requisitos

- Node.js 14+ instalado
- npm o yarn

## 🛠️ Instalación

1. **Instalar dependencias:**

```bash
npm install
```

## 🔑 Variables de entorno

Crea un archivo `.env` en la raíz del proyecto (o usa el existente):

```
PORT=3000
```

## ▶️ Ejecutar el servidor

### Modo desarrollo (con nodemon):

```bash
npm run dev
```

### Modo producción:

```bash
npm start
```

El servidor estará disponible en: `http://localhost:3000`

## 📡 API Endpoints

### 1. Obtener todos los atunes

```
GET /api/atunes
```

**Respuesta:**
```json
[
  { id: 1, nombre: "Atún Rojo", peso: 150, origen: "Atlántico" },
  { id: 2, nombre: "Atún Claro", peso: 120, origen: "Pacífico" },
  { id: 3, nombre: "Atún Patudo", peso: 100, origen: "Mediterráneo" },
  { id: 4, nombre: "Atún de Aleta Azul", peso: 200, origen: "Japón" }
]
```

### 2. Obtener atún por ID

```
GET /api/atunes/:id
```

**Parámetro:**
- `id` (número) - ID del atún

**Respuesta exitosa (200):**
```json
{ id: 1, nombre: "Atún Rojo", peso: 150, origen: "Atlántico" }
```

**Respuesta error (404):**
```json
{ mensaje: "Atún no encontrado" }
```

## 📁 Estructura del proyecto

```
backend_examenCanoJoel/
├── .env                      # Variables de entorno
├── index.js                  # Punto de entrada principal
├── package.json              # Dependencias
├── controller/
│   └── atunesController.js   # Lógica de negocio
└── routes/
    └── atunesRoutes.js       # Definición de rutas
```

## 🔧 Configuración detallada

### `index.js`
- Inicializa la aplicación Express
- Configura middlewares (CORS, JSON)
- Define las rutas principales
- Inicia el servidor

### `controller/atunesController.js`
- Contiene la lógica de los atunes
- Funciones: `obtenerAtunes`, `obtenerAtunPorId`
- Array de atunes de ejemplo

### `routes/atunesRoutes.js`
- Define las rutas GET para atunes
- Conecta con el controller

## 🌐 Datos de ejemplo

El API viene con 4 especies de atunes precargadas:

1. **Atún Rojo** - Atlántico (150 kg)
2. **Atún Claro** - Pacífico (120 kg)
3. **Atún Patudo** - Mediterráneo (100 kg)
4. **Atún de Aleta Azul** - Japón (200 kg)

## 🚀 Próximas mejoras

- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Autenticación y autorización
- [ ] Endpoints POST/PUT/DELETE
- [ ] Validación de datos
- [ ] Paginación
- [ ] Filtros avanzados
- [ ] Documentación Swagger
- [ ] Tests unitarios

## 📞 Troubleshooting

### Puerto 3000 en uso

Si el puerto 3000 está en uso, cambia en `.env`:

```
PORT=3001
```

Luego actualiza el frontend `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Errores CORS

Los errores CORS ya están manejados. Si aún tienes problemas:

```javascript
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
```

### Módulos no encontrados

```bash
rm -rf node_modules
npm install
```

## 🤝 Comunicación con Frontend

El frontend se conecta a este backend usando `fetch`:

```javascript
const response = await fetch('http://localhost:3000/api/atunes');
const data = await response.json();
```

Asegúrate de que el backend está corriendo antes de iniciar el frontend.

---

**Versión:** 1.0.0  
**Última actualización:** 2026
