const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray= [];


// Unsplas API      
const count = 10;
const apiKey="kbIZCdoL6eLiQd5PDkIqEAOs1q0omT94fUwRt-sn8Wk"    
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// Helper function to set attributes on the DOM Elements 
function setAttributes(elements, attributes) {
    for (const key in attributes) {
        elements.setAttribute(key, attributes[key])
    }
}

// Create Elements for Links and PHOTOS , 
function displayPhotos() {
    photosArray.forEach( (photo) => {
     // Create <a> to link to Unsplash    
     const item = document.createElement("a");
     //item.setAttribute("href", photo.links.html);
     //item.setAttribute("target", "_blank");
     setAttributes(item, {
         href: photo.links.html,
         target: "_blank",

     })
     //Creat <img> for photo
     const img = document.createElement("img");
     //img.setAttribute("src", photos.urls.regular);
    // img.setAttribute("alt" ,photo.alt_description);
    // img.setAttribute("title", photo.alt_description)
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    })
     // Put <img> inside <a>, then put both inside imageContainer Element
     item.appendChild(img);
     imageContainer.appendChild(item);
    })
}


// Get photos from splash API 

async function getphotos(){
    try{
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(displayPhotos())
     displayPhotos();

    }catch (error){
//catch error here
    }
}

// on load 
getphotos()