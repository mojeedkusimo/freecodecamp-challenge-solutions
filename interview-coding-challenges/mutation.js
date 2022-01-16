function mutation(arr) {


    let getUniqueLetters = (str) => {

        let newStrArr = [];
        for (let i=0; i<str.length; i++) {
            if (!newStrArr.includes(str[i])) {
                newStrArr.push(str[i].toLowerCase());
            }
        }

        return newStrArr;
    }

    let uniqueSort1 = getUniqueLetters(arr[0]).sort();
    let uniqueSort2 = getUniqueLetters(arr[1]).sort();

    let count = 0;
    for (let i=0; i<uniqueSort2.length; i++) {
        if (uniqueSort1.includes(uniqueSort2[i])) {
            count += 1;
        }
    }
    if (count === uniqueSort2.length) {
        console.log(true)
    } else {
        console.log(false)
    }
    return arr;
  }
  
  mutation(["hello", "Hey"]);
  mutation(["floor", "for"]);