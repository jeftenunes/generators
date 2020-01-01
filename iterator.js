let i = 0;

const next = () => ({
    value: i++,
    done: i > 10
});

// console.log(next());
// console.log(next());
// console.log(next());

const iterator = {
    [Symbol.iterator]() {
        return {
            next
        }
    }
}

for (const i of iterator) {
    console.log(i);
}