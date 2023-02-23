//! Creating the Fibonacci Sequence using iterative and recursive methods.

//! Using iteration
const fibs = (number: number): number[] => {
  const fibsArray: number[] = [];

  let initial = 0;
  let current = 1;

  for (let i = 0; i < number; i++) {
    fibsArray.push(initial);
    let temp = current;
    current = initial + current;
    initial = temp;
  }
  
  return fibsArray;
};

console.log(fibs(7)); // [0, 1, 1, 2, 3, 5, 8]

//! Using recursion
const fibsRec = (n: number): number[] => {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1]
  } else {
    const fibsArray = fibsRec(n - 1);
    fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]);
    return fibsArray;
  }
};

console.log(fibsRec(9)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]