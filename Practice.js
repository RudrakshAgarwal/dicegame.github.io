
var para = prompt("Enter the Para: ");
var count = para.slice(0, 140);
alert(count);
alert(count.length);


// Evercise on Strings:
// Capatalise the first letter of the name.
var name = prompt("What is your name: ");
name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
alert("Hello, " + name);
alert(name.length);


// Exercise on Numbers:
// Dog Age to Human Age Formula
var age = prompt("Enter the Dog Age: ");
var humanAge = ((age - 2) * 4) + 21;
alert("Your Dog Age is " + humanAge + " years old in Human Years.");


function getMilk (amount, costPerBottle) {

  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(amount, costPerBottle) + " Bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(amount, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle)
{
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle)
{
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello Rudraksh, here is your " + getMilk(10, 3) + "rs change");



// Exercise - Know you age after 90 years.
function lifeInWeeks(age)
{
  var yearsRemaning = 90 - age;
  var days = yearsRemaning * 365;
  var weeks = yearsRemaning * 52;
  var months = yearsRemaning * 12;

  console.log("You have "+ days + " days, " + weeks + " weeks, and " + months + " months left.")
}

lifeInWeeks(21);

// Exercise to calculate BMI.

function BMI (weight, height)
{
  var bmi = Math.round((weight) / (Math.pow(height, 2)));

  if(bmi <= 18.5){
    return ("Your BMI is " + bmi + " So you are underweight.");
  }
  else if(bmi > 18.5 && bmi <= 24.9){
    return ("Your BMI is " + bmi + " So have a normal weight.");
  }
  else if(bmi > 24.9){
    return ("Your BMI is " + bmi + " So you are over weight.");
  }

}

var bmi = BMI(65, 2);

console.log(bmi);




// Pseudo Random No. Generator.

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);


// Love Calculator

var n = prompt("Enter your name: ");
var p = prompt("Enter Your partner's name: ");

var calc = Math.random() * 100 + 1;
calc = Math.floor(calc);

if (calc >= 70 )
{
  alert("Your love Score is: " + calc + "%" + " You love each other like Priyanka loves jonas");
}

else if(calc >= 30 && calc < 70){
  alert("Your love Score is: " + calc + "%");
}
else if(calc < 30){
  alert("Your love Score is: " + calc + "%" + " Love is not sufficient between you guyz.");
}

console.log("Your love Score is: " + calc + "%");



// Arrays: 

var guestList = ["Rudraksh", "Rahul", "Soham", "Aayush", "Anuj", "Lekhraj"];

var guestName = prompt("Tell me your Name: ");

if (guestList.includes(guestName))
{
  alert("Welcome to the Party!!");
}
else
{
  alert("Sorry, You are not eligible. Better Luck next Time.");
}



// FizzBuzz:

var output = [];
var count = 1;

function fizzBuzz()
{

  while(count <= 100)
  {
      if(count % 3 == 0 && count % 5 == 0)
    {
      output.push("FizzBuzz")
    }
    else if(count % 3 == 0)
    {
      output.push("Fizz");
    }
    else if(count % 5 == 0)
    {
      output.push("Buzz")
    }
    else
    {
      output.push(count);
    }

    count ++;
  }

  console.log(output);
}



