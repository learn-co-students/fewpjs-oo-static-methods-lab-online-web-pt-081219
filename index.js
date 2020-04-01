class Formatter {
  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  static sanitize(input) {
    return input.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(input) {
    let stringArray = input.split(" ")
    let capitalArray = [];
    let ommitChars = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    stringArray.map(el => {

      if (stringArray.indexOf(el) === 0) {
        capitalArray.push(this.capitalize(el))
        return
      } else if (!ommitChars.includes(el)) {
        capitalArray.push(this.capitalize(el))
        return
      } else {
        capitalArray.push(el)
      }
    })

    return capitalArray.join(" ")
  }
}