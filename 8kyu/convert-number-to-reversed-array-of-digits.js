// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//solution
function digitize(n) {
    let arr = [];
    if ( n === 0 ) {
      return [0];
    }
    
    while (n > 0) {
      arr.push(n % 10); // Extract the last digit
      n = Math.floor(n / 10); // Remove the last digit
    }
    return arr;
  }