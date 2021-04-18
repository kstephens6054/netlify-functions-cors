const CORS = require('netlify-functions-cors');

exports.handler = async (event, context) => {
  const options = {
    allowOrigin: 'example.com',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Authorization', 'Content-Type'],
    exposeHeaders: ['Authorization', 'Content-Type'],
    allowCredentials: true,
    maxAge: 43200
  };

  const cors = CORS(event, options);

  if (cors.isPreflight) {
    return cors.preflight();
  }

  return cors.response({
    statusCode: 200,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ message: 'It works!' })
  });
};
