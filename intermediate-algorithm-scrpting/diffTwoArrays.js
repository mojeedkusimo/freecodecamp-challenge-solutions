function diffArray(arr1, arr2) {
    let newArr = [];

   let diffArr1 = arr1.filter(el => !arr2.includes(el));

   let diffArr2 = arr2.filter(el => !arr1.includes(el));

   newArr = diffArr1.concat(diffArr2);
    console.log(newArr);
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 6, 6]);