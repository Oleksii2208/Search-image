import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';
// import { imagesTemplate } from './js/render-functions';

const refs = {
  formElem: document.querySelector('.form'),
  listElem: document.querySelector('.gallery'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.currentTarget.elements.search.value;

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
      position: 'topRight',
    });

    return;
  }

  getImagesByQuery(query)
    .then(data => {
      // console.log(data);
      // imagesTemplate(data);
      const markup = imagesTemplate(data);
      // refs.listElem.innerHTML = markup;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong! Please try again later.',
        position: 'topRight',
        timeout: 10000,
      });
      console.error('Error fetching images:', error);
    });

  refs.formElem.reset();
});
