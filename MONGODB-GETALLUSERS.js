const { SECRET_KEY } = require('./my-environment-variables');

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer"+" "+SECRET_KEY);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://localhost:3000/users", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));