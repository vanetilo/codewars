// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My solution
function getCount(str) {
    let sum = 0
    let arr = str.slice('')
    for (let i = 0; i < arr.length; i ++) {
      if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
        sum += 1;
      }
    }
    return sum;
  }