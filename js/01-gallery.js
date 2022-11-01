import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(gallery);
for (const item of galleryItems) {
  const image = document.createElement("img");
  image.setAttribute("src", item.preview);
  image.setAttribute("alt", item.description);
  image.setAttribute("data-source", item.original);
  image.classList.add("gallery__image");
  gallery.append(image);
}
console.log(galleryItems);

function showPic(event) {
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
