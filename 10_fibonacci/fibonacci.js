const fibonacci = function(n) {
    first = 0
    second = 1
    next = 0 
    if (n ==0){
        return 1
    }
    for (let i = 1; i<n ; i++){
        next = first + second
        first = second 
        second = next
    }
    return next 
};

// Do not edit below this line
module.exports = fibonacci;
