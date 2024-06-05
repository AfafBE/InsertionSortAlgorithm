function insertionSort(arr) {
    let outerCounter = 0;
    let innerCounter = 0;

 
    for (let i = 1; i < arr.length; i++) {
        outerCounter++;  
        let key = arr[i];
        
        let j = i - 1;

        
        while (j >= 0 && arr[j] > key) {
            innerCounter++;  
            arr[j + 1] = arr[j];
            j = j - 1;
        }
       
        arr[j + 1] = key;
    }
    console.log("Outer loop iterations:", outerCounter);
    console.log("Inner loop iterations:", innerCounter);
    return arr;
}
