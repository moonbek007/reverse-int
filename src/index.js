module.exports = function reverse(n) {
    if (n === undefined) {
        return "undefined";
    } else if (n < 10 && n >= 0) {
        return n;
    }
    let stringNumber = n.toString();
    let answer = "";
    for (let i = stringNumber.length - 1; i >= 0; i--) {
        if (
            (stringNumber[i] === 0 || stringNumber[i] === "-") &&
            i === stringNumber.length - 1
        ) {
            continue;
        }
        answer += stringNumber[i];
    }
    return parseInt(answer);
};
