$('.task10-btn').on('click', function () {
  Swal.fire({
    title: 'task10',
    html: 'Введите программу для робота:<br><br>S (шаг вперед)<br>L (поворот влево)<br>R (поворот вправо)',
    input: 'text',
    inputValidator: (value) => {
      value = value.toUpperCase();
      for (let character of value) {
        if (character != 'S' && character != 'L' && character != 'R')
          return 'Программа задана неверно';
      }
    },
  }).then((result) => {
    let value = result.value.toUpperCase();
    let pairs = ['0 0'];
    let step = 0,
      x = 0,
      y = 0,
      direction = 0;

    for (let character of value) {
      if (character == 'R') direction = (direction + 1) % 4;
      else if (character == 'L') direction = (direction + 3) % 4;
      else {
        if (direction == 0) ++y;
        else if (direction == 1) ++x;
        else if (direction == 2) --y;
        else --x;
        ++step;
      }
      if (character == 'S') {
        if (pairs.includes(x + ' ' + y)) {
          Swal.fire({
            icon: 'success',
            title: 'task10',
            html: step,
          });
          return;
        }
        pairs.push(x + ' ' + y);
      }
    }
    Swal.fire({
      icon: 'error',
      title: 'task10',
      html: 'Робот не вернётся на то место, где он уже побывал.',
    });
  });
});
