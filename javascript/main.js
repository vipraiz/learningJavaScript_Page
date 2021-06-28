let askending, activePage;
{
  let shownTasks = 5;

  let pages = Math.ceil($('.tasks').children().length / shownTasks);
  let pagination = $('.pagination');
  pagination.append;
  for (let i = 1; i <= pages; ++i) {
    pagination.append(
      $(
        `<li class="pagination-page"><a href="#" draggable="false">${i}</a></li>`
      )
    );
  }
  pagination.append(
    '<li class="right-page"><a href="#" draggable="false">&raquo;</a></li>'
  );

  try {
    if (
      localStorage.getItem('sortAskending') == '' ||
      localStorage.getItem('sortAskending') == null
    )
      askending = true;
    else {
      askending =
        localStorage.getItem('sortAskending') == 'true' ? true : false;
    }
    if (
      localStorage.getItem('activePage') == '' ||
      localStorage.getItem('activePage') == null
    )
      activePage = 1;
    else {
      activePage = Number(localStorage.getItem('activePage'));
    }
  } catch {}

  document.getElementById('stateInput').checked = askending;
  $('.pagination').children().eq(activePage).children().addClass('active');
  mySort();

  // function mySort() {
  //   let aa = document.querySelector('.tasks');

  //   if (askending) {
  //     for (let i = 0; i < aa.children.length; ++i)
  //       for (let j = i; j < aa.children.length; ++j) {
  //         if (
  //           +aa.children[i].getAttribute('sort-rating') <
  //           +aa.children[j].getAttribute('sort-rating')
  //         ) {
  //           let replaceNode = aa.replaceChild(aa.children[j], aa.children[i]);
  //           insertAfter(replaceNode, aa.children[i]);
  //         }
  //       }
  //   } else {
  //     for (let i = 0; i < aa.children.length; ++i)
  //       for (let j = i; j < aa.children.length; ++j) {
  //         if (
  //           +aa.children[i].getAttribute('sort-rating') >
  //           +aa.children[j].getAttribute('sort-rating')
  //         ) {
  //           let replaceNode = aa.replaceChild(aa.children[j], aa.children[i]);
  //           insertAfter(replaceNode, aa.children[i]);
  //         }
  //       }
  //   }

  //   function insertAfter(elem, refElem) {
  //     return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  //   }
  // }

  function mySort() {
    $('.tasks').css('flex-direction', askending ? 'column' : 'column-reverse');
    showTasks();

    function showTasks() {
      let tasks = $('.tasks');
      tasks.children().css('display', 'none');

      let pagin = $('.pagination');

      for (let i = 1; i < pagin.children().length - 1; ++i) {
        if (pagin.children().children().eq(i).hasClass('active')) {
          activePage = i - 1;
          localStorage.setItem('activePage', activePage + 1);
          break;
        }
      }

      if (activePage == 0) {
        $('.left-page').addClass('disabled-page');
      } else {
        $('.left-page').removeClass('disabled-page');
      }

      if (activePage == $('.pagination').children().length - 3) {
        $('.right-page').addClass('disabled-page');
      } else {
        $('.right-page').removeClass('disabled-page');
      }

      for (let i = 0; i < shownTasks; ++i) {
        if (
          !askending &&
          tasks.children().length - i - activePage * shownTasks - 1 < 0
        )
          break;
        tasks
          .children()
          .eq(
            askending
              ? i + activePage * shownTasks
              : tasks.children().length - i - activePage * shownTasks - 1
          )
          .css('display', 'block');
      }
    }
  }
}

$('.sort').on('click', function () {
  askending = !askending;
  document.getElementById('stateInput').checked = askending;
  localStorage.setItem('sortAskending', String(askending));
  mySort();
});

$('.pagination')
  .children()
  .on('click', function () {
    if (
      $(this).hasClass('pagination-page') &&
      !$(this).children().hasClass('active')
    ) {
      $('.pagination')
        .children()
        .eq(activePage + 1)
        .children()
        .removeClass('active');
      $(this).children().addClass('active');
    }
    mySort();
  });

$('.left-page').on('click', function () {
  $('.pagination')
    .children()
    .eq(activePage + 1)
    .children()
    .removeClass('active');
  $('.pagination').children().eq(1).children().addClass('active');
  mySort();
});

$('.right-page').on('click', function () {
  $('.pagination')
    .children()
    .eq(activePage + 1)
    .children()
    .removeClass('active');
  $('.pagination')
    .children()
    .eq($('.pagination').children().length - 2)
    .children()
    .addClass('active');
  mySort();
});
