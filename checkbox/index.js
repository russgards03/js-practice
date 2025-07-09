const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payBtnBtn = document.getElementById("payBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function(){
    
    if(myCheckbox.checked){
        subResult.textContent = `You are tested`;
    }
    else{
        subResult.textContent = `You are not tested`;
    }

    if(visaBtn.checked){
        payResult.textContent = `You are using Visa`;
    }
    else if(masterBtn.checked){
        payResult.textContent = `You are using Mastercard`
    }
    else if(payBtn.checked){
        payResult.textContent = `You are using Paypal`
    }
    else{
        payResult.textContent = `Please select a card to use`
    }
}