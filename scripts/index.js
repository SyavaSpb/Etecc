/* fading in */
// const body = document.querySelector('body');
// body.onload = function () {
//   body.classList.remove('fading__null')
//   body.classList.add('fading__unit')
//   body.ontransitionend = function() {
//     body.classList.remove('fading__unit')
//   }
// }

/* fading out */
// const links = document.querySelectorAll('a')
// links.forEach(link => {
//   link.onclick = function() {
//     event.preventDefault()
//     body.classList.add('fading__null')
//     body.ontransitionend = function() {
//       window.location = link.href
//     }
//   }
// })


/* button anim */
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
  const buttonBack = button.querySelector('.button__back')
  button.onmouseover = function() {
    const x = event.clientX - button.getBoundingClientRect().x
    const y = event.clientY - button.getBoundingClientRect().y
    buttonBack.style.left = `${x}px`
    buttonBack.style.top = `${y}px`
    if (buttonBack.classList.contains('button__back__out')) {
      buttonBack.classList.remove('button__back__out')
    }
    buttonBack.classList.add('button__back__in')
  }
  button.onmouseout = function() {
    const buttonBack = button.querySelector('.button__back')
    const x = event.clientX - button.getBoundingClientRect().x
    const y = event.clientY - button.getBoundingClientRect().y
    buttonBack.style.left = `${x}px`
    buttonBack.style.top = `${y}px`
    if (buttonBack.classList.contains('button__back__in')) {
      buttonBack.classList.remove('button__back__in')
    }
    buttonBack.classList.add('button__back__out')
  }
})


/* main button */
const mainBottun = document.querySelector('.to__main__page')
mainBottun.querySelector('img').onmouseover = function() {
  this.style.animation = 'hover-animation 0.25s linear'
}
mainBottun.querySelector('img').onmouseout = function() {
  this.style.animation = 'hover-animation 0.25s linear'
}
mainBottun.querySelector('img').onanimationend = function() {
  this.style.removeProperty('animation')
}

/* menu button */
const menuBottun = document.querySelector('.to__menu')
menuBottun.onmouseover = function() {
  this.style.animation = 'hover-animation 0.25s linear'
  const menuBorder = document.querySelector('.to__menu__icon__border')
  menuBorder.classList.add('to__menu__icon__border__active')
  const menuText = document.querySelector('.to__menu__icon__text')
  menuText.classList.add('to__menu__icon__text__active')
}
menuBottun.onmouseout = function() {
  this.style.animation = 'hover-animation 0.25s linear'
  const menuBorder = document.querySelector('.to__menu__icon__border')
  menuBorder.classList.remove('to__menu__icon__border__active')
  const menuText = document.querySelector('.to__menu__icon__text')
  menuText.classList.remove('to__menu__icon__text__active')
}
menuBottun.onanimationend = function() {
  this.style.removeProperty('animation')
}

menuBottun.onclick = function() {
  const text = document.querySelector('.to__menu__icon__text')
  const topDash = document.querySelector('.top__dash')
  topDash.style.animation = 'anim-top-dash 0.3s linear'
  const middleDash = document.querySelector('.middle__dash')
  middleDash.style.animation = 'anim-middle-dash 0.3s linear'
  const bottomDash = document.querySelector('.bottom__dash')
  bottomDash.style.animation = 'anim-bottom-dash 0.3s linear'
  if (text.innerHTML === 'menu') {
    this.classList.add('to__menu__active')
    const back = this.querySelector('.to__menu__icon__back')
    back.classList.add('to__menu__icon__back__active')
    back.ontransitionend = function() {
      const menu = document.querySelector('.menu')
      menu.classList.add('menu__active')
      this.ontransitionend = function() {}
    }
    text.innerHTML = "close"
  } else {
    this.classList.remove('to__menu__active')
    topDash.style.animationDirection = 'reverse'
    middleDash.style.animationDirection = 'reverse'
    bottomDash.style.animationDirection = 'reverse'

    const menu = document.querySelector('.menu')
    menu.classList.remove('menu__active')
    menu.ontransitionend = function() {
      const back = document.querySelector('.to__menu__icon__back')
      back.classList.remove('to__menu__icon__back__active')
      this.ontransitionend = function() {}
    }
    text.innerHTML = "menu"
  }
  topDash.onanimationend = function() {
    if (this.classList.contains('top__dash__close')) {
      this.classList.remove('top__dash__close')
    } else {
      this.classList.add('top__dash__close')
    }
    this.style.removeProperty('animation')
  }
  middleDash.onanimationend = function() {
    if (this.classList.contains('middle__dash__close')) {
      this.classList.remove('middle__dash__close')
    } else {
      this.classList.add('middle__dash__close')
    }
    this.style.removeProperty('animation')
  }
  bottomDash.onanimationend = function() {
    if (this.classList.contains('bottom__dash__close')) {
      this.classList.remove('bottom__dash__close')
    } else {
      this.classList.add('bottom__dash__close')
    }
    this.style.removeProperty('animation')
  }
}

/* modal menu buttons */
const inMenuButtons = document.querySelectorAll('.menu__button')
inMenuButtons.forEach(inMenuButton => {
  inMenuButton.onmouseover = function() {
    const inMenuButtons = document.querySelectorAll('.menu__button')
    inMenuButtons.forEach(inMenuButton => {
      if (!inMenuButton.classList.contains('menu__button__unhover')) {
        inMenuButton.classList.add('menu__button__unhover')
      }
    })
    if (!this.classList.contains('menu__button__hover')) {
      this.classList.add('menu__button__hover')
    }
  }
  inMenuButton.onmouseout = function() {
    const inMenuButtons = document.querySelectorAll('.menu__button')
    inMenuButtons.forEach(inMenuButton => {
      if (inMenuButton.classList.contains('menu__button__unhover')) {
        inMenuButton.classList.remove('menu__button__unhover')
      }
    })
    if (this.classList.contains('menu__button__hover')) {
      this.classList.remove('menu__button__hover')
    }
  }
})


/* scroll */
window.onscroll = function() {
  header = document.querySelector('.header')
  if (pageYOffset > 500) {
    header.classList.add('header__background')
  } else if (header.classList.contains('header__background')) {
    header.classList.remove('header__background')
  }
  if (pageYOffset > 800) {
    const latestFirstItem = document.querySelector('.latest__item__deactive__first')
    if (latestFirstItem) {
      latestFirstItem.classList.remove('latest__item__deactive__first')
    }
    const latestSecondItem = document.querySelector('.latest__item__deactive__second')
    if (latestSecondItem) {
      latestSecondItem.classList.remove('latest__item__deactive__second')
    }
  }

  intro = document.querySelector('.intro')
  intro.style.backgroundColor = `rgb(${24 + pageYOffset * 104.0 / 500.0},${24 + pageYOffset * 65.0 / 500.0},${24 + pageYOffset * 18.0 / 500.0})`
}
