function groupObject(arr) {
  return arr.reduce((group, person) => {
    const key = person.age;
    (group[key] = group[key] || []).push(person);
    return group;
  }, {});
}

const arr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

console.log(groupObject(arr));
