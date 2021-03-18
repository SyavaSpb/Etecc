function latestScrolling() {
  if (pageYOffset > 800) {
    const latestFirstItem = document.querySelector('.latest__item-first-deactive')
    if (latestFirstItem) {
      latestFirstItem.classList.remove('latest__item-first-deactive')
    }
    const latestSecondItem = document.querySelector('.latest__item-second-deactive')
    if (latestSecondItem) {
      latestSecondItem.classList.remove('latest__item-second-deactive')
    }
  }
}
