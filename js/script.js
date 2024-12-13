function factorial(data) {
    if (typeof(data) == 'number') {
        return console.log(`${typeof(data)}`);
    } else {
        return console.log(`Type of input data is not a number, it is: ${typeof(data)}`);
    }
}

factorial(22);