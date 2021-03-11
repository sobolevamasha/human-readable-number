module.exports = function toReadable(number) {
    const units = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const dozens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
  
    const numberToString = (number) => {
      if (number < 20) return units[number];
      let digit = number % 10;
      if (number < 100)
        return dozens[Math.floor(number / 10)] + (digit ? " " + units[digit] : "");
      if (number < 1000)
        return (
          units[Math.floor(number / 100)] +
          " hundred" +
          (number % 100 == 0 ? "" : " " + numberToString(number % 100))
        );
      return (
        numberToString(Math.floor(number / 1000)) +
        " thousand" +
        (number % 1000 != 0 ? "" + numberToString(number % 1000) : " ")
      );
    };
  
    return numberToString(number);
  };