const string = "Revert this string";

const revertString = (string) => {
  let phrase = "";
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      phrase = word + " " + phrase;
      word = "";
      continue;
    }
    word += string[i];
  }
  phrase = word + " " + phrase;

  return phrase.trim();
};

const result = revertString(string);

console.log(result);
