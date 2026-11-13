const categoryRepository = require('../repositories/category_repository');

class CategoryController
{
    /**
     * @brief Lista todas las categorías.
     * @param {Function} next - Delega errores al global_error_middleware.
     */
    async getAll(req, res, next)
    {
        try
        {
            const categories = await categoryRepository.findAll();
            res.json(categories);
        }
        catch (error)
        {
            next(error);
        }
    }
}

module.exports = new CategoryController();