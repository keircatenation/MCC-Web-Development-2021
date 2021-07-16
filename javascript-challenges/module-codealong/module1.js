var someVar = "1.) some data";

 export function someFunc() {
    return `${someVar} for output and ${someFunc()}`;
}

function otherFunc() {
    return 1;
}

console.log(someFunc())