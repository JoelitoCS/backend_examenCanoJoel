// Servicio abstracto para gestionar atunes en diferentes tipos de almacenamiento
// Soporta: array (en memoria) y MongoDB (preparado para futura conexión)

// Array en memoria para almacenamiento local
let atunesMemory = [
  { id: 1, nombre: "Atún Rojo", peso: 150, origen: "Atlántico" },
  { id: 2, nombre: "Atún Claro", peso: 120, origen: "Pacífico" },
  { id: 3, nombre: "Atún Patudo", peso: 100, origen: "Mediterráneo" },
  { id: 4, nombre: "Atún de Aleta Azul", peso: 200, origen: "Japón" },
  { id: 5, nombre: "Atún Blanco", peso: 80, origen: "Caribe" }
];

// Tipo de almacenamiento: 'array' o 'mongodb'
const STORAGE_TYPE = process.env.STORAGE_TYPE || 'array';

// ============= IMPLEMENTACIÓN CON ARRAY =============
const arrayStorage = {
  async obtenerTodos() {
    return atunesMemory;
  },

  async obtenerPorId(id) {
    return atunesMemory.find(a => a.id === parseInt(id));
  },

  async crear(datos) {
    const nuevoId = atunesMemory.length > 0 
      ? Math.max(...atunesMemory.map(a => a.id)) + 1 
      : 1;

    const nuevoAtun = {
      id: nuevoId,
      nombre: datos.nombre.trim(),
      peso: parseFloat(datos.peso),
      origen: datos.origen.trim()
    };

    atunesMemory.push(nuevoAtun);
    return nuevoAtun;
  },

  async actualizar(id, datos) {
    const index = atunesMemory.findIndex(a => a.id === parseInt(id));
    if (index === -1) return null;

    const atunActualizado = {
      ...atunesMemory[index],
      nombre: datos.nombre?.trim() || atunesMemory[index].nombre,
      peso: datos.peso ? parseFloat(datos.peso) : atunesMemory[index].peso,
      origen: datos.origen?.trim() || atunesMemory[index].origen
    };

    atunesMemory[index] = atunActualizado;
    return atunActualizado;
  },

  async eliminar(id) {
    const index = atunesMemory.findIndex(a => a.id === parseInt(id));
    if (index === -1) return false;

    atunesMemory.splice(index, 1);
    return true;
  }
};

// ============= IMPLEMENTACIÓN CON MONGODB =============
const mongodbStorage = {
  async obtenerTodos() {
    try {
      // Este código se ejecutará cuando MongoDB esté configurado
      // const Atun = require('../models/Atun');
      // return await Atun.find();
      
      // Por ahora, retorna un mensaje indicando que MongoDB no está configurado
      throw new Error('MongoDB no está configurado. Cambia STORAGE_TYPE a "array" o configura MongoDB.');
    } catch (error) {
      throw new Error(`Error en MongoDB: ${error.message}`);
    }
  },

  async obtenerPorId(id) {
    try {
      // const Atun = require('../models/Atun');
      // return await Atun.findById(id);
      throw new Error('MongoDB no está configurado. Cambia STORAGE_TYPE a "array" o configura MongoDB.');
    } catch (error) {
      throw new Error(`Error en MongoDB: ${error.message}`);
    }
  },

  async crear(datos) {
    try {
      // const Atun = require('../models/Atun');
      // const nuevoAtun = new Atun(datos);
      // return await nuevoAtun.save();
      throw new Error('MongoDB no está configurado. Cambia STORAGE_TYPE a "array" o configura MongoDB.');
    } catch (error) {
      throw new Error(`Error en MongoDB: ${error.message}`);
    }
  },

  async actualizar(id, datos) {
    try {
      // const Atun = require('../models/Atun');
      // return await Atun.findByIdAndUpdate(id, datos, { new: true });
      throw new Error('MongoDB no está configurado. Cambia STORAGE_TYPE a "array" o configura MongoDB.');
    } catch (error) {
      throw new Error(`Error en MongoDB: ${error.message}`);
    }
  },

  async eliminar(id) {
    try {
      // const Atun = require('../models/Atun');
      // const resultado = await Atun.findByIdAndDelete(id);
      // return resultado !== null;
      throw new Error('MongoDB no está configurado. Cambia STORAGE_TYPE a "array" o configura MongoDB.');
    } catch (error) {
      throw new Error(`Error en MongoDB: ${error.message}`);
    }
  }
};

// ============= SELECTOR DE ALMACENAMIENTO =============
const getStorage = () => {
  if (STORAGE_TYPE === 'mongodb') {
    return mongodbStorage;
  }
  return arrayStorage;
};

// Exportar la instancia correcta basada en la configuración
const storage = getStorage();

export default storage;
