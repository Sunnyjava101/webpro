function login(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("pswd").value;
  postData('http://localhost:3000/users/login', {username: name, password: pswd})
  .then((data) => {
    if(!data.message) {
      window.location.href = "homepage.html";
    }console.log(data);
  })
  .catch((error) => console.log(`Error! ${error}`));
}