// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]




//My solution

function removeEveryOther(arr){
    return arr.filter((word, index) => index % 2 === 0)
  }