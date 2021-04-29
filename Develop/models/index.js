// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {


});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'product_id',
    //not sure if this is correct

});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
    through: {
        model: 'ProductTag',
    }
    //as: '____',

});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
