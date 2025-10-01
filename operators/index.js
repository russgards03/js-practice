/*TERNARY OPERATOR
let age = 16;
let message = age >= 18 ? "You are old enough" : "You are not old enough";

console.log(message);

const time = 12;
const greeting = time <= 12 ? "It's early morning" : "It's late";

console.log(greeting);

const isStudent = false;
const message = isStudent ? "You are a student" : "You are not a student";

console.log(message);

const purchaseAmt = 125;
const discount = purchaseAmt >= 100 ? 10 : 0;

console.log(`your total is $${purchaseAmt - purchaseAmt * (discount/100)}`)*/

/*--------------------------*/

/*SPREAD OPERATOR

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let uname = "Russ Gards"
let letters = [...uname].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "celery", "potatoe"];


let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);*/

/*--------------------------*/

/*REST PARAMETERS

function openFridge(...foods){
    console.log(...foods);

}
function getFood(...foods){
    return foods;

}

const food1 = "pizza";
const food2 = "hotdog";
const food3 = "hamburger";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);*/

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAvg(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;

}
const total = getAvg(1, 2, 3, 4, 5);
console.log(`Your average is $${total}`)