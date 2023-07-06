const express = require('express');
const novelController = require('../controllers/novelController');

const router = express.Router();

router.get('/create', novelController.novel_create_get);
router.get('/', novelController.novel_index);
router.post('/', novelController.novel_create_post);
router.get('/:id', novelController.novel_details);
router.delete('/:id', novelController.novel_delete);

module.exports = router;