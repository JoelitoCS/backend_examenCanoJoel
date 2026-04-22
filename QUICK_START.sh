#!/bin/bash
# 🚀 CAMBIAR ENTRE ALMACENAMIENTO - Guía Rápida

# ═══════════════════════════════════════════════════════════
# OPCIÓN 1: USAR ARRAY (Desarrollo) ← ACTUAL
# ═══════════════════════════════════════════════════════════

# 1. Abre .env y verifica:
#    STORAGE_TYPE=array

# 2. Ejecuta el servidor:
#    npm run dev

# 3. Prueba en el navegador:
#    http://localhost:3000/atunes

# ✓ Funciona inmediatamente
# ✗ Datos se pierden al reiniciar


# ═══════════════════════════════════════════════════════════
# OPCIÓN 2: USAR MONGODB (Producción)
# ═══════════════════════════════════════════════════════════

# 1. INSTALA MONGODB
#    - Descarga: https://www.mongodb.com/try/download/community
#    - O con Docker: docker run -d -p 27017:27017 mongo

# 2. INSTALA MONGOOSE
#    npm install mongoose

# 3. COPIA EL ARCHIVO DE EJEMPLO A CARPETA MODELS
#    - Renombra: models/Atun.example.js → models/Atun.js
#    - Descomenta el código

# 4. ACTUALIZA index.js
#    - Copia el código de index.example.js
#    - Reemplaza el contenido de index.js

# 5. ACTUALIZA atunesService.js
#    - Descomenta el código MongoDB en cada función
#    - Comenta el código de array storage

# 6. ACTUALIZA .env
#    STORAGE_TYPE=mongodb
#    MONGODB_URI=mongodb://localhost:27017/atunes

# 7. REINICIA EL SERVIDOR
#    npm run dev

# ✓ Datos persistentes
# ✓ Profesional y escalable
# ✗ Requiere configuración inicial


# ═══════════════════════════════════════════════════════════
# COMANDOS ÚTILES
# ═══════════════════════════════════════════════════════════

# Ver logs en tiempo real:
# npm run dev

# Probar API (en otra terminal):
# curl http://localhost:3000/api/atunes

# Crear un atún:
# curl -X POST http://localhost:3000/api/atunes \
#   -H "Content-Type: application/json" \
#   -d '{"nombre":"Atún Nuevo","peso":180,"origen":"Océano"}'

# Ver un atún específico:
# curl http://localhost:3000/api/atunes/1

# ═══════════════════════════════════════════════════════════
# ARCHIVOS IMPORTANTES
# ═══════════════════════════════════════════════════════════

# .env                          - Configuración (EDITA AQUÍ)
# services/atunesService.js     - Lógica de almacenamiento
# controller/atunesController.js - Lógica de negocio
# routes/atunesRoutes.js        - Rutas API
# models/Atun.example.js        - Modelo MongoDB (si lo necesitas)
# index.example.js              - Ejemplo de conexión MongoDB
# STORAGE_GUIDE.md              - Guía detallada
# ARCHITECTURE.md               - Diagrama de arquitectura
