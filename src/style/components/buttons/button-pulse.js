document.querySelectorAll('.button-pulse').forEach(item => {
  item.onmouseover = function() {
    this.style.animation = 'hover-animation 0.25s linear'
  }
  item.onmouseout = function() {
    this.style.animation = 'hover-animation 0.25s linear'
  }
  item.onanimationend = function() {
    this.style.removeProperty('animation')
  }
})
