// SIDEBAR ACTIVE LINK

const links = document.querySelectorAll(".nav a");

// get current page name
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {

    const linkPage = link.getAttribute("href");

    if(linkPage === currentPage){
        link.classList.add("active");
    }

});



// OPTIONAL: CLICK ANIMATION

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(l => l.classList.remove("active"));

        link.classList.add("active");

    });

});