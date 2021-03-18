const buttons = document.querySelectorAll('.button-standart')
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
