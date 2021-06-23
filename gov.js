function startGame() {
  const MIN = 1,
    MAX = 10;

  let randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  let userChoise;
  let attemptСounter = 0;

  while (true) {
    userChoise = prompt('Введите число от ' + MIN + ' до ' + MAX);
    if (userChoise == null) return false;

    if (isNaN(userChoise) || userChoise < MIN || userChoise > MAX) {
      alert('Необходимо ввести число от ' + MIN + ' до ' + MAX);
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

while (startGame() && confirm('Сыграем ещё раз?'));
