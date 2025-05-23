const input = document.querySelector("#input");
let length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "@#$%^&*(){}|?";

const allChar = upperCase + lowerCase + number + special;
function createPassword () {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    input.value = password;
}

function copyPassword() {
    input.select();
    document.execCommand("copy");
}
