function getPrimeFactorsStr(value) {
  let string = '';
  let prime = 2;
  let i;

  while (value > 1) {
    if (value % prime == 0) {
      value = Math.floor(value / prime);
      string += `${prime}*`;
    } else {
      // получение следующего простого числа
      i = null;
      while (i != prime) {
        ++prime;
        i = 2;
        while (i < prime) {
          if (prime % i == 0) break;
          ++i;
        }
      }
    }
  }
  string = string.slice(0, -1);
  return string;
}

$('#task5-input').on('input', function () {
  $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
});

$('.task5-btn').on('click', function () {
  let value = Number($('#task5-input').val());
  alert(getPrimeFactorsStr(value));
});
