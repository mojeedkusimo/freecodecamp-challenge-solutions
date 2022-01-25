function fearNotLetter(str) {

    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let missingLetter = '';
    let strInd = 0;
    for (let charInd = alphabets.indexOf(str[0]); charInd < alphabets.length; charInd++) {
      // console.log(str[charInd], charInd);
      if (str[strInd] !== alphabets[charInd]) {
        missingLetter += alphabets[charInd];
        break;
      }
      strInd++;
    }
    if (missingLetter === '') {
      missingLetter = undefined;
    }
    console.log(missingLetter);
    return str;
  }
  
  fearNotLetter("abce");
  fearNotLetter("abcdefghjklmno");
  fearNotLetter("stvwx");
  fearNotLetter("abcdefghijklmnopqrstuvwxyz");
  fearNotLetter("bcdf");