function bouncer(arr) {

  let falsyArr = [false, null, 0, "", undefined, NaN];
  let newArr = [];
    arr.forEach((el,ind,array) => {
      if (!falsyArr.includes(el)) {
        newArr.push(el);
      }
    })
    console.log(newArr);
  }
  
  bouncer([7, "ate", "", false, 9]);