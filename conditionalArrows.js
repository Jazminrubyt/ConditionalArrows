// Write an arrow function that checks to see if a user is older than 18.
const checkAge = (age) => age >= 18 ? "You are not old enough" : "You right ahead"

//  Write an arrow function that checks to see if it is currently raining.
const checkRain = (isRaining)=>{
    return isRaining ? "Get your rain jacket" : "No rain on todays forecast";
}

//Check is the number is even 
const checkIfEven = (even) => even % 2 ? "Thats an even number" : "Thats odd"

//Write an arrow function that takes in two parameters and checks whether one number is greater than another.
const compareNumbers = (num1,num2) => {
    if (num1 > num2){
        return `${num1} is less than ${num2}`;  
    }
    else if (num1 < num2){
        return `${num1} is less than ${num2}`;
    }
    else{
        return `${num1} is equal to ${num2}`;
    }
}