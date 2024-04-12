const palindromes = function (str) {
    let bool = true;
    let palin = '';
    str = str.toLowerCase();
    str = str.replace(/[\W_]/g, '');
    
  for (let i = 0; i < str.length; i++){
    
    palin = str[i] + palin;
    
  }
  for (let i = 0; i < palin.length; i++){		
    if (str[i] != palin[i] ){
        bool = false;
    }
 }
 return bool
};



// Do not edit below this line
module.exports = palindromes;
