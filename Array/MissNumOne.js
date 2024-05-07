function findMissingNumber(arr) {
   const n = arr.length + 1;
   const arraySum = (n*(n-1))/2;
   const totalSum = arr.reduce((total, num) => total+num, 0);
   const missingnumber = arraySum - totalSum;
   return missingnumber;
}

// Example usage
const numbers = [0, 1, 2, 3, 5];
console.log("Missing number:", findMissingNumber(numbers));
