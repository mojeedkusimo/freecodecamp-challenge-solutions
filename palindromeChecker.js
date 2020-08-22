let palindrome = (str) => {
    let newString = str.replace(/[^A-Z0-9]/gi, '').toLowerCase();
    let revString = '';

    for (let i = newString.length - 1; i > -1; i--) {
        revString += newString[i]
    }

    if (newString === revString) {
        return true;
    }
    else {
        return false;
    }
}


console.log(palindrome('_eye'));
