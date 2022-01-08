module.exports = function toReadable (number) {
  const STRING = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '15': 'fifteen',
    '18': 'eighteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
  }

  const toReadableLessHundred = (num) => {
    if (num in STRING) {
        return STRING[num];
      } else if (num < 20) {
        return STRING[num.toString()[1]] + 'teen';
      } else if (num < 100) {
        return STRING[num - num.toString()[1]] + ' ' + STRING[num.toString()[1]];
      }
  };

  if (number < 100) {
    return toReadableLessHundred(number);
  }

  const str = number % 100 === 0 ? '' : ' ' + toReadableLessHundred(number % 100);
  return STRING[number.toString()[0]] + ' hundred' + str;
}
