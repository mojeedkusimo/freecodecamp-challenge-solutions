function sumAll(arr) {

    let newArr = [];
    let sum = 0;

    for (let i=Math.min(...arr); i<Math.max(...arr)+1; i++) {
        newArr.push(i);
    }

    newArr.forEach((el,ind,array) => {
        sum += el;
    })
    console.log(sum);
  }
  
  sumAll([1, 4]);
  sumAll([5, 10]);