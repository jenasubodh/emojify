const translate = require('moji-translate');

// For development/testing purposes
exports.handler = function(event, context, callback) {
  console.log('Running index.handler');
  const response = {"text": translate.translate(event.text)}
  callback(null, response);
};
