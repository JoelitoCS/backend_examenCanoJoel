import express from 'express';
import { obtenerAtunes, obtenerAtunPorId } from '../controller/atunesController.js';

const router = express.Router();

// GET /api/atunes - obtener todos los atunes
router.get('/', obtenerAtunes);

// GET /api/atunes/:id - obtener atún por ID
router.get('/:id', obtenerAtunPorId);

export default router;
