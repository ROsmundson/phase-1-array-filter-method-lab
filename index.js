function findMatching(drivers, name){
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    }

function fuzzyMatch(drivers, name){
  return drivers.filter(person => person[0].toLowerCase() === name[0].toLowerCase())}

  function matchName(drivers, name){
    return drivers.filter(person => person.name === name)
  }