function uniteUnique(arr) {

    let mainArr = [];

    // for (let arrInd=0; arrInd<arguments.length; arrInd++) {
    //     mainArr = mainArr.concat(arguments[arrInd]);
    // }

    for (let argumentsInd=0; argumentsInd<arguments.length; argumentsInd++) {
        for (let arrInd=0; arrInd<arguments[argumentsInd].length; arrInd++) {
            if (!mainArr.includes(arguments[argumentsInd][arrInd])) {
                mainArr.push(arguments[argumentsInd][arrInd]);
            }
        }
    }
    console.log(mainArr);
    return arr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//   uniteUnique([1, 2, 3], [5, 2, 1]);
//   uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);