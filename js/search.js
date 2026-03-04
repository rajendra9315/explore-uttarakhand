const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();


/* TOURISM PAGE */

if(typeof tourismPlaces !== "undefined"){

const filtered = tourismPlaces.filter(place =>
place.name.toLowerCase().includes(value)
);

displayPlaces(filtered);

}


/* TEMPLES PAGE */

if(typeof temples !== "undefined"){

const filtered = temples.filter(temple =>
temple.name.toLowerCase().includes(value)
);

displayTemples(filtered);

}


/* TREKS PAGE */

if(typeof treks !== "undefined"){

const filtered = treks.filter(trek =>
trek.name.toLowerCase().includes(value)
);

displayTreks(filtered);

}


/* DISTRICTS PAGE */

if(typeof districtsData !== "undefined"){

const filtered = districtsData.filter(district =>
district.name.toLowerCase().includes(value)
);

renderDistricts(filtered);

}

});
}
