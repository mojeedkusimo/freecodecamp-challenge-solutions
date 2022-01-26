function convertHTML(str) {

  let HTMLEntities = [
    ['&','&amp;'],
    ['<','&lt;'],
    ['>','&gt;'],
    ['"','&quot;'],
    ["'","&apos;"]
  ];

  let newStrArr = str.split('');

  newStrArr.forEach((strEl, strInd, strArr) => {
    HTMLEntities.forEach((entityEl,entityInd,entityArr) => {
      if (strEl === entityEl[0]) {
        newStrArr.splice(strInd,1,entityEl[1]);
      }
    });
  });

    console.log(newStrArr);
}
  
  convertHTML("Dolce & Gabbana");