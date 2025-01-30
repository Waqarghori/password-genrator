

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChars = "!@#$%^&*()_+-={}:<>?";

function passGenerator() {
    let password = "";
    let characters = "";
    let passwordLength = parseInt(document.getElementById("passLength").value);
    
    if (document.getElementById("upperCase").checked) {
        characters += upperCase;
    }
    if (document.getElementById("lowerCase").checked) {
        characters += lowerCase;
    }
    if (document.getElementById("numbers").checked) {
        characters += numbers;
    }
    if (document.getElementById("specialChars").checked) {
        characters += specialChars;
    }
    if (passwordLength === 0) {
        alert("Please select at least one character type!");
        return;
    }
    
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    document.getElementById("password1").value = password;
}

function clearPassword() {
    document.getElementById("password1").value = "";
    document.getElementById("passLength").value = "";
}

