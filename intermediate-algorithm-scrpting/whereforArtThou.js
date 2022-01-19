function whatIsInAName(collection, source) {
    let arr = [];

    let arrKeys = Object.keys(source);
    let arrValues = Object.values(source);
    // Only change code below this line
    collection.forEach(( el1, ind1) => {
      
      for (let key in el1) {
        // console.log(key,arrObj[0],el)
        // console.log(typeof(key))
        arrKeys.forEach((el2, ind2) => {
          if (key === arrKeys[ind2] && el1[key] === arrValues[ind2]) {
            arr.push(el1);
          }
        })
      }
      
    })
  
    // Only change code above this line
    console.log(arr);
  }
  
  // whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })