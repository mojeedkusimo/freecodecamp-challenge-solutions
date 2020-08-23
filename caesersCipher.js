
let rot13 = (str) => {

    capitalStr = str.toUpperCase();
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cipherCode = {}
    let newStr = '';
    const nonAplha = /[^A-z]/gi;

    let cipherCodeGenerator = () => {
        for (let i = 0; i < alphabets.length; i++) {

            if (i < 13) {
                cipherCode[alphabets[i]] = alphabets[ i + 13];
            }
            else {
                cipherCode[alphabets[i]] = alphabets[ i - 13];
            }
        }
    }
    cipherCodeGenerator();

    for (let j = 0; j < capitalStr.length; j++) {

        if ( nonAplha.test(capitalStr[j]) ){
            newStr += capitalStr[j];
        }
        else {
            newStr += cipherCode[capitalStr[j]];
        }
    
    }

    return newStr;
}
