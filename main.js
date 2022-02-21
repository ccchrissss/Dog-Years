// create a variable with a value equal to my age
var myAge = 26;

// create a variable with a value equal to 2. do not make it a const as its value will change later
var earlyYears = 2;
earlyYears *= 10.5;

// create a variable with a value equal to myAge minus 2 (since we accounted for yrs 1 & 2 in another variable). do not make it a const as its value will change later
var laterYears = myAge - 2
// multiply laterYears by 4 whilst assigning the new value to laterYears. use *=
laterYears *= 4 

// create a variable with a value equal to earlyYears plus laterYears
var myAgeInDogYears = earlyYears + laterYears

// create a variable with a value of Chris (a string) and use a string method to make all letters lowercase
myName = 'Chris'.toLowerCase();

// Make the console print a sentence detailing my name, age in human years, and age in dog years. Use string interpolation via back ticks and ${}
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);


