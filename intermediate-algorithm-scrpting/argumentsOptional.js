function addTogether() {
    if (arguments.length === 1) {
      if (typeof(arguments[0]) !== "number") {
            console.log(undefined)
        return undefined;
      } else {
      return num => {
          if (typeof(arguments[0]) !== "number" || typeof(num) !== "number") {
            console.log(undefined)
        return undefined;
        } else {

                      console.log(arguments[0] + num);
              return arguments[0] + num;
        }
    }
      }

    //   return function (num) {
    //       return (console.log(arguments[0] + num)); 
    //     }
    } else {
              if (typeof(arguments[0]) !== "number" || typeof(arguments[1]) !== "number") {
                            console.log(undefined);
      return undefined;

        }
        else {
            console.log(arguments[0] + arguments[1]);
                        return arguments[0] + arguments[1];
        }

    }
  }
  
  addTogether(2)(3);