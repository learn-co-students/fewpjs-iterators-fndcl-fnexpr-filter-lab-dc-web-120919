// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter(match => 
        match.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(names =>
        // names.substring(0, 3) === string 
        names.toLowerCase().indexOf(string.toLowerCase())=== 0
        
    )
}

function matchName(drivers, string) {
    return drivers.filter(x => x.name === string)
}