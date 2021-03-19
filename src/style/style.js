@@include('./fading.js')
@@include('./components/buttons/button-standart.js')
@@include('./components/buttons/button-pulse.js')
@@include('./components/buttons/button-menuXclose.js')

@@include('./blocks/header.js')
@@include('./blocks/menu.js')
@@include('./blocks/intro.js')
@@include('./blocks/latest.js')

window.onload = function() {
  fadingLoad()
  headerResize()
}

window.onresize = function() {
  headerResize()
}

window.onscroll = function() {
  latestScrolling()
  introScrolling()
  headerScroll()
}
