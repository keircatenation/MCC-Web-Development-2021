/*Store a todo list in an array
Use commands to do several things:
1) display the list X
2) add a new item to the list (maybe multiples at once)
3) remove an item (maybe multiples at once)
4) reset the todo list
*/

let todoList = [
    [], //incomplete
    [] //completed
]

const replaceTodo = (todo, position) => {
    todo[0].splice(position,1,todo)
    return todoList
}
function displayTodosLeft() {
    console.log("my todo list:", todoList[0])
    return todoList
}
function displayCompleted() {
    console.log("Completed todos:", todoList[1])
    return todoList
}
function addTodo(todo,flag=0) { // flag=0 is the default parameter, so this is the value that it will be on default
    todoList[flag].push(todo) //concat
    return todoList
}
function removeTodo(position,flag) {
    console.log("Deleted item: ", todoList[flag].splice(position, 1)) //slice
    return todoList
}
function resetTodos() {
    todoList[0].length = 0
    todoList[1].length = 0
    return todoList
}
function markComplete(todo,position) {
    removeTodo(position, 0)
    addTodo(todo,1)
    return todoList
}