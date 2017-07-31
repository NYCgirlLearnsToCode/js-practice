//CoderByte Challenges, solved by Lisa J

// Challenge Reverse
// Using the JavaScript language, have the function FirstReverse(str) 
// take the str parameter being passed and return the string in reversed order. 
// For example: if the input string is "Hello World and Coders" then 
// your program should return the string sredoC dna dlroW olleH. 
// Sample Test Cases
// Input:"coderbyte"
// Output:"etybredoc"

// Input:"I Love Code"
// Output:"edoC evoL I"
// Hint
// Think of how you can loop through a string or array of characters backwards to produce a new string.

function firstReverse(str) {
	var newString = "";
	for(var i = str.length - 1; i>= 0; i--){
		newString = newString + str.charAt(i);
		}
  	return newString;
  }
        
   
firstReverse('fries');     

//with str[i]
function FirstReverse(str) { 
    newString = "";
    for(var i = str.length-1; i>= 0; i--){
      newString= newString + str[i];
    }
      return newString;
}
   
   
// keep this function call here 
FirstReverse('cheese');     


// with built in methods
function firstReverse(str) {
	return str.split('').reverse().join('');
}
firstReverse('cheese');

//with recursion

function firstReverse(str){
	//base case goal
	if( str === "");
	return "";
	//recusrion get str + char(0)
	return firstReverse(str.substr(1)) + str.charAt(0);
}
firstReverse('pie');

// Challenge
// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
// Sample Test Cases
// Input:4
// Output:24

// Input:8
// Output:40320



function firstFactorial(num){
//0! = 1, 1! = 1
	if( num === 0 || num === 1){
		return 1;
	}
//for loop iterating backwards from num
	for(var i = num - 1; i >= 1 ; i --){
		num = num * i;	
	}
	return num;
}
firstFactorial(5);