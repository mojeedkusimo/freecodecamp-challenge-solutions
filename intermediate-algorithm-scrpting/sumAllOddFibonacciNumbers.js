function sumFibs(num) {

    let FiboArr = [];
    let sum = 0;

    for (let i=0; i<num; i++) {
        switch (i) {
            case 0:
                console.log(0);
                break;
            case 1:
                FiboArr.push(1,1);
                break;
            default:
                FiboArr.push(FiboArr[i-2] + FiboArr[i-1]);
                break;
        }
    }

    console.log(FiboArr);
    FiboArr.forEach( el => {
        if (!(el % 2 === 0) && (el <= num)) {
            return sum += el;
        }
    } );
    console.log(sum);
  }
  
  sumFibs(10);
//   sumFibs(1000);
//   sumFibs(4000000);
sumFibs(4)
sumFibs(75024)