exports.handler = async () => {
  console.log('lambda-gh-helper');
  const response = {
    statusCode: 200,
    body: JSON.stringify(`lambda-gh-helper ${new Date()}`),
  };
  return response;
};
