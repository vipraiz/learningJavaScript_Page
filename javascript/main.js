let askending = false;

function mySort() {
  let aa = document.querySelector('.tasks');

  if (askending) {
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
  } else {
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
  }
  askending = !askending;

  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }
}

$('.sort').on('click', function () {
  document.getElementById('stateInput').checked =
    !document.getElementById('stateInput').checked;
  mySort();
});

mySort();
