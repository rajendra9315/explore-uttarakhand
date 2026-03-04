document.getElementById("aboutTitle").textContent = aboutData.title;

document.getElementById("aboutSubtitle").textContent = aboutData.subtitle;

document.getElementById("aboutIntro").innerHTML = `<p>${aboutData.intro}</p>`;


const container = document.getElementById("aboutCards");

aboutData.sections.forEach(section => {

const card = document.createElement("div");

card.classList.add("info-card");

card.innerHTML = `
<h3>${section.title}</h3>
<p>${section.text}</p>
`;

container.appendChild(card);

});