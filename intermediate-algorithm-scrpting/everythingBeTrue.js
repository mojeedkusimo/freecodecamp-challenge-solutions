function truthCheck(collection, pre) {

    let falsyVals = [0, null, undefined, '', false, NaN];
    let result = [];

    collection.forEach(el => result.push(falsyVals.includes(el[pre])));

    if (result.includes(true)) {
        console.log(false);
    } else {
        console.log(true);
    }
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

  truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

  truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat");

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat");

truthCheck([{"single": "yes"}], "single");

truthCheck([{"single": ""}, {"single": "double"}], "single");

truthCheck([{"single": "double"}, {"single": undefined}], "single");

truthCheck([{"single": "double"}, {"single": NaN}], "single");