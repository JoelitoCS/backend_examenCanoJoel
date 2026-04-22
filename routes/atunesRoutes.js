import express from 'express';
import { obtenerAtunes, obtenerAtunPorId, agregarAtun, actualizarAtun, eliminarAtun } from '../controller/atunesController.js';

const router = express.Router();

// GET /api/atunes - obtener todos los atunes
router.get('/', obtenerAtunes);

// POST /api/atunes - crear un nuevo atún
router.post('/', agregarAtun);

// GET /api/atunes/:id - obtener atún por ID
router.get('/:id', obtenerAtunPorId);

// PUT /api/atunes/:id - actualizar un atún
router.put('/:id', actualizarAtun);

// DELETE /api/atunes/:id - eliminar un atún
router.delete('/:id', eliminarAtun);

export default router;
