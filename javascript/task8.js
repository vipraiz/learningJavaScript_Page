$('.task8-inputs')
  .children()
  .children()
  .on('change', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('.task8-btn').on('click', function () {
  let A, B;
  (A = Number($('#task8-a').val())), (B = Number($('#task8-b').val()));

  if (A != B) {
    while (A != B) {
      if (A > B) {
        A = Math.floor(A / 2);
      } else {
        B = Math.floor(B / 2);
      }
    }
  } else {
    A = Math.floor(A / 2);
  }

  Swal.fire({
    title: 'task8',
    html: A,
  });
});
