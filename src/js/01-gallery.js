// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const galleryMurkup = createImageGalleryMurkup(galleryItems);

function createImageGalleryMurkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
          <img 
          class="gallery__image"   
          src="${preview}"
          alt="${description}"
              </a>`
    }).join('');
}

galleryBox.insertAdjacentHTML('beforeend', galleryMurkup);

var galleryImg = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

