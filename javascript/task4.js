function padZeros(elem) {
  if (elem.length < 2) {
    elem = '0' + elem;
  }
  return elem;
}

function printArray(array) {
  let string = '';

  array.forEach((element) => {
    let spitedArray = String(element).split(['.']);
    if (spitedArray.length > 1) spitedArray[1] = padZeros(spitedArray[1]);

    string +=
      spitedArray[0] +
      ' руб' +
      (spitedArray.length > 1 ? ' ' + spitedArray[1] + ' коп' : ' 00 коп') +
      ', ';
  });
  string = string.slice(0, -2);

  alert(string);
}

function printFiveMostExp(array) {
  let string = '';
  let newArray = array;
  newArray.sort((a, b) => b - a);

  for (let i = 0; i < 5; ++i) {
    let spitedArray = String(newArray[i]).split(['.']);
    if (spitedArray.length > 1) spitedArray[1] = padZeros(spitedArray[1]);

    string +=
      spitedArray[0] +
      ' руб' +
      (spitedArray.length > 1 ? ' ' + spitedArray[1] + ' коп' : ' 00 коп') +
      ', ';
  }
  string = string.slice(0, -2);

  alert(string);
}

$('.task4-btn').on('click', function () {
  let array = [
    57.8, 46.51, 97, 27.1, 47.51, 95, 1.05, 3.14, 115.23, 57.8, 46.51, 97,
  ];
  printArray(array);

  array.sort((a, b) => a - b);
  printArray(array);

  let newArray = array;
  newArray.sort((a, b) => b - a);
  printArray(newArray);

  printFiveMostExp(array);
});
