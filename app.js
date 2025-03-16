
let jzUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let jzNumbers = "0123456789";
let jzSpecial = "!@#$%^&*()_+{}[]|:;<>,.?/~`";



let inputLen = document.getElementById("pass-length");
let upper = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let special = document.getElementById("special-char");
let showPass = document.getElementById("result");

let password = "abcdefghijklmnopqrstuvwxyz"; 

let getnrate = document.getElementById("generate")
getnrate.addEventListener("click",function(){
    
    if(inputLen.value == "" || inputLen.value <= 1 || inputLen.value > 50){
        alert("Please enter a valid password length")
    }
    if (upper.checked) {
        password += jzUpper;
    }
    if (numbers.checked) {
        password += jzNumbers;
    }
    if (special.checked) {
        password += jzSpecial;
    }
    let result = "";
    for (let i = 0; i < inputLen.value; i++) {
        let random = Math.floor(Math.random()* password.length)
        result += password.charAt(random)
        
    }
    showPass.innerHTML = result;
})
