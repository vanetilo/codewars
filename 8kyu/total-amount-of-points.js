// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.


//My solution
function points(games) {
    let points = 0; // establish points variable
    games.forEach( matchScores => {// loop through games to split between match scores
      let teamScoresPerMatch = matchScores.split(':') // split between team scores
      let x = teamScoresPerMatch[0]
      let y = teamScoresPerMatch[1]
      //assign the teams match score variable
      if ( x > y) {
        points += 3
      } else if ( x === y) {
        points += 1
      } else {
        points += 0
      }
    })
  
   return points;
  }