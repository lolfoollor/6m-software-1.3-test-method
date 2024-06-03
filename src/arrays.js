// Declaring an empty array
let empty = [];

// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}

/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push -> .append() python [To add elements behind the array not like python] [1] -> [1,2,3,4,5]
    2. pop -> .pop() python [To remove the last element in the array] 
    3. shift -> .popleft() python [To remove the first element in the array]
    4. unshift -> enqueue()/ queue() [To add elements via the first element] -> [2,3] unshift(0,1) -> [0,1,2,3] 
    5. splice(remove from idx, number of element to remove, element to add) -> 
      [To remove from x index and add element from there] -> [2,3,4,5,6] splice(1,2,"hello") -> [2,"hello",5,6]
    6. slice -> to make a copy from idx1 to idx2 but not including idx2 -> [1,2,3,4,5] slice(1,4) -> [2,3,4]
*/

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values. 
*/
const grades = [1,2,3,4,5];
let total = 0;
let average;
for (let element of grades) {
    total += element;
}
average = total / grades.length

/*console.log(average)*/

/*
Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
*/
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
const combinedArray = arr1.concat(arr2);
for (let i = combinedArray.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        combinedArray.splice(i, 1);
    }
}

/*console.log(combinedArray)*/
