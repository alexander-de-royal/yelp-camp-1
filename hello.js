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

// const password = prompt("Enter a password");
// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("Valid Password")
// } else {
//     console.log("Incorrect")
// }

// const age = 11;
// if (age < 5 || age > 65){
//     console.log("free")
// } else if (age < 10){
//     console.log("$10")
// } else if (age < 65){
//     console.log("$20")
// }

// const day = 2;
//
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     default:
//         console.log("Wee!day!")
// }

// let movieLine = ['tom', 'nancy']
// movieLine[2] = 'pablo'

// for (let i = 1; i <= 1000; i++){
//     console.log(i)
// }

// for (let i = 100; i >= 0; i++){
//     console.log(i)
// }

// const animals = [
//     "dog",
//     "cat",
//     "elephant",
//     "wolf",
//     "ape",
//     "baboon",
//     "alligator"
// ]
//
// // for (let i = 0; i <= animals.length; i++) {
// //     console.log(i, animals[i])
// // }
//
// for (let i = animals.length - 1; i>= 0; i--){
//     console.log(animals[i])
// }


// for (let i = 1; i <= 10; i++){
//     console.log(`i is: ${1}`)
//     for (let j = 1; i < 4; i++){
//         console.log(`  j is : ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
//
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW ${i + 1}`)
//         for (let j = 0; j < row.length; j++){
//             console.log(row[j])
//     }
// }

// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";
//
// let guess = prompt("enter the secret code");
// while (guess !== SECRET){
//     guess = prompt("Wrong! Try Again")
// }
// console.log("Congratulations!")

// let targetNum = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
//
// while (true){
//     guess = Math.floor(Math.random() * 10);
//     if (guess === targetNum){
//         console.log(`Correct! ${guess} & target was: ${targetNum}`);
//         break;
//     }
//     else {
//         console.log(`Guessed ${guess}... Incorrect!`)
//     }
// }

// let input = prompt("Hey, say something!")
// while (true){
//     input = prompt(input);
//     if (input === "stop copying me"){
//         break;
//     }
// }
// console.log("Okay! You Win!")

// for (let i = 0; i < 1000; i++){
//     console.log(i);
//     if ( i === 100);
//     break;
// }

// let maximum = parseInt(prompt("Welcome! Enter your max number:"));
// while (!maximum){
//     maximum = parseInt(prompt("Enter a valid number"));
// }
//
// const targetNum = Math.floor(Math.random() * maximum) + 1;
//
//
// let guess = parseInt(prompt("enter your first guess"));
// let attempt = 1;
//
// while (parseInt(guess) !== targetNum){
//     if (guess === 'q') break;
//     attempt++;
//     if (guess > targetNum){
//         guess = parseInt(prompt("Too high! Enter a new guess"))
//     } else {
//         guess = parseInt(prompt("Too low! Enter a new guess"))
//     }
// }
// if (guess === 'q'){
//     console.log("Okay, you quit")
// } else {
//     console.log("Congrats")
//     console.log(`You got it! It took you ${attempt} guesses`)
// }

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']
//
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }
//
// for (let sub of subreddits){
//     console.log(sub)
// }

// for (let char of "hello world"){
//     console.log(char)
// }

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedre: 81,
//     vonnie: 60
// }
//
// for (let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`)
// }
//
// let total = 0;
// let scores = Object.values(testScores);
//
// for (let score of scores){
//     total += score;
// }
// console.log("Average is:", total/scores.length)