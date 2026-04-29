
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

