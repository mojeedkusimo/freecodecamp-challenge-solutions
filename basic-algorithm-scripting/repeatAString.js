function repeatStringNumTimes(str, num) {

    let repeatStr='';

    if (num >= 0) {
        for (let i=0; i<num; i++) {
            repeatStr += str;
        }
    }
    console.log(repeatStr);
  }
  
  repeatStringNumTimes("abc", -3);