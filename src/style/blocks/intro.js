function introScrolling() {
  const intro = document.querySelector('.intro')
  intro.style.backgroundColor = `rgb(${24 + pageYOffset * 104.0 / 500.0},${24 + pageYOffset * 65.0 / 500.0},${24 + pageYOffset * 18.0 / 500.0})`
}
