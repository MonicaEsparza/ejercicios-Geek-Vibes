const isPalindrome = (strWord) => {
    strWord = strWord.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    var strNormalWord = strWord.toLowerCase().replace(/[\W_]/g, '');
    var strReverseWord = strNormalWord.split('').reverse().join('');
    console.log(strReverseWord === strNormalWord); 
}

isPalindrome('ana')