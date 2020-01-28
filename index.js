const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(driverArray, driverName){

    return driverArray.filter( name => {
        if (driverName.toLowerCase() ===name.toLowerCase()){return name};
    });
}

function fuzzyMatch(driverArray, driverName){

    return driverArray.filter( name => {
        let startsWithDriver = driverName.toLowerCase();
        if(name.toLowerCase().startsWith(startsWithDriver)){return name};
    });
}

function matchName(driverArray, driverName){

    return driverArray.filter( record => {
        if(record.name===driverName){return record};
    });
}