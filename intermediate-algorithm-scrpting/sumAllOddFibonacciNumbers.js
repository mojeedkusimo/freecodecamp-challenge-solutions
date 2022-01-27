function sumFibs(num) {

    let FiboArr = [];
    let sum = 0;

    for (let i=0; i<=num; i++) {
        switch (i) {
            case 0:
                console.log(0);
                break;
            case 1:
                FiboArr.push(1,1);
                break;
            case ( i > 1 ) && ( i % 2 === 1):
                FiboArr.push();
                break;
            default:
                console.log(i);
                break;
        }
    }

    console.log(FiboArr.forEach( el => sum += el ));
    return num;
  }
  
  sumFibs(4);