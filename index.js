class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleizeString = "";
    string.split(" ").forEach(word => {
      if(except.includes(word)) {
        titleizeString += word + " ";
      }
      else {
        titleizeString += this.capitalize(word) + " ";
      }
    });
    return this.capitalize(titleizeString).slice(0, titleizeString.length-1);
  }

}