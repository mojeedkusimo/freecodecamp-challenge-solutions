function reverseString(str) {

    let newStr='';
  
    for (let i=str.length - 1; i>-1; i--) {
      newStr += str[i]
    }
    console.log(newStr);
  }
  
  reverseString("hello");