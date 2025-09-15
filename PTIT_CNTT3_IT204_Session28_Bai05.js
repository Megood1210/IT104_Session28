function checkCondition(condition, callback) {
  setTimeout(() => {
    callback(condition);
  }, 1000);
}
checkCondition(false, function(result) {
  if (result) {
    console.log(`Điều kiện trả về: ${result}`);
  } else {
    console.log(`Điều kiện trả về: ${result}`);
  }
});

