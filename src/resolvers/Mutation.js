const Mutation = {
  async createPost(parent, args, ctx, info) {
    console.log(args);
    const post = ctx.db.mutation.createPost({
      data: {
        ...args
      }
    }, info);

    console.log(post);
    return post;
  }
};

module.exports = Mutation;
