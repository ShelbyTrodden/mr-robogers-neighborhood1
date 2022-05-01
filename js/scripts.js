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

function beepBoopNeighbor(){
let array= inputtedNumber(Num)
if array.includes("1") {
  results return "Beep!";
} else if array.includes("2") {
    results return "Boop!";
  } else array.includes("3"){
    results return "Won't you be my neighbor?"
  }
}  


// UI Logic

$(document).ready(function() {
  $("#roboger").submit(function(event) {
    event.preventDefault();
    $("#beep-boop").show();
  });
});
