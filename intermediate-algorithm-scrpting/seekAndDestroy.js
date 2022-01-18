function destroyer(arr) {

    let arrArg = Object.values(arguments);

    for (let i=0; i<arr.length; i++) {
        if (arrArg.includes(arr[i])) {
            arr.splice(i,1,0);
        }
    }
    console.log(arr.filter( el => el !== 0));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);