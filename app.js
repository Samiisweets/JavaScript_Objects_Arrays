console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
const arraySum = (numbers) => {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });
    return sum;
};
console.log(arraySum(numbers));

const numbers2 = [5, 10, 15, 20, 25, 30];

function arrayNum(numbers2) {
    let sum = 0;
    numbers2.forEach(function (value) {
        sum += value;
    });
    return sum;
}
console.log(arrayNum(numbers2));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "Twilight",
    author: "Stephanie Meyer",
    pages: 525,
    readCount: 3,
    info: function (){
        return `My favorite book is ${book.title} by ${book.author}, ${book.pages} pages, read ${book.readCount} times.`;
    },
};
console.log(book.info());

