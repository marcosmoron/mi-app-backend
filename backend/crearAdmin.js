const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

mongoose.connect('mongodb://localhost:27017/gestion-edificios');

const email = 'admin@example.com';
const password = '123456';

bcrypt.hash(password, 10).then(hashed => {
  const admin = new Admin({ email, password: hashed });
  return admin.save();
}).then(() => {
  console.log('Admin creado');
  process.exit();
}).catch(err => {
  console.error('Error al crear admin:', err);
  process.exit();
});