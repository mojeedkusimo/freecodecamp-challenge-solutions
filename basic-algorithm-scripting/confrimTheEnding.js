function confirmEnding(str, target) {

    if (str.substr(-target.length,target.length) === target) {
        console.log(true);
    } else {
        console.log(false);
    }
  }
  
  confirmEnding("Bastian", "n");
  confirmEnding("Congratulation", "on");