// Problem 3: Password Strength Checker
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces

function checkPassword(password){
    let reasons = [];

    let length = password.length;

    let hasUppercase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" ");
    
    for(let i = 0; i < length; i++){
        let character = password[i];
        // console.log(character);
        if(character >= '0' && character <= '9'){
            hasNumber = true;
        }
        if(character >= 'A' && character <= 'Z'){
            hasUppercase = true;
        }
    }
    // console.log(password, length, hasUppercase, hasNumber);

    if(!hasNumber){
        reasons.push('Missing number');
    }

    if(!hasUppercase){
        reasons.push('Missing uppercase');
    }

    if(hasSpace){
       reasons.push("Space found!!!!") 
    }

    // console.log(hasSpace);
    let isValid;
    if(reasons.length === 0){
        isValid = true;
    } else{
        isValid = false;
    }
    // console.log(isValid);

    return{
        valid: isValid,
        reasons
    }
}
let output = checkPassword("helloWorld9");
console.log(output);
