
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Solution
function boolToWord( bool ){
    return bool ? "Yes" : "No";
  }

  function boolToWord( bool ){
    if (bool) {
      return "Yes"
    } else {
      return "No"
    }
  }