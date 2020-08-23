
let convertToRoman = (num) => {

    let stringNum = num.toString();
    const units = { 0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', undefined: '', };
    const tens = { 0: '', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC', undefined: '' };
    const hundreds = { 0: '', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM', undefined: '' };
    const thousands = { 0: '', 1: 'M', 2: 'MM', 3: 'MMM', undefined: ''};

    if ( num > 3999 ) {
        return 'Please enter a number less than 4000 to get standard equivalent roman numerals of number provided';
    }
    else {
        let romanUnits = units[stringNum[stringNum.length-1]];
        let romanTens = tens[stringNum[stringNum.length-2]];
        let romanHundreds = hundreds[stringNum[stringNum.length-3]];
        let romanThousands = thousands[stringNum[stringNum.length-4]];

        let romanValue = romanThousands + romanHundreds + romanTens + romanUnits
    
        return romanValue;    
    }
}

