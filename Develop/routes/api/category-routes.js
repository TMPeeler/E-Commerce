const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const CategoryProductData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(CategoryProductData);
  } catch  (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const CategoryProductData = await Category.findByPk(req.params.id, {

      include: [{model: Product}],
    });
    res.status(200).json(CategoryProductData);
  } catch  (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  console.log(req.body);
  try {
    const CategoryData = await Category.create({
      category_name: req.body.category_name,
    });

    res.status(200).json(CategoryData);
  } catch  (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  
  try {
    const CategoryData = await Category.update(req.body, {
        where: {
          id: req.params.id,
        }
      });

    res.status(200).json(CategoryData);
  } catch  (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const CategoryData = await Category.destroy({
        where: {
          id: req.params.id,
        }
      });

    res.status(200).json(CategoryData);
  } catch  (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
