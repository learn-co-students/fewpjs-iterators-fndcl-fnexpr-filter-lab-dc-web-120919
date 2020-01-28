// Code your solution here
  function findMatching (drivers, string){
    return drivers.filter( matches => 
        matches.toLowerCase() === string.toLowerCase()
    )
}


function fuzzyMatch (driver, string){ 
   return driver.filter( matches => 
   matches.toLowerCase().indexOf(string.toLowerCase()) === 0  )
}

function matchName(driver, string){ 
    return driver.filter(record => record.name === string.name)
}

