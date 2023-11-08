exports.handler = async (event, ctx) => {
  return [{ id: ctx.result.id }];
};
