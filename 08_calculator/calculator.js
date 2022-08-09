const add = function(a,b) {
	return parseInt(a)+parseInt(b)
};

const subtract = function(a,b) {
	return parseInt(a)-parseInt(b)
};

const sum = function(arr) {
	if(arr=="") return 0
  
  return arr.reduce((a,b)=>a+b)
};

const multiply = function(arr) {
  
  return arr.reduce((a,b)=>a*b)
};


const power = function(a,b) {
	let result = a
  for(i=0;i<b-1;i++){
    result *=a
  }
  return result
};
console.log(power(2,5))
const factorial = function(num) {
  if (num < 0) 
    return -1;
  else if (num == 0) 
    return 1;
  else {
    return (num * factorial(num - 1));
}
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
