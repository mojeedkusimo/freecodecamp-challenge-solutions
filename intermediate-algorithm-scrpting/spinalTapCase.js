function spinalCase(str) {

    let funStr = [];

    // Create an array from str
    for (let i=0; i<str.length; i++) {
        if (i===0) {
            funStr.push(str[i].toLowerCase());
        }
        funStr.push(str[i]);
    }

    let anotherArr = [];
    // Replace any character break with '-'
    funStr.forEach((el, ind, array) => {
        if (el.search(/[a-z]/i) === -1) {
            array.splice(ind,1,'-');
       } 
       
       if (el.search(/[a-z]/) && array[ind+1].search(/[A-Z]/)) {
            anotherArr.push('-');
            anotherArr.push(el.toLowerCase());
       }
       else {
           anotherArr.push(el.toLowerCase());
       }
    })

    // funStr.forEach(() => {

    // })
    console.log(anotherArr);
  }
  
//   spinalCase('This Is Spinal Tap');
//   spinalCase("thisIsSpinalTap");
//   spinalCase("The_Andy_Griffith_Show");
  spinalCase("Teletubbies say Eh-oh");
//   spinalCase("AllThe-small Things");