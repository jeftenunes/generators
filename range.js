function* range(start, end) {
    while (start < end) {
        yield start++;
    }
}

for (const item of range(0, 10)) {
    console.log(item);
}