const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/GOAT', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas DESPUÉS de los middlewares
const authRoutes = require('./backend/routes/auth');
const inquilinosRoutes = require('./backend/routes/inquilinos');

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/inquilinos', inquilinosRoutes);

// Servir archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Redirección a login.html
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});
// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});
// Exportar la aplicación para pruebas
module.exports = app;
