const inMenuButtons = document.querySelectorAll('.menu__button')
inMenuButtons.forEach(inMenuButton => {
  inMenuButton.onmouseover = function() {
    console.log('ok');
    const inMenuButtons = document.querySelectorAll('.menu__button')
    inMenuButtons.forEach(inMenuButton => {
      if (!inMenuButton.classList.contains('menu__button-unhover')) {
        inMenuButton.classList.add('menu__button-unhover')
      }
    })
    if (!this.classList.contains('menu__button-hover')) {
      this.classList.add('menu__button-hover')
    }
  }
  inMenuButton.onmouseout = function() {
    const inMenuButtons = document.querySelectorAll('.menu__button')
    inMenuButtons.forEach(inMenuButton => {
      if (inMenuButton.classList.contains('menu__button-unhover')) {
        inMenuButton.classList.remove('menu__button-unhover')
      }
    })
    if (this.classList.contains('menu__button-hover')) {
      this.classList.remove('menu__button-hover')
    }
  }
})
