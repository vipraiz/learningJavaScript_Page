$('.task13-inputs')
  .children()
  .children()
  .on('change', function () {
    $(this).val((_i, v) => Math.max(this.min, Math.min(this.max, v)));
    const inputN = document.getElementById('task13-n');
    inputN.setAttribute('max', $('#task13-x').val() * $('#task13-y').val() - 1);

    $('#task13-n').val((_i, v) =>
      Math.max(
        $('#task13-n').attr('min'),
        Math.min($('#task13-n').attr('max'), v)
      )
    );
  });

$('.task13-btn').on('click', function () {
  (X = Number($('#task13-x').val())),
    (Y = Number($('#task13-y').val())),
    (N = Number($('#task13-n').val()));

  startGame(X, Y, N);

  const w = $('.swal2-html-container').width();

  $('.minesweeper-field')
    .css('width', 'fit-content')
    .css('margin', '0 auto')
    .css('display', 'grid')
    .css('grid-template-columns', `repeat(${X}, ${w / X}px)`);

  $('.minesweeper-btn')
    .css('color', '#433c47')
    .css('height', `${w / X}px`)
    .css('font-size', `${w / 2 / X}px`);

  function startGame(width, height, numOfBombs) {
    Swal.fire({
      title: 'task13',
      html: `<div class="minesweeper">Неизвестных мин: ${numOfBombs}<div class="minesweeper-field"></div></div>`,
    });

    const field = document.querySelector('.minesweeper-field');
    const cellsCount = width * height;
    field.innerHTML = '<button class="minesweeper-btn"></buttton>'.repeat(
      cellsCount
    );
    const cells = [...field.children];

    let closedCount = cellsCount;
    let bombs,
      flags = [];

    let isFirstClick = true;
    field.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      const index = cells.indexOf(event.target);

      if (isFirstClick) {
        bombs = [...Array(cellsCount).keys()];
        bombs.splice(index, 1);
        bombs = bombs.sort(() => Math.random() - 0.5).slice(0, numOfBombs);
        isFirstClick = false;
      }

      const row = Math.floor(index / width);
      const column = index % width;
      open(row, column, true);
    });

    $('.minesweeper-field').bind('contextmenu', (event) => {
      if (event.target.tagName !== 'BUTTON' || isFirstClick) {
        return false;
      }

      const index = cells.indexOf(event.target);
      if (flags.includes(index)) {
        cells[index].innerHTML = '';
        let i = flags.indexOf(index);
        flags.splice(i, 1);
      } else {
        if (cells[index].innerHTML !== '') return false;

        cells[index].innerHTML = '❗';
        flags.push(index);

        if (flags.length === numOfBombs) {
          $('.minesweeper').contents()[0].nodeValue = `Неизвестных мин: ${
            numOfBombs - flags.length
          }`;
          for (let i = 0; i < flags.length; i++) {
            if (!bombs.includes(flags[i])) return false;
          }
          openAllCells();
          $('.minesweeper').contents()[0].nodeValue = 'Вы победили!';
          return false;
        }
      }
      $('.minesweeper').contents()[0].nodeValue = `Неизвестных мин: ${
        numOfBombs - flags.length
      }`;
      return false;
    });

    function isValid(row, column) {
      return row >= 0 && row < height && column >= 0 && column < width;
    }

    function getNearBombsCount(row, column) {
      let count = 0;
      for (let x = -1; x <= 1; ++x) {
        for (let y = -1; y <= 1; ++y) {
          if (isBomb(row + y, column + x)) ++count;
        }
      }
      return count;
    }

    function open(row, column, shifted = false) {
      if (!isValid(row, column)) return;

      const index = row * width + column;
      const cell = cells[index];

      if (shifted && flags.includes(index)) return;
      if (!shifted && cell.innerHTML != '') return;
      if (cell.disabled === true) return;

      if (isBomb(row, column)) {
        cell.disabled = true;
        openAllCells();
        $('.minesweeper').contents()[0].nodeValue = 'Упс! Вы проиграли!';
      } else {
        if (shifted && cell.innerHTML != '') {
          let numOfFlags = 0;
          for (let x = -1; x <= 1; ++x) {
            for (let y = -1; y <= 1; ++y) {
              if (
                isValid(row + y, column + x) &&
                flags.includes((row + y) * width + column + x)
              ) {
                numOfFlags++;
              }
            }
          }
          if (numOfFlags == Number(cell.innerHTML))
            for (let x = -1; x <= 1; ++x) {
              for (let y = -1; y <= 1; ++y) {
                open(row + y, column + x);
              }
            }
          return;
        }

        closedCount--;
        if (closedCount <= numOfBombs) {
          openAllCells();
          $('.minesweeper').contents()[0].nodeValue = 'Вы победили!';
        }
        const count = getNearBombsCount(row, column);
        if (count !== 0) {
          $(cell).css('background-color', '#e6e6f0');
          cell.innerHTML = count;
          return;
        } else {
          cell.disabled = true;
          cell.innerHTML = '';
        }

        for (let x = -1; x <= 1; ++x) {
          for (let y = -1; y <= 1; ++y) {
            open(row + y, column + x);
          }
        }
      }
    }

    function openAllCells() {
      bombs.forEach((index) => {
        if (cells[index].disabled) {
          cells[index].innerHTML = '💥';
        } else {
          cells[index].innerHTML = '💣';
        }
      });

      let count, index;
      for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
          index = x * width + y;
          if (bombs.includes(index)) continue;

          count = getNearBombsCount(x, y);
          if (count !== 0) {
            cells[index].innerHTML = count;
          } else {
            cells[index].innerHTML = '';
          }
          cells[index].disabled = true;
        }
      }
      cells.forEach((element) => {
        element.disabled = true;
      });
    }

    function isBomb(row, column) {
      if (!isValid(row, column)) return false;

      const index = row * width + column;
      return bombs.includes(index);
    }
  }
});
