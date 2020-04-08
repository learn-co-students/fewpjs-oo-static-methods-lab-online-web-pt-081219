class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]/g, '');
  }

  static titleize(str) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let strTitle = [];
    let words = str.split(' ');
    words.forEach(word => {
      if (exceptions.includes(word)) {
        strTitle.push(word);
      } else {
        let capWord = this.capitalize(word);
        strTitle.push(capWord);
      }  
    });
    return this.capitalize(strTitle.join(' '));
  }
}