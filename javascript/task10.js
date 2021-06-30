$('.task10-btn').on('click', function () {
  Swal.fire({
    title: 'task10',
    html: 'Введите программу для робота:<br><br>S (шаг вперед)<br>L (поворот влево)<br>R (поворот вправо)',
    input: 'text',
    inputValidator: (value) => {
      if (value == '') return 'Программа задана неверно!';
      value = value.toUpperCase();
      for (let character of value) {
        if (character != 'S' && character != 'L' && character != 'R')
          return 'Программа задана неверно!';
      }
    },
    showCancelButton: true,
    cancelButtonText: 'Отмена',
  }).then((result) => {
    if (!result.isConfirmed) return;
    let value = result.value.toUpperCase();
    let coords = ['0 0'];
    let step = 0,
      x = 0,
      y = 0,
      direction = 0; // 0 - направление вверх, 1 - вправо, 2 - вниз, 3 - влево

    for (let character of value) {
      if (character == 'R') direction = (direction + 1) % 4;
      else if (character == 'L') direction = (direction + 3) % 4;
      else {
        ++step;
        if (direction == 0) ++y;
        else if (direction == 1) ++x;
        else if (direction == 2) --y;
        else --x;

        if (coords.includes(x + ' ' + y)) {
          Swal.fire({
            icon: 'success',
            title: 'task10',
            html: `Заданная программа: ${value}<br> Количество шагов: ${step}`,
          });
          return;
        }
        coords.push(x + ' ' + y);
      }
    }
    Swal.fire({
      icon: 'error',
      title: 'task10',
      html: 'Робот не вернётся на то место, где он уже побывал.',
    });
  });
});
