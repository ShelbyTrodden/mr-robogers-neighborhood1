// Utility Logic

function noInputtedNumber() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic

function RobogersNeighborhood(Num) {
  if (noInputtedNumber(Num)) {
    return 0;
  }

}
let array= inputtedNumber(Num)
if array.includes("1") {
  return "Beep!";
} else if array.includes("2"){
    return "Boop!";
  } else array.includes("3"){
    return "Won't you be my neighbor?"
  }



// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
}