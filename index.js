// /*
// Parameter/Input: array of dwarf names [Grump, Doc, Dopey]
// Return/Output: string of numbered dwarves, "1. Doc 2. Dopey..."
// */
function dwarfRollCall(dwarves) {

	var numberedArray = []
	var dwarfString = ""

	for (var i = 0; i < dwarves.length; i++) {

		var inLine = i + 1

		numberedArray += `${inLine}. ${dwarves[i].toString()}`
    numberedArray += " "
	}
	return numberedArray.toString()
}


// /*
// Parameter/Input: array of planeteerCalls = [earth, wind, fire, water]
// Return/Output: converts each index into uppercase with a !
// 			   [EARTH!, WIND!, FIRE!, WATER!]
// */
function summonCaptainPlanet(planeteerCalls){

  var string = ""
  var newArray = []

  for (var i = 0; i < planeteerCalls.length; i++) {
    string = planeteerCalls[i].toString() + "!"
    string = string.toUpperCase()
    newArray.push(string)
	}
	return newArray
}
/*
Parameter/Input: array of calls
Return/Output: returns true if words longer than 4 letters
*/
function longPlaneteerCalls(words) {
  var string = ""
	var i = 0

	while (i < words.length) {
		string = words[i].toString()

		if (string.length > 4) {
      return true
		} else {
      i++
			return false
		}
	}
}


/*
Parameter/Input: Array of strings
Return/Output: returns the first string that is a type of cheese
			   cheese types: cheddar, gouda, camembert
			   if no cheese >>> "no cheese!"
*/
function findTheCheese (foods) {

  var cheeses = ["cheddar", "gouda", "camembert"]

	for (var i = 0; i < foods.length; i++) { // From foods.index[0] -> food.length
    for (var n = 0; n < cheeses.length; n++) { // From cheddar -> camembert
      if (foods[i] === cheeses[n]) { //If food.currentIndex=cheese.currentIndex
        return foods[i] // Return that food since it is a cheese.
      }
    }
  }
  return "no cheese!" // If we reached the end with no cheese, theres no cheese.
}
