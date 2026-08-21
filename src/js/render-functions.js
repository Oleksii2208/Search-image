import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  listEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function clearGallery() {
  refs.listEl.innerHTML = '';
}

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
  const markup = images.map(imageTemplate).join('\n');
  refs.listEl.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'botton',
    captionDelay: 250,
    overlayOpacity: 0.7,
  });

  lightbox.refresh();
}

// refs.listEl.innerHTML = markup;

// refs.listEl.insertAdjacentHTML('afterbegin', imagesTemplate(images));
