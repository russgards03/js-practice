let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "Gards" && password === "123"){
        loggedIn = true;
        console.log("You are logged in");
    }
    else{
        console.log("Please try again");
    }
}
while(!loggedIn)