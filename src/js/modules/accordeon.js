const accordeonItems = document.querySelectorAll('.js-accordeon');

if(accordeonItems.length) {
  console.log('123')
  accordeonItems.forEach((item) => {
    const accordeonItemBtn = item.querySelector('.js-accordeon-toggle');
    const accordeonItemBody = item.querySelector('.js-accordeon-body');

    accordeonItemBtn.addEventListener('click', (e) => {
      e.preventDefault();
      item.classList.toggle('is-active');
      accordeonItemBody.classList.toggle('is-open');
    })
  })
}