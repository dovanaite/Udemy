/*LECTURE: Values and Variables
Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions). Log their values to the console*/

const country = "Lithuania";
const continent = "Europe";
let population = 2795000;

console.log(country, continent, population)

/*LECTURE: Data Types
Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet.

LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens*/

const isIsland = false;
let language;
language = "lithuanian";

console.log(isIsland, population, country, language);

// LECTURE: Basic Operators


/*1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?*/
let halfPop = population / 2;
/*2. Increase the population of your country by 1 and log the result to the console
 */
population++
console.log(population);
/*3. Finland has a population of 6 million. Does your country have more people than 
Finland?*/
let finlandPop = 6000000;
// if (population > finlandPop) {
//     console.log(true)
// } else { console.log(false) }

console.log(population > finlandPop);

/*4. The average population of a country is 33 million people. Does your country 
have less people than the average country?*/
let averagePop = 33000000;
if (population > averagePop) {
    console.log(true)
} else { console.log(false) }

/*5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'*/

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

let js = 'amazing';
// if (js == 'amazing') alert('JS is fun');
console.log(40 + 8 + 23 - 10)

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

GOOD LUCK 😀
*/

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

let marksWeight1 = 78;
let marksHeight1 = 1.69;
let johnsWeight1 = 92;
let johnsHeight1 = 1.95;

let marksBMI1 = (marksWeight1 / (marksHeight1 ** 2)).toFixed(2);
let johnsBMI1 = (johnsWeight1 / (johnsHeight1 ** 2)).toFixed(2);
console.log(marksBMI1, johnsBMI1);

let markHigherBMI1 = marksBMI1 > johnsBMI1;
console.log(markHigherBMI1)

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

let marksWeight2 = 95;
let marksHeight2 = 1.88;
let johnsWeight2 = 85;
let johnsHeight2 = 1.76;

let marksBMI2 = (marksWeight2 / (marksHeight2 ** 2)).toFixed(2);
let johnsBMI2 = (johnsWeight2 / (johnsHeight2 ** 2)).toFixed(2);
console.log(marksBMI2, johnsBMI2);

let markHigherBMI2 = marksBMI2 > johnsBMI2;
console.log(markHigherBMI2)

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

if (marksBMI1 > johnsBMI1) {
    console.log(`Mark's BMI ${marksBMI1} is higher than John's ${johnsBMI1}!`)
} else {
    console.log(`John's BMI ${johnsBMI1} is higher than Mark's ${marksBMI1}!`)
}

if (marksBMI2 > johnsBMI2) {
    console.log(`Mark's BMI ${marksBMI2} is higher than John's${johnsBMI2}!`)
} else {
    console.log(`John's BMI ${johnsBMI2} is higher than Mark's ${marksBMI2}!`)
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let averageDolphins = ((96 + 108 + 89) / 3).toFixed(0);
let averageKoalas = ((88 + 91 + 110) / 3).toFixed(0);

// let averageDolphins = ((97 + 112 + 101) / 3).toFixed(0);
// let averageKoalas = ((109 + 95 + 123) / 3).toFixed(0);

// let averageDolphins = ((97 + 112 + 101) / 3).toFixed(0);
// let averageKoalas = ((109 + 95 + 106) / 3).toFixed(0);

console.log('Dolphins', averageDolphins, 'Koalas', averageKoalas)

// if (averageDolphins > averageKoalas) {
//     console.log('Dolphins win!')
// } else if (averageDolphins < averageKoalas) {
//     console.log('Koalas win!')
// } else { console.log('Everybody wins!') }


if (averageDolphins >= 100 && averageDolphins > averageKoalas) {
    console.log('Dolphins win!')
} else if (averageKoalas >= 100 && averageDolphins < averageKoalas) {
    console.log('Koalas win!')
} else if (averageDolphins >= 100 && averageKoalas >= 100 && averageDolphins === averageKoalas) {
    console.log('Everybody wins!')
} else { console.log('Nobody wins') }


let day = "wednesday";

if (day === "monday") {
    console.log("it's monday")
} else if (day === "tuesday") {
    console.log("it's tuesday")
} else if (day === "wednesday" || day === "thursday") {
    console.log("it's wednesday or thursday")
} else if (day === "friday") {
    console.log("it's friday, yayy")
} else(console.log('not a valid day'))

// skaicius = prompt('enter the number');
// console.log(skaicius);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let tip;

// let bill = 275;
// let bill = 40;
let bill = 430;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let totalBill = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalBill}`);