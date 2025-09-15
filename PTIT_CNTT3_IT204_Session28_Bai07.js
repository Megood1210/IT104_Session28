function myForEach(arr, callbackFn) {
    for (let i = 0; i < arr.length; i++) {
        callbackFn(arr[i], i, arr);
    }
}

function printArr(element, index, arr) {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: `, arr);
}

const arr = [1, 2, 3, 4, 5, 6];

myForEach(arr, printArr);
