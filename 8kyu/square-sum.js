// Complete the square sum function so that it squares each number passed into it and then sums the results together.




//Solution
function squareSum(numbers){
    sum = 0;
    for ( i = 0; i < numbers.length; i ++) {
     sum += numbers[i]**2
   }
   return sum;
  }


  function squareSum(numbers){
    sum = 0;
    for (i = 0; i < numbers.length; i++) {
      numbers[i] = numbers[i] ** 2;
      sum += numbers[i];
    }
     return sum;
   }