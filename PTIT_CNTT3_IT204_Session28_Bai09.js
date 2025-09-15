function myMap(arr, callbackFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callbackFn(arr[i], i, arr));
  }
  return result;
}
const numbers = [1,2,3,4,5,6];

// Nhân đôi từng phần tử
const doubled = myMap(numbers, function(element) {
  return element * 2;
});
console.log(doubled); 
