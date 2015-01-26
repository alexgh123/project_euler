// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

// to find the largest prime factor, i think the base case is div 2?


//---------------------------------

// function isPrime(num) {
//   for (var i = 2; i < num; i++) {
//     if(num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// isPrime(8);


//-----

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
};

function largestPrimeFactor(num){

      function isPrime(num) {
      for (var i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }
      return true;
    };

  for (var j=2; j < num; j++){
    if (num % j === 0 && isPrime(j)){
      x = j;
    }
  }
  console.log(x);
}

largestPrimeFactor(600851475143);
