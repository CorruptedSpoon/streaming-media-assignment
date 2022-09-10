const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const client3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  getFile(response, index, 'text/html');
};

const getClient2 = (request, response) => {
  getFile(response, client2, 'text/html');
};

const getClient3 = (request, response) => {
  getFile(response, client3, 'text/html');
};

module.exports = {
  getIndex,
  getClient2,
  getClient3,
};
