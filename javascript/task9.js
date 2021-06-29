$('.task9-inputs')
  .children()
  .children()
  .on('change', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('.task9-btn').on('click', function () {
  let X1 = Number($('#task9-x1').val()),
    Y1 = Number($('#task9-y1').val()),
    X2 = Number($('#task9-x2').val()),
    Y2 = Number($('#task9-y2').val());

  let answer = 'Телепортация невозможна.';
  if (X1 != X2 || Y1 != Y2) {
    if ((X1 + Y1) % 2 == (X2 + Y2) % 2) {
      if (Math.abs(X1 - X2) == Math.abs(Y1 - Y2)) {
        answer = 1;
      } else {
        answer = 2;
      }
    }
  }

  Swal.fire({
    icon: isNaN(answer) ? 'error' : 'success',
    title: 'task9',
    html: answer,
  });
});
