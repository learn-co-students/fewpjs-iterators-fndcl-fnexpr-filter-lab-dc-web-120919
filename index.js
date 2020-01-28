// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(array, string) {
    return array.filter(driver => driver.toLowerCase() == string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(name => name.toLowerCase().indexOf(string.toLowerCase()) === 0 )
}

function matchName(array, string) {
    return array.filter(name => string == name.name)
}
