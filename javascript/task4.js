$('.task4-btn').on('click', function () {
  let string = '';
  let array = [
    57.8, 46.51, 97, 27.1, 47.51, 95, 1.05, 3.14, 115.23, 57.8, 46.51, 97,
  ];
  string += supplementString(array, 'Все цены:') + '<br><br><br>';

  array.sort((a, b) => a - b);
  string +=
    supplementString(array, 'Все цены, отсортированные по возрастанию:') +
    '<br><br><br>';

  let newArray = array;
  newArray.sort((a, b) => b - a);
  string +=
    supplementString(newArray, 'Все цены, отсортированные по убыванию:') +
    '<br><br><br>';

  string += supplementFiveMostExp(array, 'Цены пяти самых дорогих товаров:');

  Swal.fire({
    title: 'task4',
    html: string,
  });

  function padZeros(elem) {
    if (elem.length < 2) {
      elem = '0' + elem;
    }
    return elem;
  }

  function supplementString(array, substring) {
    let string = '';

    array.forEach((element) => {
      let spitedArray = String(element).split(['.']);
      if (spitedArray.length > 1) spitedArray[1] = padZeros(spitedArray[1]);

      string +=
        spitedArray[0] +
        ' руб' +
        (spitedArray.length > 1 ? ' ' + spitedArray[1] + ' коп' : ' 00 коп') +
        '<br>';
    });
    string = string.slice(0, -2);
    return substring + '<br><br>' + string;
  }

  function supplementFiveMostExp(array, substring) {
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
        '<br>';
    }
    string = string.slice(0, -2);
    return substring + '<br><br>' + string;
  }
});
