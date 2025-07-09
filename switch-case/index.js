/*let day = 8;

switch(day){
    case 1:
        console.log(`Today is Monday~`);
        break;
    case 2:
        console.log(`Today is Tuesday~`);
        break;
    case 3:
        console.log(`Today is Wednesday~`);
        break;
    case 4:
        console.log(`Today is Thursday~`);
        break;
    case 5:
        console.log(`Today is Friday~`);
        break;
    case 6:
        console.log(`Today is Saturday~`);
        break;
    case 7:
        console.log(`Today is Sunday~`);
        break;
    default:
        console.log(`${day} is not a day!`);
        break;
}*/

let testScore = 79;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 85:
        letterGrade = "A-";
        break;
    case testScore >= 80:
        letterGrade = "B+";
        break;
    default:
        letterGrade = "F";
        break;
}

console.log(letterGrade);