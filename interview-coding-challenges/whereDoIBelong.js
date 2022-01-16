function getIndexToIns(arr, num) {

    let arrMore = [];

    if (arr.length !== 0) {
        arr.sort((a,b) => a - b).forEach((el,ind,array) => {
            if (num <= el) {
                arrMore.push(ind);
            } else if (num > Math.max(...array)) {
                // console.log(arr.length);
                arrMore.push(arr.length);
            }
        })

        console.log(arrMore[0]);
    } else {
         console.log(0);
    }


    // console.log(Math.max(...arr));
  }
  
//   getIndexToIns([40, 60], 50);
//   getIndexToIns([10, 20, 30, 40, 50], 35);
//   getIndexToIns([2, 5, 10], 15);
  getIndexToIns([], 1);