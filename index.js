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
  const divs = document.querySelectorAll('#grand-node div');
  const deepest = divs.children[0];

  for (var i = 0; i < divs.length; i++ ) {
    deepest = deepest[i]; 
  }

   return deepest;
}
