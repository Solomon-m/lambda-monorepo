exports.handler = async () => {
  console.log('lambda-gh-action.');
  return JSON.stringify({
    statusCode:200,
    response : `lambda-gh-action ${new Date()}`
  })
};
