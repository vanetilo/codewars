// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My solution

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((s, c) => s + c,0) + arr2.reduce((s, c) => s + c,0)
  }