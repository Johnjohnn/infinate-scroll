const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

photosArray= [];


// Unsplas API      
const count = 10;
const apiKey="kbIZCdoL6eLiQd5PDkIqEAOs1q0omT94fUwRt-sn8Wk"    
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements for Links and PHOTOS , 
function displayPhotos() {
    photosArray.foreach( (photo) => {
     // Creat <a> to link to Unsplash    
    })
}


// Get photos from splash API 

async function getphotos(){
    try{
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();

    }catch (error){
//catch error here
    }
}

// on load 
getphotos()