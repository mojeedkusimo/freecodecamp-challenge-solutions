function dropElements(arr, func) {

    let arrCopy = arr.slice();
    let count = 0;

    for (let i = 0; i < arrCopy.length; i++) {
        
        if ((arr.filter(el => func(el)).length===0)) {
            arrCopy = [];
            break;
        }
        else if (!func(arr[i])) {
            arrCopy.splice(i-count,1);
            count++;
        } else {
            break;
        }
    }
    console.log(arrCopy);
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
  dropElements([0, 1, 0, 1], function(n) {return n === 1;});
  dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
  dropElements([1, 2, 3, 4], function(n) {return n > 5;});