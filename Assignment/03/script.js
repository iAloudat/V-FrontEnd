//! ########### Question 01 #########
console.log("🚨 ~ Question 01 \n =====================");
// Method 1
additionV1 = (num1A, num1B) => num1A + num1B;
console.log("🚀 ~ Result Method 1: 1+1 =", additionV1(1, 1));

// Method 2
function additionV2(num1A, num1B) {
  return num1A + num1B;
}
console.log("🚀 ~ Result Method 2: 1+1 =", additionV2(1, 1));

//! ########### Question 02 #########
console.log("\n🚨 ~ Question 02 \n =====================");

const array2A = [1, 2, 4];
const array2B = [3, 5];

const mergeList = array2A.concat(array2B);
function compareNumbers(a, z) {
  return a - z;
}
const sortMergeList2 = mergeList.sort(compareNumbers);
console.log("🚀 ~ Result Question 02", sortMergeList2);

//! ########### Question 03 #########
console.log("\n🚨 ~ Question 03 \n =====================");

const array3 = [2, 4, 6, 1, 5];
console.log("     Array3", array3);

const sortArray3 = array3.sort(compareNumbers);
const Array3Min = sortArray3.splice(1, [sortArray3.length - 3]);
const Array3MinMax = sortArray3.splice(-1, 1);

console.log("🚀 ~ Result Question 03", sortArray3);

//! ########### Question 04 #########
console.log("\n🚨 ~ Question 04 \n =====================");

const word = "ApPle";
lowercaseFunction = (word) => word.toLowerCase();

console.log("🚀 ~ Result Question 04 >>", lowercaseFunction(word));

//! ########### Question 05 #########
console.log("\n🚨 ~ Question 05 \n =====================");

const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 5, 5]));
