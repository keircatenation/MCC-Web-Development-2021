/*1 - describe yourself
I'm a front-end web developer with a background in graphic and user experience design. As part of my degree in UX design, I studied some web development, and I dove back into it this past year with a bootcamp that focused on Javascript, React, and Redux. In my spare time, I enjoy learning how to make different kinds of crafts - I'm currently learning how to use a serger to make sturdier and more professional clothing. My adventures in crafting ensure that I'm always thinking about new ways to do things and new things to learn, which is a philosophy I apply to coding as well.

2 - qualifications & bg
I have been working with HTML and CSS for seven years now, and recently took a bootcamp to learn to use React, Redux, and the changes in Javascript since 2016. I have worked as a freelance web designer for seven years, and currently act as a freelance front end developer as well as designer.

3 - greatest strength as a developer?
My greatest strength is my drive and desire to learn more, and to master what I've already learned. If I'm given a task that I don't know how to finish at first, I will search around and ask questions until I've learned how to do it.

4 - Greatest weakness WRT the role?
I'm working on expanding my knowledge about web accessibility, as well as expanding my knowledge of state management with Redux.

5 - describe a github repo you're proud of
https://github.com/keircatenation/MCC-Web-Development-2021/tree/main/dragon-clicker

This is a simple app, made with vanilla JS, which lets users create dragons, which each keep track of how many times they've been clicked, add new dragon types, and filter dragons from the screen. This was an exercise in maintaining a clear and organized MVC pattern, with new requirements added each week during development to add complexity to the app.
I learned how to dynamically set CSS styles with JS while creating this app, and I used that to change the colors of the SVG that I use to represent the dragons. Because I am using SVGs for the dragons, I included color pickers in the "Add Dragon Type" modal, so users can create new dragon types with much more personalized results. I also saved the filters in the state for the app, so when the user opens up the "Filter Dragons" modal, the current filters are automatically selected.

6 - describe a code-related work experience that challenged you
I was contracted to design and script out a table that can be filtered and sorted by several different criteria, all using vanilla JS. The simplest solution - creating buttons that sort or filter one way - isn't very user experience friendly, so I created a simple state object to save information on what the table is currently being sorted and filtered by, with each button click. With state saved, I could sort table items alphabetically and reverse-alphabetically while filtering by certain criteria. I had also initially been using innerHTML in order to simplify the code, but I got feedback from a security expert to create DOM nodes instead, so I reworked my scripts to work with nodes instead of the innerHTML.
*/

//7 - impure vs pure
//IMPURE:
var fullName = "";
function createFullName (firstName, lastName) {
     fullName = `firstName lastName`;
}
//PURE:
function createFullName (firstName, lastName) {
     return `firstName lastName`
}

//8 - ziparrays
function zipArrays (arr1, arr2) {
    let newArray = [];
    for (let i = 0; i<arr1.length; i++){
        newArray.push([arr1[i], arr2[i]])
    }
    return newArray;
}

//9 - fizzbuzz
function printFizzBuzz(){
    for (let i=1; i<=100; i++){
        if (i%3 == 0 || i%5 == 0) {
            if (i%3 == 0){
                console.log("Fizz")
            }
            if (i%5 == 0){
                console.log("Buzz")
            }
        } else {
            console.log(i)
        }
    }
}

//10 - fetch users
let list = document.createElement("ul");
function getUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let sorted = data.sort((a,b) => a.name.localeCompare(b.name))
            console.log(sorted)
            for (let i = 0; i<data.length; i++){
                let name = document.createElement("li")
                name.innerText = sorted[i].name;
                list.appendChild(name)
            }
        })
        .catch(e => console.log(e))
}
getUsers()
document.body.append(list);