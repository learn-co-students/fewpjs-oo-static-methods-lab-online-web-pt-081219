class Formatter {
  static capitalize(string) {
    let [first, ...rest] = string;

    return first.toUpperCase() + rest.join("");
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z-' ]/g, "");
  }

  static titleize(sentence) {
    let allWords = [];
    let words = sentence.split(" ");

    for (let word of words) {
      switch (word) {
        case "the":
        case "a":
        case "an":
        case "but":
        case "of":
        case "and":
        case "for":
        case "at":
        case "by":
        case "from":
          allWords.push(word);
          break;
        default:
          let fixed = this.capitalize(word);
          allWords.push(fixed);
          break;
      }
    }
    return this.capitalize(allWords.join(" "));
  }
}
