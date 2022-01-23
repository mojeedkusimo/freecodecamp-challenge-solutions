function pairElement(str) {

    let DNAPair = [];

    for (let charInd=0; charInd<str.length; charInd++) {
        let DNASubPair = [];
        DNASubPair.push(str[charInd]);

        switch (str[charInd]) {
            case 'A':
                DNASubPair.push('T');
                break;
            case 'T':
                DNASubPair.push('A');
                break;
            case 'C':
                DNASubPair.push('G');
                break;
            case 'G':
                DNASubPair.push('C');
                break;
            default:
                console.log(str[charInd]);
        }

        DNAPair.push(DNASubPair);
    }
    console.log(DNAPair);

    // return str;
  }
  
  pairElement("GCG");
  pairElement("ATCGA");
  pairElement("TTGAG");
  pairElement("CTCTA");