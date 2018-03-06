function split(wholeArray) {
  const mid = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, mid);
  const secondHalf =  wholeArray.slice(mid)
  return [firstHalf, secondHalf];
}

function mergeSort(array) {
  let arr1, arr2 = [];
  if (array.length === 1) { return array;}
  [arr1, arr2] = split(array);
  return merge(mergeSort(arr1), mergeSort(arr2))
}

function merge(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]){
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return [...merged, ...arr1.slice(i), ...arr2.slice(j)]
}

