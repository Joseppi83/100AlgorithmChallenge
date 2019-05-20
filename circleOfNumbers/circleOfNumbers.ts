function circleOfNumbers(n: number, firstNumber: number): number {
  const numArray = [];
  const halfway = n / 2;

  for (let i = 0; i < n; i++) {
    numArray.push(i);
  }

  if (firstNumber < halfway) {
    return numArray[firstNumber + halfway];
  }

  return numArray[firstNumber - halfway];
}

console.log(circleOfNumbers(10, 2));
