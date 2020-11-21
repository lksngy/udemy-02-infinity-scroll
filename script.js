// get ID or class from index.html where to put new picture - getelementbyid
const getAddPicture = document.getElementById('add-picture');


// function or two for loading animation? timing - when on and when off

// function Fetch picture(s) from unsplash API
// https://source.unsplash.com/random /800x800

async function getPicture() {
    const apiUrl = https://source.unsplash.com/random/800x800;
    try {
        const response = await fetch(apiUrl);


    } catch (error) {
        console.log('ups!', error);
    }
} 

// function check the place on the page and then... - some kind of event listener?

// function start loading new picture once the scroll is down

// function to push new loaded picture into index.html