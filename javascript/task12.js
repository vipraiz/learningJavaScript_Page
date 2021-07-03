$('.task12-inputs')
  .children()
  .children()
  .on('change', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('.task12-btn').on('click', function () {
  let N, M;
  (N = Number($('#task12-n').val())), (M = Number($('#task12-m').val()));

  let res = 2 % M;
  for (let i = 0; i < N; ++i) {
    res = (res * res) % M;
  }

  Swal.fire({
    title: 'task12',
    html: res.toString(),
  });
});
