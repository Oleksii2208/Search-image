import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  listEl: document.querySelector('.gallery'),
};

// console.log(refs.listEl);

export function imageTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `<li class="gallery-item">
  <a class="gallery-link" href='${largeImageURL}'>
    <img
      class="gallery-image"
      src='${webformatURL}'
      data-source='${largeImageURL}'
      alt='${tags}'
      width='360'
      height='200'
    />
    <div>
    <p>Likes${likes}</p>
    <p>Views${views}</p>
    <p>Comments${comments}</p>
    <p>Downloads${downloads}</p>
    </div>
  </a>
</li>
`;
}

export function imagesTemplate(images) {
  clearGallery();

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 10000,
    });
    return;
  }

  const markup = images.map(imageTemplate).join('\n');
  // console.log(markup);
  refs.listEl.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'botton',
    captionDelay: 250,
    overlayOpacity: 0.7,
  });

  lightbox.refresh();

  // return markup;
}

function clearGallery() {
  refs.listEl.innerHTML = '';
}

// refs.listEl.innerHTML = markup;

// refs.listEl.insertAdjacentHTML('afterbegin', imagesTemplate(images));
