function groupObject(arr) {
  return arr.reduce((groups, person) => {
    console.log(person);
  }, {});
}

const arr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

console.log(groupObject(arr));
