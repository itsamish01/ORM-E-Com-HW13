const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Games',
  },
  {
    category_name: 'Jobs',
  },
  {
    category_name: 'Rappers-Cds',
  },
  {
    category_name: 'Basketball',
  },
  {
    category_name: 'Shirts',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
