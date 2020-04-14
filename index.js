class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string){
    //return string.charAt(0).toUpperCase() + string.slice(1);
   let notCaptiol = ["the", "a", "an", "but", "of", "and", "for", "at", "by","from"];
   let titleizeFirstLetter = [];
    string.split(" ").map(w => {
      if(notCaptiol.includes(w)) {
        titleizeFirstLetter.push(w)
      }
      else {
        titleizeFirstLetter.push(this.capitalize(w));
      }
    });
    return this.capitalize(titleizeFirstLetter.join(" "));
  }
}





// get firstName() {
//   return this.capitalize(this._firstName);
// }

// set firstName(firstName) {
//   this._firstName = this.sanitize(firstName);
// }

// capitalize(string) {
//   // capitalizes first letter
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// sanitize(string) {
//   // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
//   return string.replace(/[^A-Za-z0-9-' ]+/g, '');
// }