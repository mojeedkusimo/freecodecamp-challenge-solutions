function chunkArrayInGroups(arr, size) {

    let mainArr = [];
    let createArr = (arr, num, count) => {
        let newArr = [];
        for (let i=0; i<num; i++) {
            if (arr[i+count] === undefined) {
                break
            } else {
                newArr.push(arr[i+count]);
            }
        }

        mainArr.push(newArr);
    }

    for (let i=0; i<arr.length; i+=size) {
        createArr(arr, size, i);       
    }

    console.log(mainArr);
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);