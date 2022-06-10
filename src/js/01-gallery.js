// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const body = document.querySelector('body');

const imgMarkup = galleryItems
  .map(
    e =>
      `
    <a class="gallery__item" href="${e.original}">
        <img class="gallery__image"  src="${e.preview}" alt="${e.description}" />
    </a>
      
      `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', imgMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  overlayOpacity: 0.9,
  scrollZoom: false,
});
