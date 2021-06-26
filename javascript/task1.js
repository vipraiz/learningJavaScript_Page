$('.task1-inputs')
  .children()
  .children()
  .on('change', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('.task1-btn').on('click', function () {
  let min = Number($('#task1-minInput').val()),
    max = Number($('#task1-maxInput').val());
  if (min > max) {
    Swal.fire({
      icon: 'error',
      title: 'task1',
      html: 'Значение MIN не может быть больше значения MAX',
    });
    return;
  }
  startGame(min, max);

  function startGame(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let attemptСounter = 0;
    ask();

    function askAgain(result) {
      if (result.isConfirmed) {
        ++attemptСounter;
        if (result.value == randomNumber) {
          if (attemptСounter == 1)
            Swal.fire({
              icon: 'success',
              title: 'task1',
              html: 'Ничего себе! Ты угадал с первой pop-itки.',
            });
          else
            Swal.fire({
              icon: 'success',
              title: 'task1',
              html: 'Вы победили! Количество попыток: ' + attemptСounter,
            });
          return true;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'task1',
            html:
              `Вы ввели число: ${result.value} <br>` +
              'Неверно! Число должно быть ' +
              (result.value > randomNumber ? 'меньше.' : 'больше.'),
            inputLabel: 'Введите число от ' + min + ' до ' + max,
            input: 'number',
            inputValidator: (value) => {
              if (!value) {
                return 'Ну же! Хотя бы попытайся!';
              }
              if (value < min || value > max) {
                return 'Необходимо ввести число от ' + min + ' до ' + max;
              }
            },
            showCancelButton: true,
            cancelButtonText: 'Отмена',
          }).then((result) => {
            askAgain(result);
          });
        }
      } else if (result.isDenied) {
        return false;
      }
    }

    function ask() {
      Swal.fire({
        title: 'task1',
        inputLabel: 'Введите число от ' + min + ' до ' + max,
        input: 'number',
        inputValidator: (value) => {
          if (!value) {
            return 'Ну же! Хотя бы попытайся!';
          }
          if (value < min || value > max) {
            return 'Необходимо ввести число от ' + min + ' до ' + max;
          }
        },
        showCancelButton: true,
        cancelButtonText: 'Отмена',
      }).then((result) => {
        askAgain(result);
      });
    }
  }
});
