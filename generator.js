const reverseIterator = function*(array) {
    let i = array.length;
    while(i > 0){
        yield array[--i];
    }
} 

const arr = [1, 2, 3, 4, 5];

for (let value of reverseIterator(arr)) {
    console.log(value);
}