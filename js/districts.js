const container=document.getElementById("districtContainer")
const details=document.getElementById("districtDetails")

function renderDistricts(data){

container.innerHTML=""

data.forEach(d=>{

const card=document.createElement("div")
card.className="district-card"

card.innerHTML=`

<img src="${d.image}">

<div class="card-info">
<h3>${d.name}</h3>
</div>

`

card.onclick=()=>showDetails(d)

container.appendChild(card)

})

}

renderDistricts(districtsData)



function showDetails(d){

details.classList.add("active")
container.classList.add("active")

details.innerHTML = `

<div class="panel-header">
<h2>${d.name}</h2>
<button class="close-btn" onclick="closePanel()">✖</button>
</div>

<p><b>Location:</b> ${d.location}</p>

<p><b>Importance:</b> ${d.importance}</p>

<p><b>Culture:</b> ${d.culture}</p>

<h3>Famous Places</h3>

<ul>
${d.famous.map(p=>`<li>${p}</li>`).join("")}
</ul>

<a class="map-btn" href="${d.map}" target="_blank">
View on Google Maps
</a>

`

}



function scrollToDistricts(){

container.scrollIntoView({
behavior:"smooth"
})

}

function mapDistrict(name){

const district = districtsData.find(d => d.name === name)

if(district){

showDetails(district)

container.classList.add("active")

container.scrollIntoView({
behavior:"smooth"
})

}

}

function closePanel(){

details.classList.remove("active")

container.classList.remove("active")

}