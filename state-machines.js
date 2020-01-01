function* stateMachine(state) {
    let transition
    while (true) {
        if(transition === "INCREMENT") {
            state++;
        }

        switch(transition) {
            case "INCREMENT":
                state++;
            case "DECREMENT":
                state--;
        }
        transition = yield state;
    }
}

const machine = stateMachine(0);

console.log(machine.next());
console.log(machine.next("INCREMENT"));
console.log(machine.next("INCREMENT"));
console.log(machine.next("DECREMENT"));