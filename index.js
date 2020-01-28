// Code your solution here
 function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
 }

 function fuzzyMatch(drivers, nameString){
     return drivers.filter(drivers => drivers.toLowerCase().indexOf(nameString.toLowerCase()) === 0)
 }
 function matchName(drivers, name) {
    return drivers.filter( driver => driver.name === name)
  }
  