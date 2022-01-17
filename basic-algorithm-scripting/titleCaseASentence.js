function titleCase(str) {

    let newStr = "";
    for (let i=0; i<str.length; i++) {
        if (str[i-1] === " " || i === 0) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    
    console.log(newStr);
  }
  
  titleCase("I'm a little tea pot");