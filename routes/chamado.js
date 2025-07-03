const express = require('express');
const router = express.Router();
const chamadoController = require('../controllers/chamado');

router.get('/', chamadoController.listar);
router.post('/', chamadoController.criar);
router.put('/:id', chamadoController.atualizarStatus);

module.exports = router;