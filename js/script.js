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

// Practice with global scope & functional scope(local scope)----------------
function myApartment() {
	var myCoffeeMaker = 'Aeropress';
	
	var myCloset = 'Extra coats in the back';
	
	var myRefridgerator = 'Filled with veggies and dark chocolate.';
	var myDog = 'Nikko';
	var buildingPhone = '(481) 516-2342';
}
var buildingAddress = '150 E 14th St, New York, NY';
var buildingLaundryCode = 4927;
var buildingPhone = '(481) 516-2342';






// Do not edit the code after this line
console.log("**Apartment Building Information**");
console.log("Laundry code: " + buildingLaundryCode + "\nPhone: " + buildingPhone + "\nMailing address: " + buildingAddress);

// Practiced .push() function to add to end of array & .pop() function to remove last element from end of array-------
var bucketList= ['make an impact on the world','take care of my family', 'take care of myself'];
console.log(bucketList);
var listItem = bucketList[0];
listItem = bucketList[3];
console.log(bucketList[3]);
console.log(bucketList.length);
bucketList.push('see the world','experience life');
console.log(bucketList);
bucketList.pop();
console.log(bucketList);

// For Loop-------
var vacationSpots = ['Korea', 'Taiwan', 'Thailand'];
for(var i = 0; i<vacationSpots.length; i++){
console.log('I would love to visit ' +vacationSpots[i]);
}
//backwards for loop
var vacationSpots = ['Korea', 'Taiwan', 'Thailand'];
for(var i = vacationSpots.length; i>=0; i--){
console.log('I would love to visit ' +vacationSpots[i]);
}

// For Loop within a for loop, logging the match-----------
var myPlaces = ['Taiwan','Los Angeles', 'Thailand'];
var friendPlaces = ['Los Angeles', 'Italy', 'London'];
for(var i = 0; i<myPlaces.length; i++){
  console.log(myPlaces[i]);
  for(var j = 0; j<friendPlaces.length; j++){
    if(myPlaces[i]===friendPlaces[j]){
    console.log('Match: '+ myPlaces[i]);
    }
  }
}