const palindromes = function (str) {
    
    const newStr =str
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"")
        .toLowerCase()
        .split("")
        .filter(letter=>letter !==" ")
        .join("");

    const reversedStr = newStr
        .split("").reverse().join("");

    return reversedStr == newStr
};  
    
console.log(palindromes("racecar!"))

// Do not edit below this line
module.exports = palindromes;
