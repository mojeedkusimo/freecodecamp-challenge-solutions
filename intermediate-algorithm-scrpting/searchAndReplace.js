function myReplace(str, before, after) {

    let newAfter;
    if (before[0] === before[0].toUpperCase()) {
        newAfter = after.replace(after[0], after[0].toUpperCase());
    } else {
        newAfter = after.replace(after[0], after[0].toLowerCase());
    }
    let newStr = str.replace(before, newAfter);

    console.log(newStr);
    return newStr;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("His name is Tom", "Tom", "john");

myReplace("I think we should look up there", "up", "Down");