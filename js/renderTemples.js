const container = document.getElementById("templeContainer");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");


function displayTemples(data){

container.innerHTML="";

data.forEach(temple=>{

const card=document.createElement("div");

card.classList.add("card");

card.innerHTML=`
<img src="${temple.image}">
<h3>${temple.name}</h3>
<p>${temple.desc}</p>
`;

card.onclick=()=>{

modal.style.display="flex";

modalContent.innerHTML=`
<h2>${temple.name}</h2>
<p><b>📍 Location:</b> ${temple.location}</p>
<p><b>🚗 How to Reach:</b> ${temple.reach}</p>
<p><b>🌤 Best Time:</b> ${temple.bestTime}</p>
<p><b>⭐ Highlights:</b> ${temple.highlights}</p>
`;

};

container.appendChild(card);

});

}

displayTemples(temples);