function whatIsInAName(collection, source) {
    let arr = [];

    // let arrKeys = Object.keys(source);
    // let arrValues = Object.values(source);
    let comObj = {};
    let sourcArr = Object.entries(source);
    // Only change code below this line
    collection.forEach(( el1, ind1) => {
      let collArr = Object.entries(el1);
      console.log('collArr: ', collArr);
      console.log('sourcArr: ', sourcArr);
      if (collArr.includes(sourcArr)) {
        arr.push(el1);
      }

      // for (let x in el1) {
      //   if (el1[x] === source[x]) {
      //     comObj[x] = source[x];
      //   }
      // }
      // sourcArr.forEach((el, ind, arr) => {

      // });
      // for (let key in el1) {
      //   // console.log(key,arrObj[0],el)
      //   // console.log(typeof(key))
      //   // arrKeys.forEach((el2, ind2) => {
      //   //   if (key === arrKeys[ind2] && el1[key] === arrValues[ind2]) {
            // arr.push(el1);
      //   //   }
      //   // })
      // }
      
    })
  
    let obj1 = {
      a: 1,
      b: 2,
      c: 3
    }

//     let obj2 = {
//       a: 1,
//       b: 2,
//       c: 3
//     }
// let comObj = {};
//     for (let x in obj1) {
//       if (obj1[x] === obj2[x]) {
//         comObj[x] = obj1[x];
//       }
//     }
    // console.log(comObj)
    // Only change code above this line
    console.log(arr);
  }
  
  // whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  // whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
  whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })