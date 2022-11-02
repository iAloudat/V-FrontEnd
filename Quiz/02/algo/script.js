//QUESTION 1
let array = [1, 2, 4, 6];

function squareValue(arr) {
  return arr.map(function (x) {
    return Math.pow(x, 2);
  });
}

console.log(squareValue(array));

//QUESTION 2
function tenChar(inputArray) {
  return inputArray.filter(function (tenChar) {
    return tenChar.length < 10;
  });
}
console.log(
  tenChar(["iamausername", "iamshort", "iamwaaaaaytoolong", "whatisgoingon"])
);

//QUESTION 3

//QUESTION 4
