class Formatter {
  //add static methods here
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(string){
    string = string.split(' ');
    for (var i = 0; i < string.length; i++){
      string[i] = string[i].replace(/[^A-Za-z0-9-']+/g, '');
    }
    return string.join(' ');
  }

  static titleize(str){
    let nos = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      if (nos.indexOf(str[i]) === -1 || i ===0 ){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      }
    }
    return str.join(' ');
  }
}