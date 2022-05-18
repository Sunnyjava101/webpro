import 
{ getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } 
from './main.js'

const cityForm = document.getElementById("city-form");
if(cityForm) cityForm.addEventListener('submit', register);

function register(e) { 
  e.preventDefault();

  const name = document.getElementById("city").value;
  const pswd = document.getElementById("country").value;

  fetchData('/cities/register', {user: name, password: pswd}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "homepage.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}