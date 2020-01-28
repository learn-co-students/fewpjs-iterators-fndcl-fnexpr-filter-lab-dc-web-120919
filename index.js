


function findMatching(drivers, str) {
  return drivers.filter( driver => driver.toLowerCase() === str.toLowerCase()
  )
}


function fuzzyMatch(drivers, str) {
  return drivers.filter( driver => driver.toLowerCase().indexOf(str.toLowerCase()) === 0
  )
}

function matchName(drivers, str){
  return drivers.filter( driver => driver.name === str)
}
