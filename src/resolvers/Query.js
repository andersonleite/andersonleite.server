const { forwardTo } = require('prisma-binding');

const Query = {
  posts: forwardTo('db'),
  // async posts(parent, args, ctx, info){
  //   const posts = ctx.db.query.posts();
  //   return posts;
  // }
};

module.exports = Query;
