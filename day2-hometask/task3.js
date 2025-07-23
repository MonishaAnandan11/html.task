// Use break: stop at the first prime number between 10 and 20
for (let i = 2; i <= 20; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("First prime number is:", i);
    break;
  }
}

// Use continue: print only odd numbers between 1 and 20
for (let x = 1; x <= 20; x++) {
  if (x % 2 === 0) continue;
  console.log(x);
}