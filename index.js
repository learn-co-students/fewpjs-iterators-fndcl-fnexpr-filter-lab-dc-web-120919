// Code your solution here
function findMatching(drivers, driver) {
    return drivers.filter(n => 
        n.toLowerCase() === driver.toLowerCase())
}

function fuzzyMatch(drivers, driver) {
    return drivers.filter(n =>
        n.toLowerCase().indexOf(driver.toLowerCase()) === 0)
}

function matchName(drivers, driver) {
    return drivers.filter(n => 
        n.name === driver
      )
}
