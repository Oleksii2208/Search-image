import axios from 'axios';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '56897880-ce564d0c5f2c9a99203aeddd2',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;
  return axios
    .get(url)
    .then(res => res.data.hits)
    .catch(error => {
      console.log('Error images:', error);
      // return [];
    });
}
