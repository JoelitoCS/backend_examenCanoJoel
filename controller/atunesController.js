import atunesService from '../services/atunesService.js';

// Obtener todos los atunes
const obtenerAtunes = async (req, res) => {
  try {
    const atunes = await atunesService.obtenerTodos();
    res.json(atunes);
  } catch (error) {
    res.status(500).json({ mensaje: `Error al obtener atunes: ${error.message}` });
  }
};

// Obtener atún por ID
const obtenerAtunPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const atun = await atunesService.obtenerPorId(id);
    
    if (!atun) {
      return res.status(404).json({ mensaje: "Atún no encontrado" });
    }
    
    res.json(atun);
  } catch (error) {
    res.status(500).json({ mensaje: `Error al obtener atún: ${error.message}` });
  }
};

// Agregar un nuevo atún
const agregarAtun = async (req, res) => {
  try {
    const { nombre, peso, origen } = req.body;
    
    // Validar que los campos requeridos estén presentes
    if (!nombre || !peso || !origen) {
      return res.status(400).json({ mensaje: "Faltan campos requeridos: nombre, peso, origen" });
    }
    
    // Validar que peso sea un número
    if (isNaN(peso) || peso <= 0) {
      return res.status(400).json({ mensaje: "El peso debe ser un número positivo" });
    }
    
    // Crear el atún usando el servicio
    const nuevoAtun = await atunesService.crear({
      nombre,
      peso,
      origen
    });
    
    // Responder con el atún creado y status 201 (Created)
    res.status(201).json(nuevoAtun);
  } catch (error) {
    res.status(500).json({ mensaje: `Error al crear atún: ${error.message}` });
  }
};

// Actualizar un atún (preparado para futura implementación)
const actualizarAtun = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, peso, origen } = req.body;
    
    const atunActualizado = await atunesService.actualizar(id, {
      nombre,
      peso,
      origen
    });
    
    if (!atunActualizado) {
      return res.status(404).json({ mensaje: "Atún no encontrado" });
    }
    
    res.json(atunActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: `Error al actualizar atún: ${error.message}` });
  }
};

// Eliminar un atún (preparado para futura implementación)
const eliminarAtun = async (req, res) => {
  try {
    const { id } = req.params;
    
    const eliminado = await atunesService.eliminar(id);
    
    if (!eliminado) {
      return res.status(404).json({ mensaje: "Atún no encontrado" });
    }
    
    res.json({ mensaje: "Atún eliminado correctamente", id });
  } catch (error) {
    res.status(500).json({ mensaje: `Error al eliminar atún: ${error.message}` });
  }
};

export { obtenerAtunes, obtenerAtunPorId, agregarAtun, actualizarAtun, eliminarAtun };
