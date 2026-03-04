const container = document.getElementById("placesContainer");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function displayPlaces(data){

container.innerHTML="";

data.forEach(place=>{

const card=document.createElement("div");

card.classList.add("card");

card.innerHTML=`
<img src="${place.image}">
<h3>${place.name}</h3>
<p>${place.desc}</p>
`;

card.onclick=()=>{

modal.style.display="flex";

modalContent.innerHTML=`
<h2>${place.name}</h2>
<p><b>📍 Location:</b> ${place.location}</p>
<p><b>🚗 How to Reach:</b> ${place.reach}</p>
<p><b>🌤 Best Time:</b> ${place.bestTime}</p>
<p><b>⭐ Highlights:</b> ${place.highlights}</p>
`;

};

container.appendChild(card);

});

}

displayPlaces(tourismPlaces);