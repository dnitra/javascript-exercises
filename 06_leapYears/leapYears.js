const leapYears = function(year) {
    let condtion1 = year % 2 === 0
    let condtion2 = year%100===0
    let condtion3 =year%400===0
    
    if(!condtion1 || condtion2 && !condtion3) return false

    else return true
};


// Do not edit below this line
module.exports = leapYears;
