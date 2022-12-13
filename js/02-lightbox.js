import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const list = galleryItems.reduce(
  (acc, { preview, description, original }) =>
    acc +
    `<a class="gallery__link" href='${original}'>
    <img class="gallery__image" 
    src='${preview}'
    alt='${description}'/>
    </a>`,
  ""
);

galleryEl.insertAdjacentHTML("afterbegin", list);

galleryEl.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
