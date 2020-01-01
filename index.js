const abc = ['A', 'B', 'C'];

const iterator = abc[Symbol.iterator]();

for(let item of iterator) {
    console.log(item);
}