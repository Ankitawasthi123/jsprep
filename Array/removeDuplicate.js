function removeDuplicate() {
  return arr.reduce((acc, currVal) => {
    if (!acc.includes(currVal)) {
      acc.push(currVal);
    }
    return acc;
  }, []);
}

const arr = [1, 2, 2, 3, 4, 4, 5, 5];
console.log(removeDuplicate(arr));
