const getTheTitles = function (inputBooks) {
    let result = [];
    for (let book of inputBooks) {
        result.push(book.title);
    }

    return result
};

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
