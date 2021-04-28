var myAge = 27; //Create a variable named myAge, and set it equal to your age as a number. Write a comment that explains this line of code. 
var earlyYears = 2; //Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change. Write a comment that explains this line of code.
earlyYears *=10.5; //Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
var laterYears = myAge-2;  //Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal to a variable called laterYears. We’ll be changing this value later.
laterYears *= 4; //Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.Use the multiplication assignment operator to multiply and assign in one step.

console.log(earlyYears);
console.log(laterYears);
var myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

var myName = 'ALEXANDRU'.toLowerCase(); // The toLowerCase method returns a string with all lowercase letters.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);