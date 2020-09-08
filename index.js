class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let nonCapitalized = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = []
    let splitString = string.split(" ")
    for (let i=0; i < splitString.length; i++){
      if (i === 0) {
        result.push(this.capitalize(splitString[i]))
      }
      else {
        if (nonCapitalized.includes(splitString[i])){
          result.push(splitString[i])
        }
        else {
          result.push(this.capitalize(splitString[i]))
        }
      }
    }
    return result.join(" ");
  }

}
