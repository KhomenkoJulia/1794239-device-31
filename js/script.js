const modalLetter = document.querySelector('.modal-letter');
const modalMap = document.querySelector('.modal-map');
const letterButton = document.querySelector('.info-form-link');
const mapButton = document.querySelector('.map-link');

const modalCloseButton = document.querySelectorAll('.modal-close');
const letterForm = modalLetter.querySelector('.letter-form');
const nameInput = modalLetter.querySelector('.letter-input-name');
const emailInput = modalLetter.querySelector('.letter-input-email');

const linkHref = [
  '#slide1',
  '#slide2',
  '#slide3'
];

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

letterButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalLetter.style.display = 'block';
  modalLetter.classList.add('modal-show');
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
  modalMap.classList.add('modal-show');
});

modalCloseButton.forEach((item => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalLetter.style.display = 'none';
    modalMap.style.display = 'none';
    modalLetter.classList.remove('modal-error');
  });
}));

letterForm.addEventListener('submit', function (evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    modalLetter.classList.remove('modal-error');
    modalLetter.offsetWidth = modalLetter.offsetWidth;
    modalLetter.classList.add('modal-error');
  } else if (isStorageSupport) {
    localStorage.setItem('name', nameInput.value);
}
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (modalLetter.style.display = 'block') {
      evt.preventDefault();
      modalLetter.style.display = 'none';
      modalLetter.classList.remove('modal-error');
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (modalMap.style.display = 'block') {
      evt.preventDefault();
      modalMap.style.display = 'none';
    }
  }
});
const slides = document.querySelectorAll('.slide-item');
const dots = document.querySelectorAll('.pagination-link');
const buttonsMore = document.querySelectorAll('.slider-link');
const dotsBlock = document.querySelector('.pagination');

const serviceSlides = document.querySelectorAll('.advantage-item');
const links = document.querySelectorAll('.advantage-link');
const linksBlock = document.querySelector('.advantage-pagination');


const slideIndexes = {
  'Первый слайд': 1,
  'Второй слайд': 2,
  'Третий слайд': 3,
}

const serviceSlideIndexes = {
  'Доставка' : 1,
  'Гарантия': 2,
  'Кредит': 3,
}

function showSlides(slideIndex) {

  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].href = linkHref[i];
    buttonsMore[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('pagination-link-active');
    };
  buttonsMore[slideIndex-1].style.display = 'flex';
  dots[slideIndex - 1].classList.add('pagination-link-active');
};

function showServiceSlides(serviceSlideIndex) {

  if (serviceSlideIndex > serviceSlides.length) {
    serviceSlideIndex = 1
  }
  if (serviceSlideIndex < 1) {
    serviceSlideIndex = serviceSlides.length;
  }

  for (let i = 0; i < serviceSlides.length; i++) {
    serviceSlides[i].href = linkHref[i];

  }

  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('advantage-link-active');
  };
  links[serviceSlideIndex - 1].classList.add('advantage-link-active');
  console.log('работает');
};

dotsBlock.addEventListener('click',(evt) => {
  if (evt.target.matches('.pagination-link')){
    showSlides(slideIndexes[evt.target.ariaLabel]);
  }
  });

linksBlock.addEventListener('click', (evt) => {
  if (evt.target.matches('.advantage-link-content')) {
    showServiceSlides(serviceSlideIndexes[evt.target.textContent]);
  }
});
showSlides(1);
showServiceSlides(1);
