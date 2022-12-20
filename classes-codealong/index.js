import {users as userData} from "./users.js";

class UserManager {
    #users = [];
    #output;
    #button;
    constructor(parentNode) {
        this.#button = parentNode.querySelector('form button')
        this.#output = parentNode.querySelector('.users')
        this.#button.addEventListener('click', e => {
            e.preventDefault();
            let userId = Number(parentNode.querySelector('input').value);
            this.addUser = userId;
        })
        this.#users.push({
            id: 13,
            name: 'Keiran',
            address: {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            email: 'me@me.com'
        })
        this.renderUsers();
    }
    get getUsers() {
        return this.#users
    }
    /**
     * @param {number} ID
     */
    set addUser(ID) {
        let data = userData.find(user => user.id === ID);
        try {
            if ( data && !this.validateUser(ID).length) {
                let newUser = {
                    id: data.id,
                    name: data.name,
                    address: data.address,
                    email: data.email
                }
                this.#users = [...this.#users, newUser];
                this.renderUsers();
            } else if( !data ) {
                throw new Error("No user found!")
            } else if( this.validateUser(ID).length ) {
                throw new Error("We already have that user!")
            } else {
                throw new Error("Something went wrong.")
            }
        } catch(error) {
            console.log(error)
        }
    }
    addUserToDash(user) {
        let { id, name, address, email } = user;
        let userDiv = document.createElement('div');
        userDiv.setAttribute( 'data-id', id );
        let content = document.createElement('div');
        content.setAttribute('class', 'flex');
        let img = document.createElement('img');
        img.setAttribute('src', `https://ui-avatars.com/api/?name=${name}`);
        img.setAttribute('alt', `picture of ${name}` );
        let info = document.createElement('div');
        info.setAttribute('class', 'info');
        let h1name = document.createElement('h1');
        h1name.innerText = name;
        let iEmail = document.createElement('div');
        iEmail.innerText = email;
        let iAdd = document.createElement('div');
        iAdd.innerText = `${address.suite} ${address.street} ${address.city}`;

        info.appendChild(h1name);
        info.appendChild(iEmail);
        info.appendChild(iAdd);
        content.appendChild(img);
        content.appendChild(info);
        userDiv.appendChild(content);
        this.#output.appendChild(userDiv);
    }
    renderUsers() {
        this.#output.innerHTML = ''
        this.#users.forEach(user => {
            this.addUserToDash(user);
        })
    }
    validateUser(ID) {
        return this.#users.filter(user => user.id === ID)
    }
}
let first = document.querySelector('#first')
let firstUM = new UserManager(first);
let second = document.querySelector('#second')
let secondUM = new UserManager(second);