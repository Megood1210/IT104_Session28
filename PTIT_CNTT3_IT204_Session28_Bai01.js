function calculate(a,b,callbackFn) {
    let result = a+b;
    callbackFn(result);
}
function callbackFn(print) {
    console.log(`kết quả: ${print}`);
}
calculate(1,2,callbackFn);