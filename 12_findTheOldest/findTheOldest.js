const findTheOldest = function(obj) {
    let thisYear = (new Date()).getFullYear()
    
    obj.filter(person=>{
        
        if(!("yearOfDeath" in person)){person["yearOfDeath"] = thisYear}
    })
    
  
    obj.sort((a,b)=>(a.yearOfDeath-a.yearOfBirth)<(b.yearOfDeath-b.yearOfBirth)?1:-1);
    return obj[0]
}   


// Do not edit below this line
module.exports = findTheOldest;