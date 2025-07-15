/*function happyBday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are now ${age}`);
}

happyBday("Gards", 25);
happyBday("Allen", 26);*/

function add(x, y){
    let result = x + y;

    return result;
}
function subract (x, y){
    let result = x - y;

    return result;
}
function multiply (x, y){
    let result = x * y;

    return result;
}
function divide (x, y){
    let result = x / y;

    return result;
}
function isEven (number){

    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
function isValid(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValid("W@wcom"));