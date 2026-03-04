const container = document.getElementById("trekContainer");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function displayTreks(data){

container.innerHTML="";

data.forEach(trek=>{

const card=document.createElement("div");

card.classList.add("card");

card.innerHTML=`
<img src="${trek.image}">
<h3>${trek.name}</h3>
<p>${trek.desc}</p>
`;

card.onclick=()=>{

modal.style.display="flex";

modalContent.innerHTML=`
<h2>${trek.name}</h2>
<p><b>📍 Location:</b> ${trek.location}</p>
<p><b>🌤 Best Time:</b> ${trek.bestTime}</p>
<p><b>🥾 Difficulty:</b> ${trek.difficulty}</p>
<p><b>⭐ Highlights:</b> ${trek.highlights}</p>
`;

};

container.appendChild(card);

});

}

displayTreks(treks);