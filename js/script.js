var myString = "Lisa";
var myNumber = 7;
var myBoolean = true;

console.log("Name: " + myString);
console.log("Lucky Number: " + myNumber);
console.log("Good joke? " + myBoolean);
//var practice ----------------------------------

var strength = '50,000 pounds';
var age = 26;
var hasPet = true;

console.log(hasPet);
console.log(age);
console.log('How much stuff can a variable hold? ', strength);

// if statement practice-----------------------------
var hungerLevel = 10;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later');
}

// switch statement practice----------------
var moonPhase = 'mostly new';
switch (moonPhase) {
  case 'full':
   console.log('Howwwwlll!!');
    break;
  case 'mostly full': 
  console.log('Arms and legs are getting hairier');
  	break;
  case 'mostly new': 
  console.log('Back on two feet');
		break;
  default:
  console.log('Invalid moon phase');
    break;
}

// functions with returns------------
var orderCount=0;
function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log('Order: '+ crustType + ' pizza topped with ' + topping);
}

function getSubTotal(itemCount){
	return itemCount*7.5;  
}

function getTax(){
  return getSubTotal(orderCount)*0.06;
}

function getTotal(){
  return getSubTotal(orderCount)+getTax();
}

takeOrder('thin','mushroom');
takeOrder('bacon','cheesy');
takeOrder('peppers', 'thick');
console.log(getSubTotal(orderCount));
console.log(getTotal());