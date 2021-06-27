const modalLetter = document.querySelector('.modal-letter');
const modalMap = document.querySelector('.modal-map');
const letterButton = document.querySelector('.info-form-link');
const mapButton = document.querySelector('.map-link');

const modalCloseButton = document.querySelectorAll('.modal-close');
const letterForm = modalLetter.querySelector(".letter-form");
const nameInput = modalLetter.querySelector(".letter-input-name");
const emailInput = modalLetter.querySelector(".letter-input-email");

const paginationList = document.querySelectorAll('.pagination-link');
const linkHref = [
  '#slide1',
  '#slide2',
  '#slide3'
];

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

letterButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	modalLetter.style.display = 'block';
  modalLetter.style.animation = 'bounce 600ms';
  if (storage) {
    nameInput.value = storage;
    emailInput.focus();
  } else {
  nameInput.focus();
  }
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
    modalLetter.classList.remove('modal-error');
	});
}));

letterForm.addEventListener("submit", function (evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    modalLetter.classList.remove('modal-error');
    modalLetter.offsetWidth = modalLetter.offsetWidth;
    modalLetter.classList.add('modal-error');
  } else if (isStorageSupport) {
    localStorage.setItem('name', nameInput.value);
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Escape') {
    if (modalLetter.style.display = 'block') {
      evt.preventDefault();
      modalLetter.style.display = 'none';
      modalLetter.classList.remove('modal-error');
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Escape') {
    if (modalMap.style.display = 'block') {
      evt.preventDefault();
      modalMap.style.display = 'none';
    }
  }
});

paginationList.forEach((item, index)=>{
  item.addEventListener('click', () => {
    item.href = linkHref[index];
    item.classList.toggle('pagination-link-active');
  });
});
