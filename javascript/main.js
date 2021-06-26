let askending;
try {
  askending = localStorage.getItem('sortAskending') == 'true' ? true : false;
} catch {}
document.getElementById('stateInput').checked = askending;
mySort();

function mySort() {
  let aa = document.querySelector('.tasks');

  if (askending) {
    for (let i = 0; i < aa.children.length; ++i)
      for (let j = i; j < aa.children.length; ++j) {
        if (
          +aa.children[i].getAttribute('sort-rating') <
          +aa.children[j].getAttribute('sort-rating')
        ) {
          let replaceNode = aa.replaceChild(aa.children[j], aa.children[i]);
          insertAfter(replaceNode, aa.children[i]);
        }
      }
  } else {
    for (let i = 0; i < aa.children.length; ++i)
      for (let j = i; j < aa.children.length; ++j) {
        if (
          +aa.children[i].getAttribute('sort-rating') >
          +aa.children[j].getAttribute('sort-rating')
        ) {
          let replaceNode = aa.replaceChild(aa.children[j], aa.children[i]);
          insertAfter(replaceNode, aa.children[i]);
        }
      }
  }

  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }
}

$('.sort').on('click', function () {
  askending = !askending;
  document.getElementById('stateInput').checked = askending;
  localStorage.setItem('sortAskending', String(askending));
  mySort();
});
