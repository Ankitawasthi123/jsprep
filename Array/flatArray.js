function flattenArray(arr) {
    return arr.reduce((flat, toFlat) => {
        return flat.concat(Array.isArray(toFlat) ? flattenArray(toFlat) : toFlat);
    }, []);
}

const nestedArray = [[1, 2], [3, [4, 5]], [6, [8, [9],[10, [11]]]]];

// Flatten the array using recursive function
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);