import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  hideLoader,
  imagesTemplate,
  showLoader,
} from './js/render-functions';
// import { imagesTemplate } from './js/render-functions';

const refs = {
  formElem: document.querySelector('.form'),
  listElem: document.querySelector('.gallery'),
};
clearGallery();

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.currentTarget.elements.search.value.trim();
  // console.log(!query);
  // clearGallery();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (data.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 10000,
        });
        return;
      }
      // console.log(data);
      imagesTemplate(data);
      // const markup = imagesTemplate(data);
      // refs.listElem.innerHTML = markup;
    })
    .catch(error => {
      // hideLoader();
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
