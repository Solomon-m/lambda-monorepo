exports.handler = async () => {
  console.log('lambda-gh-helper');
  JSON.stringify({
    statusCode:200,
    response : `lambda-gh-helper ${new Date()}`
  })
};
