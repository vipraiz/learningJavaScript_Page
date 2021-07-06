$('.task16-inputs')
  .children()
  .children()
  .on('change', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('#task16-n').on('change', function () {
  document.getElementById('task16-m').setAttribute('max', $(this).val());

  $('#task16-m').val((_i, v) =>
    Math.max(
      $('#task16-m').attr('min'),
      Math.min($('#task16-m').attr('max'), v)
    )
  );
});

$('.task16-btn').on('click', function () {
  const N = Number($('#task16-n').val());
  const M = Number($('#task16-m').val());

  Swal.fire({
    title: 'task16',
    html: getLosingNumber(N, M),
  });

  function getLosingNumber(amount, number) {
    if (number == 1) return amount;
    if (number == amount) return amount - 1;

    let s = 0;
    while (number % 2 != 0) {
      s += Math.floor(amount / 2);
      amount -= Math.floor(amount / 2);
      number = Math.floor((number + 1) / 2);
    }
    s += Math.floor(number / 2);

    return s;
  }
});
