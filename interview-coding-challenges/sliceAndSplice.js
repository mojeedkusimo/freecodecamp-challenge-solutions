function frankenSplice(arr1, arr2, n) {

    let newArr2 = arr2.slice();
    newArr2.splice(n,0,...arr1);

    console.log(newArr2);
    return arr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);