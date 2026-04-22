# 📦 Guía de Almacenamiento de Atunes

## Tipos de Almacenamiento

El backend soporta dos tipos de almacenamiento:

### 1. **ARRAY** (Almacenamiento en Memoria)
- **Para**: Desarrollo rápido, pruebas
- **Ventajas**: 
  - No requiere base de datos
  - Rápido de configurar
  - Perfecto para comenzar
- **Desventajas**: 
  - Los datos se pierden cuando reinicia el servidor
  - No es escalable
- **Cómo usar**:
  ```
  STORAGE_TYPE=array
  ```

### 2. **MONGODB** (Base de Datos)
- **Para**: Producción, persistencia de datos
- **Ventajas**:
  - Persistencia permanente
  - Escalable
  - Múltiples conexiones simultáneas
- **Desventajas**:
  - Requiere MongoDB instalado
  - Configuración inicial más compleja
- **Cómo usar**:
  ```
  STORAGE_TYPE=mongodb
  MONGODB_URI=mongodb://localhost:27017/atunes
  ```

## 🔄 Cambiar entre Almacenamiento

### Paso 1: Edita el archivo `.env`

Ubica la variable `STORAGE_TYPE` y cambia su valor:

```env
# Para usar ARRAY (desarrollo)
STORAGE_TYPE=array

# Para usar MONGODB (producción)
STORAGE_TYPE=mongodb
```

### Paso 2: Si cambias a MONGODB

Descomenta y configura las variables de MongoDB:

```env
STORAGE_TYPE=mongodb
MONGODB_URI=mongodb://localhost:27017/atunes
# MONGODB_USER=tu_usuario (opcional)
# MONGODB_PASSWORD=tu_contraseña (opcional)
```

### Paso 3: Instala MongoDB (si lo necesitas)

```bash
# Si usas MongoDB localmente
# Descarga desde: https://www.mongodb.com/try/download/community

# O usa Docker:
docker run -d -p 27017:27017 --name mongodb mongo
```

### Paso 4: Reinicia el servidor

```bash
npm run dev
```

## 📝 Implementación de MongoDB

Cuando decidas usar MongoDB, necesitarás:

1. **Instalar mongoose**:
```bash
npm install mongoose
```

2. **Crear el modelo** (`models/Atun.js`):
```javascript
import mongoose from 'mongoose';

const atuneSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  peso: { type: Number, required: true },
  origen: { type: String, required: true }
});

export default mongoose.model('Atun', atuneSchema);
```

3. **Actualizar el servicio** (`services/atunesService.js`):
- Descomenta el código MongoDB en cada función
- Importa el modelo Atun

4. **Conectar MongoDB en el index.js**:
```javascript
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
```

## 🧪 Cómo Probar los Cambios

### Con ARRAY:
- Crea un atún: `POST /api/atunes`
- Reinicia el servidor
- **Resultado**: El atún se pierde ❌

### Con MONGODB:
- Crea un atún: `POST /api/atunes`
- Reinicia el servidor
- **Resultado**: El atún persiste ✅

## 📚 Endpoints Disponibles

Funcionan igual independientemente del almacenamiento:

- `GET /api/atunes` - Obtener todos
- `GET /api/atunes/:id` - Obtener uno
- `POST /api/atunes` - Crear
- `PUT /api/atunes/:id` - Actualizar (preparado)
- `DELETE /api/atunes/:id` - Eliminar (preparado)

## 🚀 Recomendaciones

- **Durante desarrollo**: Usa `STORAGE_TYPE=array`
- **Antes de producción**: Cambia a `STORAGE_TYPE=mongodb`
- **Testing**: Usa array para testes rápidos
