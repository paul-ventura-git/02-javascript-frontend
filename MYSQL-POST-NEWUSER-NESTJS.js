const { SECRET_KEY } = require('./my-environment-variables');

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer"+" "+SECRET_KEY);

const raw = JSON.stringify({
  "username": "beto99",
  "firstName": "Alberto",
  "lastName": "Hernandez",
  "password": "123",
  "email": "ahernandez@tudominio.com"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/users", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));