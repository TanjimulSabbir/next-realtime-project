let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b)
        }
        else {
            return a;
        }
    }
}

console.log(sum(1)(1)(4)());
