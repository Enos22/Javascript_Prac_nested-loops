//NESTED LOOPS IN JS
//1. GETTING STARTED WITH MATH

function math() {
function multiplication(numb1, numb2){
    return numb1*numb2;
}
function addition(numb1,numb2){
    return numb1 + numb2;
}
function division(numb1,numb2){
    if (numb2 === 0){
        return "cannot divide by zero";
    }
    if (numb1 >= numb2){
        return numb1 / numb2;
    }
        else {
            return numb2 / numb1;
        }

    }

function subtraction(numb1,numb2){
     if (numb1 >= numb2){
        return numb1- numb2;
    }
        else {
            return numb2-numb1;
        }
    }

function square(num){
return num * num;
}
return{
    multiplication,
    addition,
    division,
    subtraction,
    square
};
}
//example;
let cal = math();
let numb1 = 5;
let numb2 = 4;
let num = 3;

console.log(`The multiplication of ${numb1} and ${numb2} is`,cal.multiplication(numb1,numb2));
console.log(`The addition of ${numb1} and ${numb2} is `, cal.addition(numb1,numb2));
console.log(`The subtraction of ${numb1} and ${numb2} is`, cal.subtraction(numb1,numb2));
console.log(`the square of ${num} is`, cal.square(num));