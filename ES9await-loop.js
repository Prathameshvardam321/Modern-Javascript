function *getValue() {
    yield 1;
    yield 2;
    yield Promise.resolve(12)
}

(async()=> {
    for await(let i of getValue()) {
        console.log(i);
    }
}
)()