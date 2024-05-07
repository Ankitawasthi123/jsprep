function reversArray(arr) {
    
  // reverse array with reduce right
  //   return arr.reduceRight((acc, currVal) => {
  // acc.push(currVal);
  // return acc;
  //   }, []);


  // using for loop
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(i);
  }
  return reverseArray;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(reversArray(arr));
