function displayNumbers(callback, delay) {
  let count = 1;

  function next() {
    callback(count);
    count++;
    setTimeout(next, delay); // tự gọi lại chính nó
  }
  setTimeout(next, delay);  // bắt đầu sau delay đầu tiên
}

displayNumbers(function(num) {
  console.log("Số thứ tự:", num);
}, 1000);
