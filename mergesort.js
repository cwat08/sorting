function split(wholeArray) {

  let midIndex = Math.floor(wholeArray.length/2)
  let firstHalf = wholeArray.slice(0, midIndex)
  let secondHalf = wholeArray.slice(midIndex)

  return [firstHalf, secondHalf];
}
//we will split until each arr length is 1

function merge(left, right){
  let sortedArr = [];
   while (left.length && right.length){
    if (left[0]<right[0]){
      sortedArr.push(left[0])
      left.shift();
    }
    else {
      sortedArr.push(right[0]);
      right.shift();
    }
  }
  return sortedArr.concat(left).concat(right)
}

function mergeSort(array){

  //use split to recurse until arr.length<2;

  //merge until you have one array;
}

