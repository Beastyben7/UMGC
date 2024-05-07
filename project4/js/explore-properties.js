// Filter Expand/Close

// Open and Close EVERYTHING
var filterClose = document.getElementById("filterClose")
var filters = document.getElementById("filters")

filterClose.addEventListener ("click", function()
{
    if(filters.style.display === "none")
    {filters.style.display = "block";
        this.innerHTML = "◄"}
    else{filters.style.display = "none";
        this.innerHTML = "►"}
});

// Open and Close FILTERS

// RENT
var filterRent = document.getElementById("filterRent")
var dropdownRent = document.getElementById("dropdownRent")
filterRent.addEventListener ("click", function() {
    if (dropdownRent.style.display === "flex")
    {dropdownRent.style.display = "none"}
    else {dropdownRent.style.display = "flex";
    dropdownRent.style.flexDirection = "row";
    dropdownRent.style.justifyContent = "space-between";}
});

// HOME TYPE
var filterHomeType = document.getElementById("filterHomeType")
var dropdownHomeType = document.getElementById("dropdownHomeType")
filterHomeType.addEventListener ("click", function() {
    if (dropdownHomeType.style.display === "flex")
    {dropdownHomeType.style.display = "none"}
    else {dropdownHomeType.style.display = "flex";}
});

// TEMPERATURE
var filterTemp = document.getElementById("filterTemp")
var dropdownTemp = document.getElementById("dropdownTemp")
filterTemp.addEventListener ("click", function() {
    if (dropdownTemp.style.display === "flex")
    {dropdownTemp.style.display = "none"}
    else {dropdownTemp.style.display = "flex";}
});

// PETS
var filterPets = document.getElementById("filterPets")
var dropdownPets = document.getElementById("dropdownPets")
filterPets.addEventListener ("click", function() {
    if (dropdownPets.style.display === "flex")
    {dropdownPets.style.display = "none"}
    else {dropdownPets.style.display = "flex";}
});

// AMENITIES
var filterAmenities = document.getElementById("filterAmenities")
var dropdownAmenities = document.getElementById("dropdownAmenities")
filterAmenities.addEventListener ("click", function() {
    if (dropdownAmenities.style.display === "flex")
    {dropdownAmenities.style.display = "none"}
    else {dropdownAmenities.style.display = "flex";}
});

//

// RESULTS

// Open and Close EVERYTHING
var resultsClose = document.getElementById("resultsClose")
var resultsContainer = document.getElementById("resultsContainer")
var cardUpper = document.getElementsByClassName("cardUpper")

resultsClose.addEventListener ("click", function()
{
    if(resultsContainer.style.display === "none")
    {resultsContainer.style.display = "block";
        this.innerHTML = "►"}
    else{resultsContainer.style.display = "none";
        this.innerHTML = "◄"}
});

// THIS IS WHERE THE PROPERTY DATA IS BEING STORED FOR LATER USE
function toProperty(propertyNumber) {

    const property = {
        1: {
            images: {
                img1: `./imgs/property/1/img1.jpg`,
                img2: `./imgs/property/1/img2.jpg`,
                img3: `./imgs/property/1/img3.jpg`,
                img4: `./imgs/property/1/img4.jpg`,
                img5: `./imgs/property/1/img5.jpg`,
            },
            homeType: `Skinny Home`,
            rent: `$2,700`,
            sqft: `2,300sqft`,
            rooms: {
                bedrooms: `2 Bedrooms`,
                bathrooms: `2 Bathrooms`,
                kitchens: `1 Kitchens`,
                livingrooms: `2 Living Rooms`,
            },
            info: `This property, though small from the outside, has quite a spacious interrior. It is well suited for a small family.`,
            petPolicy: {
                cats: `no cats`,
                dogs: `no dogs`,
            },
            temp: {
                hot: `Heating`,
                cold: `A/C`,
            },
            amenities: ``,
        },
        2: {
            images: {
                img1: `./imgs/property/2/img1.jpg`,
                img2: `./imgs/property/2/img2.jpg`,
                img3: `./imgs/property/2/img3.jpg`,
                img4: `./imgs/property/2/img4.jpg`,
                img5: `./imgs/property/2/img5.jpg`,
            },
            homeType: `Villa`,
            rent: `$1,400`,
            sqft: `1,700sqft`,
            rooms: {
                bedrooms: `1`,
                bathrooms: `1`,
                kitchens: `1`,
                livingrooms: `1`,
            },
            info: `1,800sqft`,
            petPolicy: {
                cats: `cats okay`,
                dogs: `dogs okay`,
            },
            temp: {
                hot: `Heating`,
                cold: `A/C`,
            },
            amenities: `pool, gym`,
        },
        3: {
            images: {
                img1: `./imgs/property/3/img1.jpg`,
                img2: `./imgs/property/3/img2.jpg`,
                img3: `./imgs/property/3/img3.jpg`,
                img4: `./imgs/property/3/img4.jpg`,
                img5: `./imgs/property/3/img5.jpg`,
            },
            homeType: `Luxury Appartment`,
            rent: `$3,700`,
            sqft: `2,560sqft`,
            rooms: {
                bedrooms: `1 Bedroom`,
                bathrooms: `2 Bathrooms`,
                kitchens: `1 Kitchen`,
                livingrooms: `3 Living Rooms`,
            },
            info: `This luxury appartment rests directly in the busiest part of Dallas. This luxury appartment includes lavish furnishings at no additional cost. Our staff perform weekly cleaning services.`,
            petPolicy: {
                cats: `cats okay`,
                dogs: `dogs okay`,
            },
            temp: {
                hot: `Heating`,
                cold: `A/C`,
            },
            amenities: ``,
        },
    }

    const thisProperty = property[propertyNumber]

    const propertyStringData = JSON.stringify(thisProperty);
    
    window.localStorage.setItem('property', propertyStringData);
    
    window.location.href = 'property-details.html';
};