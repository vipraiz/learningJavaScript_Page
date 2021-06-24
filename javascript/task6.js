$('.task6-inputs')
  .children()
  .children()
  .on('input', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('.task6-btn').on('click', function () {
  // do smth
});
