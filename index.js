import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import atunesRoutes from './routes/atunesRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/atunes', atunesRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
