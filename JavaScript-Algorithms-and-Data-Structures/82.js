//Counting Cards

let count = 0;

function cc(card) {
  // Only change code below this line
  let toDo;
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0) {
    toDo = "Bet";
  } else {
    toDo = "Hold";
  }

  return count + " " + toDo;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');