// A longer method with terrible performance.
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - (i + 1); j++) {
      if (array[j] > array[j + 1]) {
        [array[j],array[j + 1]] = swap([array[j], array[j + 1]]);
      }
    }
  }
  return array;
}

function swap(vals) {
  return ([vals[1],vals[0]]);
}

// better solution sort function receives a comparator function which then moves a or b to a lower index than the b/a respectively (swap!) based on return value is -ve, +ve or 0

// function bubbleSort(array) {

//   array.sort(function comparator(a,b){
//      //  if(a < b) return -1 //or return any -ve number
//      //  if(a > b) return 1; // or return any +ve number
//      //  return 0;//a = b
//          // return a - b; //shortest as this is same as preceeding 3 lines
//       });
//   return array
//  }
