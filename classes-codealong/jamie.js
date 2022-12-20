/*
We want to create a dashboard interface that allows us to input a user ID 
and submit it to fetch a user object in JSON format which we can then use as data
to "hydrate" the page with user profiles in some kind of "card" style
1.) All users will be stored in a simple array. So complete the getUsers() function so that it
can take a users input for the user ID, then go fetch that user and store the response
as an object in the myUsers Array. (don't overwrite previously stored users!)
2.) Hook the array up to your HTML with a render() function that loops through the array and 
displays each user on the page somehow. You'll have to write the css and think of how the html
of the user cards will look. You can add a couple of users manually to make debugging your css easier
You can choose to use either Objects or Classes to organize your code into a module
We'll use this endpoint to fetch the users: `https://jsonplaceholder.typicode.com/users/${id}`
the documentation for how to use that endpont is here: https://jsonplaceholder.typicode.com
Bonus 1: Add a button that will remove the user from the display
Bonus 2: Add a button that changes the user to "Admin" status and gives a visual cue that they are Admins
Extra Bonus: Use promises, keyframes and web-animations library to make the users "card" animated onto the page nicely and gradually 
*/

const hideUser = (id) => {
	document.querySelector('[data-id="'+id+'"]').classList.add('hidden')
	myUsers.filter(user => user.id == id).map(user => user.hidden = true)
}

document.querySelector('form button').addEventListener('click', function(e) {
	e.preventDefault()
	let userId = document.querySelector('#user').value
	getUser(userId)
})

let myUsers = [];

function getUser(id){
    // fetch a user with given id
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(data => {
		console.log(validateUser(data.id))
		if(data && !validateUser(data.id).length){
			let modifiedUser = User(data)
			myUsers.push(modifiedUser)
			addUserToDash(modifiedUser)
			return modifiedUser
		}
		throw new Error(validateUser(data.id) ? 'Duplicate User' : 'No user found!')
    })
	.catch(error => console.log(error))
	.finally(() => {
		console.log('finished fetching user')
	})
}

function getUserAndPosts(id) {
	const user = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp => resp.json())
	const posts = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(resp => resp.json())
	return Promise.all([user, posts])
	.then(resp => {
		console.log(resp)
		let posts = resp[1].map(i => i.title)
		let user = resp.posts = posts
		return user
	})
	.then(data => {
		console.log(data)
	})
}

function User(user) {
	// the data transformer
	let modifiedUser = user
	modifiedUser.admin = false
	modifiedUser.hidden = false
	console.log(modifiedUser)
    return modifiedUser;
}

function addUserToDash(user){
	// add user to DOM
	console.log(user, myUsers)
    // let user = myUsers[myUsers.length - 1]
	let { id, name, address, email, admin, hidden } = user
	output.innerHTML += `
		<article data-id=${id} class=${hidden ? 'hidden' : admin ? 'admin': ''}>
			<div class='flex'>
				<img src='https://ui-avatars.com/api/?name=${name}' alt='picture of ${name}'>
				<div class='info'>
					<h1>${name}</h1>
					<div>${email}</div>
					<div>${address.suite} ${address.street} ${address.city}</div>
				</div>
			</div>
			<span>Admin: ${admin} </span>
			<span> toggle Admin: <input type='checkbox' onchange='toggleAdmin(${id})' ${admin ? 'checked' : ''}></span>
			<button onclick='hideUser(${id})'>Hide User</button>
		</article>
		`
}

function validateUser(id){
	return myUsers.filter(user => user.id === id)
}


function addUser(id, name, address, email) {
	this.id = id;
	this.name = name;
	this.address = address;
	this.email = email;

	this.info = () => {
		return `${id}: ${name} lives at ${address} and can be contacted at ${email}`;
	}
}
const output = document.querySelector('.users')

function renderAllUsers(){
	output.innerHTML = ''
	myUsers.forEach(user => {
	addUserToDash(user)
	})
}

function toggleAdmin(id) {
	return new Promise(function(resolve, reject) {
		myUsers.filter(user => user.id === id).map(user => user.admin = !user.admin);
		resolve(true)
	  })
	  .then(() => renderAllUsers());
}
function checkAdmin(bool){
	return bool ? "checked" : ""
}



const Jamie = {
	id: 101, 
	name: "jamie",
	address: {suite: "123", street: "First Pl", city: "Rochester"}, 
	email: "jamie@gmail.com", 
	admin: true,
	hidden: false
}

myUsers.push(Jamie)
addUserToDash(Jamie);

