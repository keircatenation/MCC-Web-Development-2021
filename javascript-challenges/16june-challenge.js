function convertTemp(temp, flag){
    // the flag is a switch or a toggle
    let options = [
        (temp - 32) / 1.8, // formula for fahrenheit to celsius
        (temp/1.8) + 32 //formula for celsius to fahrenheit
    ]
    return options[flag];
}

convertTemp(45, 0);
//1st param: temp[provie a temp in either F or C]
//2nd param: toggle flag[provide 0 to yield celsius, 1 to field fahrenheit]

console.log(
    convertTemp(45,0),
    convertTemp(32,0),
    convertTemp(45,1)
)