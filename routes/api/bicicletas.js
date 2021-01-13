var express = require('express');
//const { bicicleta_create_get } = require('../controllers/bicicleta');
var router = express.Router();
var bicicletaController = require('../../controllers/api/bicicletaControllerAPI')

router.get('/', bicicletaController.bicicleta_list);
router.post('/create', bicicletaController.bicicleta_create);
router.post('/delete', bicicletaController.bicicleta_delete);

module.exports = router;