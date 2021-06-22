const modalLetter = document.querySelector('.modal-letter');
const modalMap = document.querySelector('.modal-map');

const letterButton = document.querySelector('.info-form-link');
const mapButton = document.querySelector('.map-link');

const modalCloseButton = document.querySelectorAll('.modal-close');

letterButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalLetter.style.display = 'block';
});
mapButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalMap.style.display = 'block';
});
modalCloseButton.forEach((item => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalLetter.style.display = 'none';
    modalMap.style.display = 'none';
  });
}));
