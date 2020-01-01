const reverseIterator = array => ({
    [Symbol.iterator]() {
        let i = array.length;
        return {
            next: () => ({
                value: array[--i],
                done: i < 0
            })
        };
    }
});

const arr = [1, 2, 3, 4, 5];

for (let value of reverseIterator(arr)) {
    console.log(value);
}