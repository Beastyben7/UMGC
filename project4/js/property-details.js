// Retrieve the complex object data from local storage
const propertyDataString = window.localStorage.getItem('property');

const property = JSON.parse(propertyDataString);


// Link data to IDs

// Images
const img1 = property.images.img1;
document.getElementById('mainImage').src = img1;
document.getElementById('img1').src = img1;

const img2 = property.images.img2;
document.getElementById('img2').src = img2;

const img3 = property.images.img3;
document.getElementById('img3').src = img3;

const img4 = property.images.img4;
document.getElementById('img4').src = img4;

const img5 = property.images.img5;
document.getElementById('img5').src = img5;

// Other Data
const homeType = property.homeType;
document.getElementById('$homeType').innerText = homeType;

const rent = property.rent;
document.getElementById('$rent').innerText = rent;

const sqft = property.sqft;
document.getElementById('$sqft').innerText = sqft;

// Rooms
    const bedrooms = property.rooms.bedrooms
    document.getElementById('$bedrooms').innerText = bedrooms;

    const bathrooms = property.rooms.bathrooms
    document.getElementById('$bathrooms').innerText = bathrooms;

    const kitchens = property.rooms.kitchens
    document.getElementById('$kitchens').innerText = kitchens;

    const livingrooms = property.rooms.livingrooms
    document.getElementById('$livingrooms').innerText = livingrooms;

const info = property.info;
document.getElementById('$info').innerText = info;

// Pet Policy
    const cats = property.petPolicy.cats
    document.getElementById('$cats').innerText = cats;

    const dogs = property.petPolicy.dogs
    document.getElementById('$dogs').innerText = dogs;

// Temperature
    const hot = property.temp.hot
    document.getElementById('$hot').innerText = hot;

    const cold = property.temp.cold
    document.getElementById('$cold').innerText = cold;

const amenities = property.amenities;
document.getElementById('$amenities').innerText = amenities;

// Change the main image on click
function toMainImg(imgNumber) {
    if (imgNumber == '1') {
        document.getElementById('mainImage').src = img1
    }
    if (imgNumber == '2') {
        document.getElementById('mainImage').src = img2
    }
    if (imgNumber == '3') {
        document.getElementById('mainImage').src = img3
    }
    if (imgNumber == '4') {
        document.getElementById('mainImage').src = img4
    }
    if (imgNumber == '5') {
        document.getElementById('mainImage').src = img5
    }
}
toMainImg()