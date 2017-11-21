// Create one function that takes theArray as an argument then completes steps
// 1 - 2 - 3 and returns the result/processed array

var theArray = [false, 'adam', 'sam', 15, 'b.o.b', 'john', 9000, 'tupac', 'biggie', 'george', 'tony', 22];



// 1. Clean array so only string values remain
// 2. Add one item 'billy' to the end of the array
// 3. Sort alphabetically in descending order

// *** Extra for the courageous:
// Have the same function Punctuate the first letter of each name. 
var stringArrayA = clearArray(theArray);
function clearArray(array){
	var stringArrayB =[];

	for(i = 0; i < array.length; i++){
		if(typeof array[i] === 'string'){
			stringArrayB.push(array[i]);
		}
	}
	stringArrayB.push('billy');
	stringArrayB.sort();

	for(i = 0; i < stringArrayB.length; i++){
		stringArrayB[i] = stringArrayB[i].charAt(0).
		toUpperCase() + stringArrayB[i].slice(1);
	}


	return stringArrayB
}

console.log(stringArrayA);