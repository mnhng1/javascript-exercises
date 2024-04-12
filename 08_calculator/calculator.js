const add = function(n1,n2) {
  return n1 + n2
	
};

const subtract = function(n1,n2) {
  return n1-n2
};

const sum = function(arr) {
  let sum_int = 0;
  for (let i = 0; i < arr.length; i++){
    sum_int += arr[i];
  }
	return sum_int
};

const multiply = function(arr) {
  let product = 1
  for (let i = 0; i< arr.length; i++)
    product = product * arr[i];
  return product
};

const power = function(n1,n2) {
	return n1**n2;
};

const factorial = function(n1) {
  let fact = 1;
  for (let i = 1; i <= n1; i++ ){
    fact = fact*i;
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
