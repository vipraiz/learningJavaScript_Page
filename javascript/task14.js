$('#task14-k').on('change', function () {
  $(this).val((_i, v) => {
    if (v == 0) return 1;
    return Math.max(this.min, Math.min(this.max, v));
  });
});

$('.task14-btn').on('click', function () {
  let S, K;
  (S = String($('#task14-s').val())), (K = Number($('#task14-k').val()));
  if (S == '') return;

  let res = '';

  if (K > 0) {
    for (let i = 0; i < K; i++) {
      res += S;
      if (res.length > 1023) {
        res = res.slice(0, -res.length + 1023);
        break;
      }
    }
  } else {
    K *= -1;
    if (S.length % K != 0) {
      res = 'NO SOLUTION';
    } else {
      const gapLength = S.length / K;
      const root = S.substring(0, gapLength);
      for (let i = gapLength; i < S.length; i += gapLength) {
        if (root != S.substring(i, i + gapLength)) {
          res = 'NO SOLUTION';
          break;
        }
        res = root;
      }
    }
  }

  Swal.fire({
    title: 'task14',
    html: res,
  });
});
