function removeFromArray(array, ...itemsToRemoveArguments) {
    const itemsToRemoveArray = [...itemsToRemoveArguments];
    const newArray = array.filter((item) => !itemsToRemoveArray.includes(item));

    return newArray;

}
console.log(removeFromArray(['hey', 1, 2, 3, 4], 'hey', 3, 4, 1));
// Do not edit below this line
module.exports = removeFromArray;
