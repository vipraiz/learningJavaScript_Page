// дебильное решение
function getPrimeFactorsStr(value) {
  let string = '',
    prime = 2;
  let divisor;

  while (value > 1) {
    if (value % prime == 0) {
      value = Math.floor(value / prime);
      string += `${prime}*`;
    } else {
      // получение следующего простого числа
      if (prime == 2) --prime; // для установки простого числа на 3 (далее будет только +=2)
      divisor = null;
      // делитель не может быть больше половины числа
      while (divisor < prime / 2) {
        prime += 2; // пропускаем четные значения
        divisor = 3;
        while (divisor < prime / 2) {
          if (prime % divisor == 0) break;
          divisor += 2;
        }
      }
    }
  }
  string = string.slice(0, -1);
  return string;
}

// нормальное решение
function primeFactors(value) {
  let string = '',
    divisor = 2;

  while (value >= 2) {
    if (value % divisor == 0) {
      string += `${divisor}*`;
      value = value / divisor;
    } else {
      ++divisor;
    }
  }
  string = string.slice(0, -1);
  return string;
}

$('#task5-1-input').on('input', function () {
  $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  let value = Number($('#task5-1-input').val());
  $('.task5-1-output').text(getPrimeFactorsStr(value));
});

$('#task5-2-input').on('input', function () {
  $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  let value = Number($('#task5-2-input').val());
  $('.task5-2-output').text(primeFactors(value));
});

let value1 = Number($('#task5-1-input').val());
$('.task5-1-output').text(getPrimeFactorsStr(value1));

let value2 = Number($('#task5-2-input').val());
$('.task5-2-output').text(primeFactors(value2));
