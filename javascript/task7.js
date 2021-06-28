$('#task7-input').on('change', function () {
  $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
});

$('.task7-btn').on('click', function () {
  let n = Number($('#task7-input').val());
  let n2 = n * 2;
  let counter = 0;

  // тупой перебор, самый медленный алгоритм
  // for (let i = n + 1; i < n2; ++i) {
  //   let j = 2;
  //   for (; j < i; ++j) {
  //     if (i % j == 0) break;
  //   }
  //   if (j == i) ++counter;
  // }
  //////////////////////////////////////////////

  // средненький алгоритм
  // for (let i = n + 1; i < n2; ++i) {
  //   let j = 2,
  //     k = Math.sqrt(i);
  //   for (; j <= k; ++j) {
  //     if (i % j == 0) break;
  //   }
  //   if (j > k) ++counter;
  // }
  //////////////////////////////////////////////

  // запоминаем простые числа, самый быстрый алгоритм
  let p = [2];
  for (let x = 3; x < n2; x += 2) {
    let j = 0,
      ok = true;
    while (p[j] * p[j] <= x) {
      if (x % p[j] == 0) {
        ok = false;
        break;
      }
      ++j;
    }
    if (ok) {
      p.push(x);
      if (x > n) ++counter;
    }
  }

  Swal.fire({
    title: 'task7',
    html: counter,
  });
});
