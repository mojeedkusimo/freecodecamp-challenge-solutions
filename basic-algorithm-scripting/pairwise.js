function pairwise(arr, arg) {
    //Loop through the array arr
        //check the sum of each element and the rest that equal arg
        //sum up the indices of those numbers in sumPair
    //return sumPair

    let sumPair=0;

    arr.forEach((element, index, array) => {
        for (let i=0; i<array.length; i++) {
            if (element + array[i] === arg) {
                // sumPair+=array.indexOf(element) + array.indexOf(array[i]);
                console.log(element);
                console.log(array[i]);
            }
        }
    });

    // console.log(sumPair);

  }
  
  pairwise([1,4,2,3,0,5], 7);
//   pairwise([0, 0, 0, 0, 1, 1], 1);
//   pairwise([1, 3, 2, 4], 4);