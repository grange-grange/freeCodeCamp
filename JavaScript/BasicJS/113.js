//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};