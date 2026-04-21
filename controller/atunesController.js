// Array de atunes
const atunes = [
  { id: 1, nombre: "Atún Rojo", peso: 150, origen: "Atlántico" },
  { id: 2, nombre: "Atún Claro", peso: 120, origen: "Pacífico" },
  { id: 3, nombre: "Atún Patudo", peso: 100, origen: "Mediterráneo" },
  { id: 4, nombre: "Atún de Aleta Azul", peso: 200, origen: "Japón" },
  {id: 5, nombre: "Atún Blanco", peso: 80, origen: "Caribe" }
];

// Obtener todos los atunes
const obtenerAtunes = (req, res) => {
  res.json(atunes);
};

// Obtener atún por ID
const obtenerAtunPorId = (req, res) => {
  const { id } = req.params;
  const atun = atunes.find(a => a.id === parseInt(id));
  
  if (!atun) {
    return res.status(404).json({ mensaje: "Atún no encontrado" });
  }
  
  res.json(atun);
};

export { obtenerAtunes, obtenerAtunPorId };
