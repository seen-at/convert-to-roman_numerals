function convertToRoman(num) {
  let romanNumeral = "";

  while(num > 0) {
    if(num < 4) {
      decrementAndAddAmount("I", 1);
    }
    else if (num == 4) {
      decrementAndAddAmount("IV", 4);
    }
    else if (num >= 5 && num < 9) {
      decrementAndAddAmount("V", 5);
    }
    else if (num == 9) {
      decrementAndAddAmount("IX", 9);
    }
    else if (num >= 10 && num < 40) {
      decrementAndAddAmount("X", 10);
    }
    else if (num >= 40 && num < 50) {
      decrementAndAddAmount("XL", 40);
    }
    else if (num >= 50 && num < 90) {
      decrementAndAddAmount("L", 50);
    }
    else if (num >= 90 && num < 100) {
      decrementAndAddAmount("XC", 90);
    }
    else if (num >= 100 && num < 400) {
      decrementAndAddAmount("C", 100);
    }
    else if (num >= 400 && num < 500) {
      decrementAndAddAmount("CD", 400);
    }
    else if (num >= 500 && num < 900) {
      decrementAndAddAmount("D", 500);
    }
    else if (num >= 900 && num < 1000) {
      decrementAndAddAmount("CM", 900);
    }
    else if (num >= 1000) {
      decrementAndAddAmount("M", 1000); 
    }

    function decrementAndAddAmount(letter, decrementAmount) {
      romanNumeral += letter;
      num -= decrementAmount;
    }
  }

  return romanNumeral;
}

console.log(convertToRoman(3999));
