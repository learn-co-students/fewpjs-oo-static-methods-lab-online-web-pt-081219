class Formatter {
  //add static methods here

  static capitalize(string){
    let letterArray = string.split('')
    let capLetter = letterArray[0].toUpperCase()
    return capLetter + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '');
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = []
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++){
      if (i == 0) {
        newString.push(this.capitalize(words[i]))
      } else {
        if (exceptions.includes(words[i])){
          newString.push(words[i])
        } else {
            newString.push(this.capitalize(words[i]))
          }
        }
      }
      return newString.join(" ");
    }
  }