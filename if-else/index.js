//IF Statements

/*let age = 17;

if(age >= 18){
    console.log("You are old wahaha");
}else{
    console.log("Uh oh");
}

let time = 14;

if(time < 12){
    console.log("Good morning");
}else{
    console.log("Good afternoon");
}*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultEl = document.getElementById("resultEl");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);


    if(age >= 100){
        resultEl.textContent = `Too old!`;
    }
    else if(age == 0){
        resultEl.textContent = `Kid`;
    }
    else if(age < 0){
        resultEl.textContent = `Liar`;
    }
    else if(age >= 18){
        resultEl.textContent = `You are old enough`;
    }
    else{
        resultEl.textContent = `You are not old enough`;
    }

}

