//1. Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

var odd = 7;
var even = 4;

console.log(odd + even);

var flower = "Tulip";
var color = "Purple ";

console.log("A " + color + flower);

//2. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var genre = [
  ["Mesopotamian", "Greek", "Roman"],
  ["Native American", "Political"]
];

console.log(genre[0][0], genre[1][0]);

//3. Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

var number = 124;

if (number < 100) {
  alert(number + " is less than 100.")
}

else {
  alert(number + " isn't less than 100.")
};


//4. Try running the script and then changing the variable's value to see how this affects the program's output.

var number = 99;

if (number < 100) {
  alert(number + " is less than 100.")
}

else {
  alert(number + " isn't less than 100.")
};

//5. Write a similar script to check if a string stored in a variable is the same as another string.

var food = "pizza";
var snack = "pizza";

if (food == snack) {
  alert(food + " is equal to " + snack)
}

else {
  alert(food + " isn't equal to " + snack)
};

//6. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

function name (someName) {
  alert(someName);
}

name("Jean");


//7. Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.

function nada () {
  console.log("No arguments");
}

nada();

//8. Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

function virtualDoor(doorNumber) {
  if (doorNumber === 1) {
    alert("You've opened door 1. Your prize is a book.");
  }
  else if (doorNumber === 2) {
    alert("You've opened door 2. Your prize is a sandwich.");
  }
  else if (doorNumber === 3) {
    alert("You've opened door 3. Your prize is a book.");
  }
  else {
    alert("Invalid door number! Try again.");
  }
}

virtualDoor(1);
virtualDoor(2);
virtualDoor(3);
virtualDoor(4);
