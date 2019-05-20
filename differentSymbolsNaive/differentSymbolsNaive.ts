// function differentSymbolsNaive(s: string): number {
//   const uniqueChars: string[] = [];
//   const inputChars: string[] = s.split("");

//   inputChars.forEach(char => {
//     if (!uniqueChars.includes(char)) {
//       uniqueChars.push(char);
//     }
//   });

//   return uniqueChars.length;
// }

// console.log(differentSymbolsNaive("cabca"));

// ==============================================================
// SECOND SOLUTION

// function differentSymbolsNaive(s: string): number {
//   const uniqueChars = {};
//   const inputChars = s.split("");

//   inputChars.forEach(char => {
//     uniqueChars[char] = 1;
//   });

//   return Object.keys(uniqueChars).length;
// }

// console.log(differentSymbolsNaive("cabca"));

// =============================================================
// THIRD SOLUTION

function differentSymbolsNaive(s: string): number {
  const uniqueChars = new Set();
  const inputChars = s.split("");

  inputChars.forEach(char => {
    uniqueChars.add(char);
  });

  return uniqueChars.size;
}

console.log(differentSymbolsNaive("cabca"));
