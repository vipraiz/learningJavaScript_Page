$('.task17-inputs')
  .children()
  .children()
  .on('change', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('.task17-btn').on('click', function () {
  const N = Number($('#task17-n').val());
  const M = Number($('#task17-m').val());

  if (M <= N)
    Swal.fire({
      title: 'task17',
      html: getNumberOfWays(M, N),
    });
  else {
    Swal.fire({
      icon: 'error',
      title: 'task17',
      html: 'Число M должно быть не меньше числа N!',
    });
  }

  function getNumberOfWays(width, length) {
    const array = new Array(1 + length);
    for (let i = 0; i < width; i++) {
      array[i] = 1;
    }
    for (let i = width; i <= length; i++) {
      array[i] = array[i - 1] + array[i - width];
    }
    return array[length];
  }
});
