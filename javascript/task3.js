function padZeros(elem) {
  if (Number(elem) < 10) {
    if (elem[0] == '+' || elem[0] == '-') {
      elem = elem[0] + '0' + elem[1];
    } else elem = '0' + elem;
  }
  return elem;
}

function processList(array) {
  for (let i = 0; i < array.length; ++i) {
    if (isNaN(array[i])) continue;
    array[i] = padZeros(array[i]);

    array.splice(i, 0, '"');
    i += 2;
    array.splice(i, 0, '"');
  }
}

function makeOurString(array) {
  let string = '';
  for (let i = 0; i < array.length; ++i) {
    if (array[i] == '"') {
      string += array[i] + array[i + 1] + array[i + 2] + ' ';
      i += 2;
      continue;
    }
    string += array[i] + ' ';
  }
  return string;
}

$('.task3-btn').on('click', function () {
  let array = [
    'в',
    '5',
    'часов',
    '17',
    'минут',
    'температура',
    'воздуха',
    'была',
    '+5',
    'градусов',
  ];
  processList(array);

  // кавычки тоже выделяются пробелами
  //alert(array.join(' '));
  alert(makeOurString(array));
});
