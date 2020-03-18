const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let splittedWords = expr.split("**********");
  let eachLetter = [];
  let morseDotLetter = /10/g;
  let morseDashLetter = /11/g;
  let morseDuableZero = /00/g;
  let messageDecoded = [];
  for (let i = 0; i < splittedWords.length; i++) {
    eachLetter.push(splittedWords[i].match(/.{1,10}/g));
    for (let e = 0; e < eachLetter.length; e++) {
      eachLetter[e] = eachLetter[e].toString().replace(morseDotLetter, ".");
      eachLetter[e] = eachLetter[e].toString().replace(morseDashLetter, "-");
      eachLetter[e] = eachLetter[e].toString().replace(morseDuableZero, "");
      messageDecoded.push(
        (eachLetter[e] = eachLetter[e]
          .split(",")
          .map(
            element =>
              (element = element.replace(element, MORSE_TABLE[element]))
          )
          .join(""))
      );
    }
    eachLetter = [];
  }
  return messageDecoded.join(" ");
}

module.exports = {
  decode
};
