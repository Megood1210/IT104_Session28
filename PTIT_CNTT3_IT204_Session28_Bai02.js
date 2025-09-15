function delayedCallback(callbackFn, number) {
    setTimeout(() => {
        callbackFn();
    }, number);
}
function callbackFn() {
    console.log("Hi");
}
delayedCallback(callbackFn,2000)