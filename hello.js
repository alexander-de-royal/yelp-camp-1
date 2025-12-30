// console.log("Before Conditional")
// let random = Math.random();
// if (random <0.5 ){
//     console.log("Your number is less than 0.5")
//     console.log(random)
// }
// if (random >= 0.5){
//     console.log("Your number is greater than 0.5")
//     console.log(random)
// }

// const dayOfWeek = 'Monday';
//
// if (dayOfWeek === 'Monday')
// {
//     console.log("I hate mondays")
// }
// else if (dayOfWeek === 'Saturday')
// {
//     console.log("I love Saturday")
// }

// const age = 8;
//
// if (age < 5)
// {
//     console.log("Free")
// }
// else if (age < 10)
// {
//     console.log("$10")
// }
// else if (age < 65)
// {
//     console.log("$20")
// }
// else
// {
//     console.log("$10")
// }

// let rating = 99;
//
// if (rating === 3)
// {
//     console.log("You are a superstar")
// }
// else if (rating === 10)
// {
//     console.log("You are a villian")
// }
// else
// {
//     console.log("You are a director")
// }

// Password must be 6+ characters
// Password cannot include space
// const password = prompt("please enter a new password")
//
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1 ){
//         console.log("Valid Password")
//     } else {
//         console.log("Remove space")
//     }
//     console.log("Long enough password")
// } else {
//     console.log("Password too short")
// }

// const userInput = prompt("Enter Something");
//
// if (userInput){
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// if (0){
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

const password = prompt("Enter a password");
if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log("Valid Password")
} else {
    console.log("Incorrect")
}


