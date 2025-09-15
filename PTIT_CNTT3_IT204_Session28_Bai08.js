function myFilter(arr, searchValue, callbackFn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], searchValue, i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbers = [1, 2, 2, 3, 4, 5, 6];

// Callback kiểm tra phần tử có bằng searchValue không
function callback(element, searchValue) {
  return element === searchValue;
}

console.log(myFilter(numbers, 2, callback)); 


console.log(myFilter(numbers, 10, callback)); 

