
function bubbleSort(arr) {
let ifswap = false;

    for (let i = 0; i < arr.length; i++) { // Iterate through the array
      if (arr[i] > arr[i + 1]) {// If the current value is greater than its neighbor to the right
        let temp = arr[i]; 
        arr[i] = arr[i + 1]; // Swap those values
        arr[i + 1] = temp;
        ifswap = true;
         // Do not move this console.log
         console.log(arr.join(","));
      }
    } 

    if (ifswap) {
      return bubbleSort(arr);
    } else {
      return arr;
    }      
     

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;