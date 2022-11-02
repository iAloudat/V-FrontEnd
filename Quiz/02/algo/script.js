//QUESTION 1
console.log("\n⭕ ~ Question 01 \n =====================");
let array = [1, 2, 4, 6];

function squareValue(arr) {
  return arr.map(function (x) {
    return Math.pow(x, 2);
  });
}

console.log(squareValue(array));

//QUESTION 2
console.log("\n⭕ ~ Question 02 \n =====================");
// Use The filter() method to create a array copy filtered by 10 characters
function tenChar(inputArray) {
  return inputArray.filter(function (tenChar) {
    return tenChar.length <= 10;
  });
}
console.log(
  tenChar(["iamausername", "iamshort", "iamwaaaaaytoolong", "whatisgoingon"])
);

//QUESTION 3
console.log("\n⭕ ~ Question 03 \n =====================");
// Use the join function to merge list then make comparative
const checkIfEqual = function (word1, word2) {
  if (word1.join("") == word2.join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIfEqual(["quiz", "2"], ["qu", "iz2"]));
console.log(checkIfEqual(["thisis", "easy"], ["thisis", "hard"]));

//QUESTION 4
console.log("\n⭕ ~ Question 04 \n =====================");
/* 
A function that takes an array of strings and iterates through it. If the string includes a + sign
it increments the value of x by 1. If the string includes a - sign it decrements the value of x by 1. 
*/
var multiOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("+")) {
      x++;
    } else {
      x--;
    }
  }
  return x;
};

console.log(multiOperations(["X++", "X++", "X--"]));
