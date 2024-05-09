const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.e30.eMJ6tbXpt_mqIaZze4qHiHDljE-EkHt4wFuG2nvds5A");

const raw = JSON.stringify({
  "title": "Third post",
  "content": "This is the content of the post."
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/blogpost", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));