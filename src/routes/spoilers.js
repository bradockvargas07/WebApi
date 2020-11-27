const express = require("express");
const controlller = require("../controller/spoiler");

const router = express.Router();

router.get('/spoilers/:id',controlller.buscarUm);
router.get('/spoilers', controlller.buscarTodos);
router.post('/spoilers', controlller.criar);
router.put('/spoilers/:id',controlller.atualizar);
router.delete('/spoilers/:id', controlller.excluir);

module.exports =  router;
