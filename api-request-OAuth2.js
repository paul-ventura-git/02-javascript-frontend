const { BASIC_KEY_OAUTH2 } = require('./my-environment-variables');

fetch("http://localhost:3000/oauth/token", {
  method: "POST",
  body: "grant_type=password&username=pedroetb&password=password",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic'+' '+BASIC_KEY_OAUTH2,
    'User-Agent': 'PostmanRuntime/7.32.3',
    'Accept': '*/*',
    'Cache-Control': 'no-cache',
    'Postman-Token': '354ebb3b-22e8-493a-be07-a52df5d2cff7',
    'Host': 'localhost:3000',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Content-Length': '55'
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));