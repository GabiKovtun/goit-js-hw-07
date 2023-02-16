import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);


const galleryItemEl = galleryItems.map(galleryItem => 
    `<div class ="gallery__item">
    <a class = "gallery__link" target="_blank"  rel="noopener" href = ${galleryItem.original}>
    <img  class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" data-source = "${galleryItem.original}"/>
    </a>
    </div>`
  ).join('');
  
  gallery.insertAdjacentHTML('beforeend',  galleryItemEl);

console.log(galleryItemEl)

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const instance = basicLightbox.create(`<img src="${e.target.getAttribute("data-source")}"  >`)
        instance.show();
        e.preventDefault();
    }
   
});
