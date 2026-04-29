import Atun from '../models/atunesModel.js';

let atunesMemory = [
  { id: 1, nombre: "Atún Rojo", peso: 150, origen: "Atlántico" },
  { id: 2, nombre: "Atún Claro", peso: 120, origen: "Pacífico" },
  { id: 3, nombre: "Atún Patudo", peso: 100, origen: "Mediterráneo" },
  { id: 4, nombre: "Atún de Aleta Azul", peso: 200, origen: "Japón" },
  { id: 5, nombre: "Atún Blanco", peso: 80, origen: "Caribe" }
];

const STORAGE_TYPE = process.env.STORAGE_TYPE || 'array';

const arrayStorage = {
  async obtenerTodos() { return atunesMemory; },
  async obtenerPorId(id) { return atunesMemory.find(a => a.id === parseInt(id)); },
  async crear(datos) {
    const nuevoId = atunesMemory.length > 0 ? Math.max(...atunesMemory.map(a => a.id)) + 1 : 1;
    const nuevoAtun = { id: nuevoId, nombre: datos.nombre.trim(), peso: parseFloat(datos.peso), origen: datos.origen.trim() };
    atunesMemory.push(nuevoAtun);
    return nuevoAtun;
  },
  async actualizar(id, datos) {
    const index = atunesMemory.findIndex(a => a.id === parseInt(id));
    if (index === -1) return null;
    atunesMemory[index] = { ...atunesMemory[index], ...datos };
    return atunesMemory[index];
  },
  async eliminar(id) {
    const index = atunesMemory.findIndex(a => a.id === parseInt(id));
    if (index === -1) return false;
    atunesMemory.splice(index, 1);
    return true;
  }
};

const mongodbStorage = {
  async obtenerTodos() {
    return await Atun.find();
  },
  async obtenerPorId(id) {
    return await Atun.findById(id);
  },
  async crear(datos) {
    const nuevoAtun = new Atun({
      nombre: datos.nombre.trim(),
      peso: parseFloat(datos.peso),
      origen: datos.origen.trim()
    });
    return await nuevoAtun.save();
  },
  async actualizar(id, datos) {
    return await Atun.findByIdAndUpdate(id, datos, { new: true });
  },
  async eliminar(id) {
    const resultado = await Atun.findByIdAndDelete(id);
    return resultado !== null;
  }
};

const storage = STORAGE_TYPE === 'mongodb' ? mongodbStorage : arrayStorage;

export default storage;