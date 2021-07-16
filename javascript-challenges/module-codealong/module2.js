var someVar = "2.) some data";

function someFunc() {
    return "heck - " + otherFunc();
}

function otherFunc() {
    return 2;
}

console.log(`${someVar} and ${someFunc()}`)