let A, B, C;
let string;

const permutator = (inputArr) => {
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      let X = 0,
        l = m.length - 1;

      m.forEach((element) => {
        X += element * Math.pow(10, l--);
      });

      let Y = C - X;
      let D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // под каждую цифру

      let cloneY = Y;
      while (cloneY > 0) {
        ++D[cloneY % 10];
        cloneY = Math.floor(cloneY / 10);
      }

      let cloneB = B;
      while (cloneB > 0) {
        --D[cloneB % 10];
        cloneB = Math.floor(cloneB / 10);
      }

      let i = 0;
      for (; i < 10; ++i) {
        if (D[i] != 0) break;
      }

      if (i == 10) {
        string = 'Такая перестановка цифр возможна. ' + `(${X} + ${Y} = ${C})`;
        return true;
      }
      return false;
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        if (permute(curr.slice(), m.concat(next))) return true;
      }
    }
  };

  if (permute(inputArr)) return true;
};

$('.task6-inputs')
  .children()
  .children()
  .on('input', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

$('.task6-btn').on('click', function () {
  (A = Number($('#task6-a').val())),
    (B = Number($('#task6-b').val())),
    (C = Number($('#task6-c').val()));
  string = 'Такая перестановка цифр не возможна.';

  let Ar = [];
  while (A > 0) {
    Ar.push(A % 10);
    A = Math.floor(A / 10);
  }

  permutator(Ar.sort());
  alert(string);
});
