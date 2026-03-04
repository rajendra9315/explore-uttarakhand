const container = document.getElementById("galleryContainer");

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");


galleryImages.forEach(img => {

const card = document.createElement("div");

card.classList.add("gallery-card");

card.innerHTML = `
<img src="${img.image}">
<p>${img.title}</p>
`;

card.onclick = () => {

modal.style.display="block";

modalImg.src = img.image;

};

container.appendChild(card);

});


closeBtn.onclick = () => {

modal.style.display="none";

};