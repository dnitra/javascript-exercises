const sumAll = function(num1, num2) {
    if(num1>num2){
        let numTemp = num1
        num1 = num2
        num2 = numTemp
    }

    if(num1 <0 || num2 <0|| typeof(num1)!=="number" || typeof(num2)!=="number")return "ERROR"
    if(num1 === num2) return num1


    return sumAll(num1,num2-1)+num2

};


// Do not edit below this line
module.exports = sumAll;
