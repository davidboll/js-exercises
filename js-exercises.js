/* JavaScript Exercises */


/* Create an array and add three numbers to it. */
var myArray = [2, 11, 46];

/* Use your array to return the second number. */
myArray[1];

/* What data type is 123/12? "Things in quotes!"? undefined?

123/12 (= 10.25) = Number
"Things in quoutes!" = String
undefined = Undefined

*/

/* Write an if statement that returns true. */
var myString = "This is true";

if (myString == "This is true"){
  alert("This is so true!");
}
else{
  alert("yeah, thats not even close..");
}

/* Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and
emptyArray = []. Use a for loop to add our names to emptyArray. (Hint: n needs
to be the length of the array. Google a helper method for finding the length
of an array in Javascript. Is it the same as Ruby?) */

myArray = ['Thomas', 'Amber', 'Raoul'];
emptyArray = [];

for (var i = 0; i < myArray.length; i++) {
  emptyArray.push(myArray[i]);
}
