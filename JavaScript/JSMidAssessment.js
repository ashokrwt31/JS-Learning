
/*
  Create a function that takes two arguments (num, length) and returns an array of multiples of num up to length.
*/

function arrayOfMultiples(number, length) {
	let result = [];
	for (let num = 1; num <= length; num ++) {
		result.push(number * num);
	}
	return result;
}

console.log("Inputs for function (7, 5): ", arrayOfMultiples(7, 5)); 



/*
 Create a function that takes an array of numbers as an argument and return ​"I got 3!"​ if the number 3 appears in the array.
 Otherwise, return ​"there is no 3 in the array".
*/

function findThree(numberArray, number) {
 let result = -1;
	if (Array.isArray(numberArray) && numberArray.length > 0 ) {
		result = numberArray.indexOf(number)
	}
	return result > -1 ? "I got 3!" : "there is no 3 in the array"
}

console.log("Inputs for function ([1,2,3,4], 3): ", findThree([1,2,3,4], 3)); 
console.log("Inputs for function ([1,2,4], 3): ", findThree([1,2,4], 3)); 



/* 
  Create a function that returns true if two arrays contain identical values, and false otherwise.
*/

function isEquals(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
		return false
	}

	for (let i = 0; i< arr1.length; i++) {
		if(arr1[i] !== arr2[i]){
			return false
		}
	}
	return true
}


console.log("Inputs for function ([1,2,3,4], [1,2,3,4]): ", isEquals([1,2,3,4], [1,2,3,4])); 
console.log("Inputs for function ([1,2,3,4], (1,2,3,4): ", isEquals([1,2,3,4], (1,2,3,4))); 




/*
 Create a function that takes a variable number of arguments as groups of items, 
 and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.
*/

function waysToArrange(...args) {
	let noOfWay = 1;
	for(let i = 0; i< args.length; i++) {
		noOfWay *= args[i];
	}
	return noOfWay;
}

console.log("Inputs for function (2,3): ", waysToArrange(2,3)); 
console.log("Inputs for function (3, 7, 4): ", waysToArrange(3, 7, 4)); 



/*
  Create a function that takes an integer n, reverses the binary representation of that integer, 
  and returns the new integer from the reversed binary.
*/

function reversedBinary(number) {
    return parseInt(number.toString(2).split('').reverse().join(''), 2);
}

console.log("Input for function (19): ", reversedBinary(19)); 
console.log("Input for function (25): ", reversedBinary(25)); 
console.log("Input for function (45): ", reversedBinary(45)); 


