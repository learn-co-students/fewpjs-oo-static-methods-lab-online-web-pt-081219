class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    let strings = string.split(' ')
    let capStrings = strings.map(word =>{
      if (["a", "the", "an", "but", "of", "and", "for", "at", "by", "from"].includes(word)){
        return word
      } else {
        return this.capitalize(word)
      }
    })

    capStrings[0] = this.capitalize(capStrings[0])

    return capStrings.join(' ')
  }
}