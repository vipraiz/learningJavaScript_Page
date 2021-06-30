$('.task11-btn').on('click', function () {
  let A, B;
  (A = Number($('#task11-a').val())), (B = Number($('#task11-b').val()));
  let posA = A > 0,
    posB = B > 0;
  A = Math.abs(A);
  B = Math.abs(B);

  let arrayA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    arrayB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let newA = A,
    newB = B;
  while (newA > 0) {
    ++arrayA[newA % 10];
    newA = Math.floor(newA / 10);
  }

  while (newB > 0) {
    ++arrayB[newB % 10];
    newB = Math.floor(newB / 10);
  }

  if (posA) {
    for (let i = 9; i >= 0; --i) {
      while (arrayA[i] > 0) {
        newA = newA * 10 + i;
        --arrayA[i];
      }
    }
  } else {
    for (let i = 1; i < 10; ++i) {
      while (arrayA[i] > 0) {
        newA = newA * 10 + i;
        --arrayA[i];
        while (arrayA[0] > 0) {
          newA *= 10;
          --arrayA[0];
        }
      }
    }
    newA *= -1;
  }

  if (posB) {
    for (let i = 1; i < 10; ++i) {
      while (arrayB[i] > 0) {
        newB = newB * 10 + i;
        --arrayB[i];
        while (arrayB[0] > 0) {
          newB *= 10;
          --arrayB[0];
        }
      }
    }
  } else {
    for (let i = 9; i >= 0; --i) {
      while (arrayB[i] > 0) {
        newB = newB * 10 + i;
        --arrayB[i];
      }
    }
    newB *= -1;
  }

  Swal.fire({
    title: 'task11',
    html: `A = ${A} => ${newA}<br>B = ${B} => ${newB}<br><br>${newA} ${
      newB >= 0 ? `- ${newB}` : `- (${newB})`
    } = ${newA - newB} руб.`,
  });
});
