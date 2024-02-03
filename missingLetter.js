const alphabet = "abcdefghijklmnopqrstuvwxyz";

const lowerAlphabet = alphabet.split("");
const capitalAlphabet = alphabet.toUpperCase().split("");

const test1 = ["a", "b", "c", "d", "f"];
const test2 = ["O", "Q", "R", "S"];

function missingLetter(array) {
  console.log("----------------------");

  let initialIndex = array[0];
  let endIndex = array[array.length - 1];

  let whichAlphabet = [];

  if (lowerAlphabet.includes(array[0])) {
    whichAlphabet = lowerAlphabet;
  } else {
    whichAlphabet = capitalAlphabet;
  }

  //Find the the initial and final index with binary search

  let head = 0;
  let tail = whichAlphabet.length;

  while (head < tail) {
    const mid = Math.floor(head + (tail - head) / 2);

    if (whichAlphabet[mid] === initialIndex) {
      initialIndex = mid;
      break;
    } else if (whichAlphabet[mid] > initialIndex) {
      tail = mid;
    } else {
      head = mid + 1;
    }
  }

  head = 0;
  tail = whichAlphabet.length;

  while (head < tail) {
    const mid = Math.floor(head + (tail - head) / 2);

    if (whichAlphabet[mid] === endIndex) {
      endIndex = mid + 1;
      break;
    } else if (whichAlphabet[mid] > endIndex) {
      tail = mid;
    } else {
      head = mid + 1;
    }
  }
  let arrayToCompare = whichAlphabet.slice(initialIndex, endIndex);

  return arrayToCompare.filter((el) => !array.includes(el));
}

console.log(missingLetter(test1));
console.log(missingLetter(test2));
