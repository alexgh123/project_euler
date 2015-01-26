// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// input- uper limit number

// output- sum of all numbers

// im thinking i put those numbers into an array and then add them. - nope that is ruby approach




 var sortAndAdd = function(number){
    var sum = 0
    for (var i = 1; i < number; i++ ){ // in ruby land this would be an iterator, kinda
      if (i % 5 === 0 || i % 3 === 0){
        sum += i;

      }
    }
    console.log(sum + ": yea!")
 };

sortAndAdd(1000)
