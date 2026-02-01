var coinFlip;

do {
  coinFlip = Math.floor(Math.random() * 2); // 0 or 1

  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
} while (coinFlip === 0); // stop when it becomes Tails (1)
