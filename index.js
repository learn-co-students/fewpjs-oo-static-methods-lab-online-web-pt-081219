class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1) 
  }; 

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }; 

  static titleize(string) {
    let exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ") 
    let includedWords = words.slice(1)
    let newString = []

    newString.push(this.capitalize(words[0]))

    for(const word of includedWords) {
      if (!exclude.find(el => el === word)) {
        newString.push(this.capitalize(word))
      }else {
        newString.push(word)
      }
    }
    return newString.join(" "); 
  }

}

