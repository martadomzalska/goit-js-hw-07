import { galleryItems } from "./gallery-items.js";
// Change code below this line
let gallery = document.querySelector(".gallery");
for (const item of galleryItems) {
  const link = document.createElement("a");
  link.setAttribute("href", item.original);
  link.classList.add("gallery__item");
  const image = document.createElement("img");
  image.setAttribute("src", item.preview);
  image.setAttribute("alt", item.description);
  //image.setAttribute("data-source", item.original);
  image.classList.add("gallery__image");
  link.append(image);
  gallery.append(link);
}

gallery.next(); // Next Image

console.log(gallery);
console.log(galleryItems);
