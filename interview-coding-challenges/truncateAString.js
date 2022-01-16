function truncateString(str, num) {

    let newStr = '';

    if (num < str.length) {
        for (let i=0; i<num; i++) {
            newStr += str[i];
        }
        newStr += '...';
    } else {
        for (let i=0; i<str.length; i++) {
            newStr += str[i];
        }
    }

    console.log(newStr);
    console.log(num);
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)