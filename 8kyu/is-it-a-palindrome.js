//Write a function that checks if a given string (case insensitive) is a palindrome.



//My solution
function isPalindrome(x) {
    let str = x.toLowerCase()
    let reverse = str.split("").reverse().join("")
    return reverse === str
}