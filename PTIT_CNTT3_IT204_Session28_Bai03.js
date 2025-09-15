function processArray(arr, callback) {
  arr.forEach((value, index) => {
    setTimeout(() => {
      callback(value);
    }, (index + 1) * 1000); 
  });
}
processArray([1,2,3,4,5], function(num) {
  console.log("Phần tử thứ:", num);
});
