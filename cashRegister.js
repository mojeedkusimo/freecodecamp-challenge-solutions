let checkCashRegister = (price, cash, cid) => {

    let diff = cash - price;

    let currencyObject = {
        penny: {
            unit: "PENNY",
            unitValue: 0.01,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[0][1]
        },
        nickel: {
            unit: "NICKEL",
            unitValue: 0.05,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[1][1]
        },
        dime: {
            unit: "DIME",
            unitValue: 0.1,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[2][1]
        },
        quarter: {
            unit: "QUARTER",
            unitValue: 0.25,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[3][1]
        },
        oneDollar: {
            unit: "ONE",
            unitValue: 1,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[4][1]
        },
        fiveDollars: {
            unit: "FIVE",
            unitValue: 5,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[5][1]
        },
        tenDollars: {
            unit: "TEN",
            unitValue: 10,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[6][1]
        },
        twentyDollars: {
            unit: "TWENTY",
            unitValue: 20,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[7][1]
        },
        oneHundredDollars: {
            unit: "ONE HUNDRED",
            unitValue: 100,
            numberOfCurrency() {
                return this.totalValue/this.unitValue;
            },
            totalValue: cid[8][1]
        },
        totalCID() {
            return parseFloat((this.penny.totalValue + this.nickel.totalValue + this.dime.totalValue + this.quarter.totalValue + this.oneDollar.totalValue + this.fiveDollars.totalValue + this.tenDollars.totalValue + this.twentyDollars.totalValue + this.oneHundredDollars.totalValue).toFixed(2));
        }
    }

    // console.log(diff);
    // console.log(currencyObject.totalCID());
    // let cidChange = [['ONE HUNDRED'],['TWENTY'],['TEN'],['FIVE'],['ONE'],['QUARTER'],['DIME'],['NICKEL'],['PENNY']];

    if ( currencyObject.totalCID() < (diff) ) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    else if ( currencyObject.totalCID() === (diff) ) {
        return { status: "CLOSED", change: cid }
    }
    else if ( currencyObject.totalCID() > (diff) ) {
        return { status: "OPEN", change: 'Not Calculated yet' }
        // return 'Solution not ready yet';
    }


    for (let i = diff; i > 0.00; i--) {
        // for (let j = 0; j < cid.length; j++) {
        //     for(let k = 0; k < cid[j].length; k++) {
        //         if (cid[j][k] > i) {
        //             i - cid[j][k]
        //             cid[j][k] = cid[j][k] - currencyObject.oneHundredDollars.unitValue;
        //         }
        //     }
        // }
        // if (i < 0){break};
        // console.log(i);
        // i--;
        if ( i > currencyObject.oneHundredDollars.totalValue ) {
            // console.log('This is for $100 - ' + currencyObject.oneHundredDollars.totalValue);
            // console.log('This is for diff - ' + i);
             i - currencyObject.oneHundredDollars.unitValue;
            // console.log('This is for minus - ' + minus);

            currencyObject.oneHundredDollars.totalValue = currencyObject.oneHundredDollars.totalValue - currencyObject.oneHundredDollars.unitValue;
            
        }
        else if (i > currencyObject.twentyDollars.totalValue ) {
            // console.log('This is for $20 - ' + currencyObject.twentyDollars.totalValue);
            // console.log('This is for diff2 - ' + i);
            diff = i - currencyObject.twentyDollars.unitValue + 1;
            currencyObject.twentyDollars.totalValue = currencyObject.twentyDollars.totalValue - currencyObject.twentyDollars.unitValue;
        }
        else if (i > currencyObject.tenDollars.totalValue ) {
            i - currencyObject.tenDollars.unitValue;
            currencyObject.tenDollars.totalValue = currencyObject.tenDollars.totalValue - currencyObject.tenDollars.unitValue;
        }
        else if ( i > currencyObject.fiveDollars.totalValue ) {
            i - currencyObject.fiveDollars.unitValue;
            currencyObject.fiveDollars.totalValue = currencyObject.fiveDollars.totalValue - currencyObject.fiveDollars.unitValue;
        }
        else if (i > currencyObject.oneDollar.totalValue ) {
            i - currencyObject.oneDollar.unitValue;
            currencyObject.oneDollar.totalValue = currencyObject.oneDollar.totalValue - currencyObject.oneDollar.unitValue;
        }
        else if (i > currencyObject.quarter.totalValue ) {
            i - currencyObject.quarter.unitValue;
            currencyObject.quarter.totalValue = currencyObject.quarter.totalValue - currencyObject.quarter.unitValue;
        }
        else if (i > currencyObject.dime.totalValue ) {
            i - currencyObject.dime.unitValue;
            currencyObject.dime.totalValue = currencyObject.dime.totalValue - currencyObject.dime.unitValue;
        }
        else if (i > currencyObject.nickel.totalValue ) {
            i - currencyObject.nickel.unitValue;
            currencyObject.nickel.totalValue = currencyObject.nickel.totalValue - currencyObject.nickel.unitValue;
        }
        else if (i > currencyObject.penny.totalValue ) {
            i - currencyObject.penny.unitValue;
            currencyObject.penny.totalValue = currencyObject.penny.totalValue - currencyObject.penny.unitValue;
        }
    }

    cidChange[0].push(currencyObject.oneHundredDollars.totalValue);
    cidChange[1].push(currencyObject.twentyDollars.totalValue);
    cidChange[2].push(currencyObject.tenDollars.totalValue);
    cidChange[3].push(currencyObject.fiveDollars.totalValue);
    cidChange[4].push(currencyObject.oneDollar.totalValue);
    cidChange[5].push(currencyObject.quarter.totalValue);
    cidChange[6].push(currencyObject.dime.totalValue);
    cidChange[7].push(currencyObject.nickel.totalValue);
    cidChange[8].push(currencyObject.penny.totalValue);

    // console.log(diff);
    // console.log(currencyObject.totalCID());
    // console.log(cidChange);


}

console.log(checkCashRegister(2,337.41,[
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]));