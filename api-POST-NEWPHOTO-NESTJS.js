const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.e30.eMJ6tbXpt_mqIaZze4qHiHDljE-EkHt4wFuG2nvds5A");

const raw = JSON.stringify({
  "name": "Otra foto mas",
  "description": "Esta es otra foto de prueba",
  "filename": "ejemplo5.jpeg",
  "views": "0",
  "isPublished": true
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/photo", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));