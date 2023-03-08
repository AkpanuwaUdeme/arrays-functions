 /*Question 1 : What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
Answers:
 an array is a data structure that stores a collection of elements, and it provides several methods to manipulate and operate on those elements. These methods can be broadly categorized into two types: mutating array methods and non-mutating array methods.
Mutating array methods are methods that modify the original array and change its contents. When you call a mutating method on an array, the array itself is changed, and the method returns a reference to the same array.
Examples:
push(): adds one or more elements to the end of an array and returns the new length of the array.
1. pop(): removes the last element from an array and returns that element.
2. splice(): removes or replaces elements from an array and/or inserts new elements in their place.
3. shift(): removes the first element from an array and returns that element.
4. unshift(): adds one or more elements to the beginning of an array and returns the new length of the array.
Non-mutating array methods, on the other hand, do not modify the original array. Instead, they create a new array with the results of the operation and return that new array.
Examples:
1. slice(): returns a shallow copy of a portion of an array into a new array object.
2. concat(): returns a new array that combines two or more arrays.
3. filter(): creates a new array with all elements that pass the test implemented by the provided function.
4. map(): creates a new array with the results of calling a provided function on every element in the calling array.
5. reduce(): applies a function against an accumulator and each element in the array to reduce it to a single value. 
*/

//Question 2
// Define the initial array
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
let index_of_php = languages.indexOf('PHP');
languages.splice(index_of_php, 1, 'Go', 'Rust');

console.log(languages);
//output ['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

// Question 3: What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
        let modifiedFruit = changeFruit(fruit);

        console.log(modifiedFruit);  //['apple', 'mango', 'orange']
        console.log(fruit);  //['apple', 'mango', 'orange']

 /* Question 4: Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10
*/
function max(numbers) {
    let max = numbers[0]; // set the initial maximum value to the first element of the array
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  let numbers = [4, 5, 10, -2];
  let maxNumber = max(numbers);
  console.log(maxNumber);  //10

  /* Question 5 : Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([5,10,15]) // [0,10,30]
*/
function valTimesIndex(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      result.push(numbers[i] * i);
    }
    return result;
  }
  
  let numbers1 = [1, 2, 3];
  let result1 = valTimesIndex(numbers1);
  console.log(result1); //[0, 2, 6]
  
  let numbers2 = [5, 10, 15];
  let result2 = valTimesIndex(numbers2);
  console.log(result2); //[0, 10, 30]
  

  