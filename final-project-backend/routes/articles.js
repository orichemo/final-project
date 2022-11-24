const router = require('express').Router();

const { getArticles, deleteArticleById, createArticle } = require('../controllerss/articles');

const { validateCreateArticle, validateArticleId } = require('../middleware/validator');

// route definitions
router.get('/', getArticles); // delete this after checking
router.post('/', validateCreateArticle, createArticle);
router.delete('/:articleId', validateArticleId, deleteArticleById);

module.exports = router;
