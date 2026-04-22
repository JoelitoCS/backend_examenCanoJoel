// ⚠️ EJEMPLO: Modelo de Atun para MongoDB
// Este archivo es un EJEMPLO - solo actívalo cuando uses MongoDB

// npm install mongoose

/*
import mongoose from 'mongoose';

const atunesSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
      minlength: 3
    },
    peso: {
      type: Number,
      required: [true, 'El peso es obligatorio'],
      min: [0, 'El peso debe ser positivo']
    },
    origen: {
      type: String,
      required: [true, 'El origen es obligatorio'],
      trim: true
    }
  },
  { timestamps: true } // Agrega createdAt y updatedAt automáticamente
);

export default mongoose.model('Atun', atunesSchema);
*/

// PASOS PARA ACTIVAR MONGODB:
// 1. Descomenta este archivo
// 2. Cambia STORAGE_TYPE=mongodb en .env
// 3. Descomentar el código MongoDB en services/atunesService.js
// 4. Ejecuta: npm install mongoose
// 5. Actualiza index.js con la conexión a MongoDB
