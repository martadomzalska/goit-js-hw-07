import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
for (const item of galleryItems) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="Image description"
        />
      </a>
    </div>`
  );
}

function showPic(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute(
      "data-source"
    )}" width="800" height="600">
`);
  instance.show();
}

gallery.addEventListener("click", showPic);
