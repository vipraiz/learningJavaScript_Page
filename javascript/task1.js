function startGame(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  let userChoise;
  let attemptСounter = 0;

  while (true) {
    userChoise = prompt('Введите число от ' + min + ' до ' + max);
    if (userChoise == null) return false;

    if (isNaN(userChoise) || userChoise < min || userChoise > max) {
      alert('Необходимо ввести число от ' + min + ' до ' + max);
      continue;
    }

    ++attemptСounter;
    if (userChoise == randomNumber) {
      if (attemptСounter == 1)
        alert('Ты ебучая Ванга! Угадал с первой pop-itки');
      else alert('Вы победили! Количество попыток: ' + attemptСounter);
      return true;
    } else {
      alert(
        'Неверно. Число должно быть ' +
          (userChoise > randomNumber ? 'меньше' : 'больше')
      );
    }
  }
}

$('.task1-inputs')
  .children()
  .on('input', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('.task1-btn').on('click', function () {
  let min = Number($('#task1-minInput').val()),
    max = Number($('#task1-maxInput').val());
  if (min > max) {
    alert('Значение левой границы не может быть больше правой!');
    return;
  }
  while (startGame(min, max) && confirm('Сыграем ещё раз?'));
});
