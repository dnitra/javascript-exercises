const fibonacci = function(num) {
    parseInt(num)
    if (num<1)return "OOPS"
    let n1 = 0
    let n2 = 1
    let n3 = n1+n2

    while(num>0){
        n1=n2
        n2=n3
        n3 = n1+n2
        num--
        
        
    }
    return n1

};

// Do not edit below this line
module.exports = fibonacci;
