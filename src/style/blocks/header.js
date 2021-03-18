const header = document.querySelector('.header')
let headerState1, headerState2
function headerScroll() {
  if (pageYOffset > 500) {
    header.classList.add('header__background')
    headerState1 = true
  } else {
    if (header.classList.contains('header__background') && !headerState2) {
      header.classList.remove('header__background')
    }
    headerState1 = false
  }
}

function headerResize() {
  if (window.matchMedia("(max-width: 900px)").matches) {
    if (!header.classList.contains('header__background')) {
      header.classList.add('header__background')
    }
    headerState2 = true
  } else {
    if (header.classList.contains('header__background') && !headerState1) {
      header.classList.remove('header__background')
    }
    headerState2 = false
  }
}
