function maxNumber(numbers) {
  // ------------ reduce

  //   return numbers.reduce((max, current) => {
  //     return current > max ? current : max;
  //   }, 0);

  // ------------ loop

  let max = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(maxNumber([0, 23, 345, 565, 45, 9098, 654, 345, 5443]));
