const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category_controller');
const { verifyToken } = require('../middleware/auth_middleware');

/**
 * @route GET /api/categories
 * @note Ruta protegida: solo se consume desde el dashboard con sesión activa.
 */
router.get('/', verifyToken, categoryController.getAll);

module.exports = router;