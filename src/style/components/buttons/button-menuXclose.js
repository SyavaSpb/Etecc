const menuBottun = document.querySelector('.button-menuXclose')
menuBottun.onmouseover = function() {
  this.style.animation = 'hover-animation 0.25s linear'
  const menuBorder = document.querySelector('.button-menuXclose__border')
  menuBorder.classList.add('button-menuXclose__border-active')
  const menuText = document.querySelector('.button-menuXclose__text')
  menuText.classList.add('button-menuXclose__text-active')
}
menuBottun.onmouseout = function() {
  this.style.animation = 'hover-animation 0.25s linear'
  const menuBorder = document.querySelector('.button-menuXclose__border')
  menuBorder.classList.remove('button-menuXclose__border-active')
  const menuText = document.querySelector('.button-menuXclose__text')
  menuText.classList.remove('button-menuXclose__text-active')
}
menuBottun.onanimationend = function() {
  this.style.removeProperty('animation')
}

menuBottun.onclick = function() {
  const text = document.querySelector('.button-menuXclose__text')
  const topDash = document.querySelector('.button-menuXclose__dash-top')
  topDash.style.animation = 'anim-dash-top 0.3s linear'
  const middleDash = document.querySelector('.button-menuXclose__dash-middle')
  middleDash.style.animation = 'anim-dash-middle 0.3s linear'
  const bottomDash = document.querySelector('.button-menuXclose__dash-bottom')
  bottomDash.style.animation = 'anim-dash-bottom 0.3s linear'
  if (text.innerHTML === 'menu') {
    // this.classList.add('to__menu__active')
    const back = this.querySelector('.button-menuXclose__back')
    back.classList.add('button-menuXclose__back-active')
    back.ontransitionend = function() {
      const menu = document.querySelector('.menu')
      menu.classList.add('menu-active')
      this.ontransitionend = function() {}
    }
    text.innerHTML = "close"
  } else {
    // this.classList.remove('to__menu__active')
    topDash.style.animationDirection = 'reverse'
    middleDash.style.animationDirection = 'reverse'
    bottomDash.style.animationDirection = 'reverse'

    const menu = document.querySelector('.menu')
    menu.classList.remove('menu-active')
    menu.ontransitionend = function() {
      const back = document.querySelector('.button-menuXclose__back')
      back.classList.remove('button-menuXclose__back-active')
      this.ontransitionend = function() {}
    }
    text.innerHTML = "menu"
  }
  topDash.onanimationend = function() {
    if (this.classList.contains('button-menuXclose__dash-top-close')) {
      this.classList.remove('button-menuXclose__dash-top-close')
    } else {
      this.classList.add('button-menuXclose__dash-top-close')
    }
    this.style.removeProperty('animation')
  }
  middleDash.onanimationend = function() {
    if (this.classList.contains('button-menuXclose__dash-middle-close')) {
      this.classList.remove('button-menuXclose__dash-middle-close')
    } else {
      this.classList.add('button-menuXclose__dash-middle-close')
    }
    this.style.removeProperty('animation')
  }
  bottomDash.onanimationend = function() {
    if (this.classList.contains('button-menuXclose__dash-bottom-close')) {
      this.classList.remove('button-menuXclose__dash-bottom-close')
    } else {
      this.classList.add('button-menuXclose__dash-bottom-close')
    }
    this.style.removeProperty('animation')
  }
}
