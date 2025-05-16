const mongoose = require('mongoose');

const InquilinoSchema = new mongoose.Schema({
  nombre_apellido: String,
  piso: String,
  telefono: String,
  mail: String,
  ultimo_pago: String,
  deudas: String,
  observaciones: String,
  unidades_funcionales: [String]
});

module.exports = mongoose.model('Inquilino', InquilinoSchema);
