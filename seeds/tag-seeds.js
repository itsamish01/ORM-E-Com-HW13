const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rap music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'orange',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'rap culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
