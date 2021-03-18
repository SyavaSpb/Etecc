const body = document.querySelector('body');
const fadingLoad = function () {
  body.classList.remove('fading__null')
  body.classList.add('fading__unit')
  body.ontransitionend = function() {
    body.classList.remove('fading__unit')
  }
}

const links = document.querySelectorAll('a')
links.forEach(link => {
  link.onclick = function() {
    event.preventDefault()
    body.classList.add('fading__null')
    body.ontransitionend = function() {
      window.location = link.href
    }
  }
})
