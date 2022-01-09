const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes >= par + 3){
  return "Go Home!";
} else if (strokes == par + 2 && strokes != 1 ){
  return "Double Bogey"; 
} else if (strokes >= par + 1 && strokes != 1){
  return "Bogey";
} else if (strokes == par && strokes != 1){
  return "Par";
} else if (strokes === par - 1 && strokes != 1){
  return "Birdie";
} else if (strokes <= par - 2 && strokes != 1){
  return "Eagle";
} else if (strokes === 1){
  return "Hole-in-one!";
} else {
  return "Change Me";
}
  // Only change code above this line
}

golfScore(5, 4);