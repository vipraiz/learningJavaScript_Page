function getArray() {
  let arr = [];
  let num, numClone, sumOfDigits;

  for (i = 1; i < 1000; i += 2) {
    num = numClone = i ** 3;
    sumOfDigits = 0;
    while (numClone > 0) {
      sumOfDigits += numClone % 10;
      numClone = Math.floor(numClone / 10);
    }

    if (sumOfDigits % 7 == 0) arr.push(num);
  }
  return arr;
}

alert(getArray().reduce((a, b) => a + b)); // 17485588610
