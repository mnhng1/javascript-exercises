const reverseString = function(string) {
    let reversed = '';
    for (let letter of string) {
        reversed = letter + reversed;
    }
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
