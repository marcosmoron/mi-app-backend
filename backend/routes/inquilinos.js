const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Inquilino = require('../models/Inquilino');

// Guardar múltiples inquilinos
router.post('/', auth, async (req, res) => {
    const inquilinosData = req.body;

    try {
        const inquilinosGuardados = await Inquilino.insertMany(inquilinosData);
        res.json({ message: 'Inquilinos guardados correctamente', inquilinos: inquilinosGuardados });
    } catch (err) {
        console.error('Error al guardar los inquilinos:', err);
        res.status(500).json({ message: 'Error al guardar los inquilinos' });
    }
});

module.exports = router;
