const reverseString = function(string) {
    
    if (string==="") return string
    
    return reverseString(string.slice(1)) + string.slice(0,1)
};


// Do not edit below this line
module.exports = reverseString;
