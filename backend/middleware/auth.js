const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || "supersecreto";

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token requerido' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.adminId = decoded.id;
    next();
  } catch (err) {
    console.error('Error al verificar el token:', err.message);
    res.status(401).json({ message: 'Token inválido' });
  }
};
