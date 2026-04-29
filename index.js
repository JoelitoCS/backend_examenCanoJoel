import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import atunesRoutes from './routes/atunesRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ============= CONEXIÓN A MONGODB =============
// Solo se conecta si STORAGE_TYPE=mongodb
if (process.env.STORAGE_TYPE === 'mongodb') {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión a MongoDB:', err));
}

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/atunes', atunesRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
  console.log(`📦 Almacenamiento: ${process.env.STORAGE_TYPE || 'array'}`);
});

