const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getIndex);
router.post('/add', controller.addItem);
router.get('/edit/:id', controller.getEditItem);
router.post('/edit', controller.postEditItem);
router.get('/delete/:id', controller.delete);

module.exports = router;

