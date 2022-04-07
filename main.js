class User {
  constructor(email, userName, pswd) {
	//changed attribute i previously had
    this.userEmail = email;
    this.userName = userName;
    this.setUserPassword(pswd);
  }
  getUserEmail() {
    return this.userEmail;
  }
  getUserName() {
    return this.userName;
  }
  getUserPassword() {
    return this.userPassword;
  }
  //set methods
  setUserEmail(email) {
    this.userEmail = email;
  }
  setUserName(userName) {
    this.userName = userName;
  }
  setUserPassword(pswd) {
	  this.userPassword = pswd;
  }
}

const form = document.getElementById("register");
form.addEventListener('submit', createUser);

function createUser(e) {
  e.preventDefault();

	let e = document.getElementById("email");
	let p = document.getElementById("password");
	let u = document.getElementById("username");
	
	let user1 = new User(e, p, u);
	console.log(user1);
}
