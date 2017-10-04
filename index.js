function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  const start = document.querySelectorAll('#grand-node div');
  const deepest = start.children[0];

  for (var i = 0; !deepest.children[i]; i ) {
    deepest = deepest.children[0];
  }

   return deepest; 
}
