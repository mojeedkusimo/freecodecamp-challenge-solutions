

let telephoneCheck = (str) => {

    const FIRSTPATTERN = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    const SECONDPATTERN = /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    const THIRDPATTERN = /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/;
    const FOURTHPATTERN = /^[0-9]{10}$/;
    const FIFTHPATTERN = /^1{0,1}\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    const SIXTHPATTERN = /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/;

    if (FIRSTPATTERN.test(str) || SECONDPATTERN.test(str) || THIRDPATTERN.test(str) || FOURTHPATTERN.test(str) || FIFTHPATTERN.test(str) || SIXTHPATTERN.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(telephoneCheck('3333333333'));