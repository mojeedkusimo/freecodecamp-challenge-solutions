function updateInventory(arr1, arr2) {
    //Create an array of only items in arr1 called itemsOfArr1
    //Loop through arr2
        //check if item is in arr1
            //if present, update new value for the item
            //else add new item to arr1
    //arrange new arr1 alphabetically
    //return the new arr1
    let itemsOfArr1 = [];

    arr1.forEach(el => itemsOfArr1.push(el[1]) );

    arr2.forEach( el => {
        if (itemsOfArr1.includes(el[1])) {
            let indexOfItemOfArr1 = itemsOfArr1.indexOf(el[1]);

            arr1[indexOfItemOfArr1].splice(0,1,el[0]+ arr1[indexOfItemOfArr1][0]);
        } else {
            arr1.push(el);
            itemsOfArr1.push(el[1]);
        }
    });

    let copyOfitemsOfArr1 = itemsOfArr1.slice();

    itemsOfArr1.sort().forEach((el,ind,arr) => {
        let indexOfArr1 = copyOfitemsOfArr1.indexOf(el);

        arr.splice(ind,1,arr1[indexOfArr1]);

    });

    return itemsOfArr1;

}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];

var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

updateInventory(curInv, newInv);