exports.handler = async () => {
  console.log('lambda-gh-action.....test->');
  const response = {
    statusCode: 200,
    body: JSON.stringify(`lambda-gh-action ${new Date()}`),
  };
  return response;
};
