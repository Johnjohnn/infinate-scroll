// Unsplas API      
const count = 10;
const apiKey="kbIZCdoL6eLiQd5PDkIqEAOs1q0omT94fUwRt-sn8Wk"    
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from splash API 

async function getphotos(){
    try{
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    }catch (error){
//catch error here
    }
}

// on load 
getphotos()