const { SECRET_KEY } = require('./my-environment-variables');

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer"+" "+SECRET_KEY);

const raw = JSON.stringify({
  "username": "eloy",
  "firstName": "Eloy",
  "lastName": "Hurtado",
  "password": "123",
  "email": "ehurtado@amazon.com"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/user", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));