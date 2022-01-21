function translatePigLatin(str) {

    let strCp = str;
    let vowels = /[aeiou]/;
    let constCol = '';
    let result = '';

    for (let i=0; i<str.length; i++) {
        if (str[0].search(vowels) === 0) {
            strCp += 'way';
            result = strCp;
            break;
        } else if (str[i].search(vowels) === -1) {
            constCol += str[i];
            result = constCol + 'ay';
        } else {
            let newCp = strCp.replace(constCol,'');
            result = newCp + constCol + 'ay';
            break;            
        }
    }
    console.log(result);
  }
  
  translatePigLatin("consonant");
  translatePigLatin("paragraphs");
  translatePigLatin("glove");
  translatePigLatin("eight");
  translatePigLatin("schwartz");
  translatePigLatin("rhythm");