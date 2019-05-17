const { forwardTo } = require('prisma-binding');

const Query = {
  posts: forwardTo('db'),
  post: forwardTo('db')
};

module.exports = Query;
