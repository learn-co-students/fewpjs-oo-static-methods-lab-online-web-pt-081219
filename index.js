class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(string) {
    let words = string.split(" ")
    let omitted = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newWords = words.map(word => {
      if (omitted.includes(word)) {return word}
      return this.capitalize(word)
    })
    return this.capitalize(newWords.join(" "))
  }
}