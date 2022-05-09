const users = [
 {
 userId: 12345,
 userName: "cathy123",
 password: "vitamin1"
 },
 {
 userId: 55555,
 userName: "fredburger54",
 password: "icecream"
 }
];
let getUsers = () => users;

function login(username, password)
{
	const user = users.filter((u) => u.userName === username);
	if(!user[0]) throw Error('User not found');
	if(user[0].password !== password) throw Error('Password is incorrect.');
	
	return user[0];
}

module.exports = { getUsers, login };