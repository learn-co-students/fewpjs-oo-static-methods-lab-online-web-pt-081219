class Formatter {
  //add static methods here

  static capitalize(string) {
    let array = string.split('')
    array[0] = array[0].toUpperCase()
    return array.join('')
  }

  static sanitize(string) {
    return string.replace (/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(phrase) {
    const safeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = phrase.split(' ')
    let newArray = array.map(word => {
      if (safeWords.includes(word)) {
        return word
      } else {
        word = this.capitalize(word)
        return word
      }
    })
    newArray[0] = this.capitalize(newArray[0])
    return newArray.join(' ')
  }
}