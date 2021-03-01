import imageCollection from './gallery-items.js'

const galleryListRef = document.querySelector('.js-gallery');

const addItemToGallery = function (item) {
   
return  item.map(element => {
return `<li class = "gallery__item"><image class = "gallery__image" src = "${element.preview}" alt = "${element.description}"></image></li>`


 }).join('')
}
galleryListRef.insertAdjacentHTML('beforeend', addItemToGallery(imageCollection))

