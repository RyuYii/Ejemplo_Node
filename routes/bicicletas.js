
var express = require('express');
//const { bicicleta_create_get } = require('../controllers/bicicleta');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta')
 
/* GET home page. */
router.get('/', bicicletaController.bicicleta_list);
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);
router.get('/:id/update', bicicletaController.bicicleta_update_get);
router.post('/:id/update', bicicletaController.bicicleta_update_post);
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);
router.get('/:id/view', bicicletaController.bicicleta_view);

module.exports = router;