// get ID or class from index.html where to put new picture - getelementbyid
const getAddPicture = document.getElementById('add-picture');

//functionality that each div in html will have a desciption and a link to unsplash - I need to get these from the source

// function or two for loading animation? timing - when on and when off

// function??? (maybe function is not needed, only once I want to repeat it over and over) to create a new element into HTML and add the picture from API???

let ImgToDOM = document.createElement('img');
ImgToDOM.src = 'https://source.unsplash.com/random/';
getAddPicture.appendChild(ImgToDOM);

let ImgToDOM2 = document.createElement('img');
ImgToDOM2.src = 'https://source.unsplash.com/random/';
getAddPicture.appendChild(ImgToDOM2);

let ImgToDOM3 = document.createElement('img');
ImgToDOM3.src = 'https://source.unsplash.com/random/';
getAddPicture.appendChild(ImgToDOM3);

// function Fetch picture(s) from unsplash API
// https://source.unsplash.com/random /800x800

async function getPicture() {
    const apiUrl = 'https://source.unsplash.com/random/800x800';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        

    } catch (error) {
        console.log('ups!', error);
    }
}   

getPicture();

// function check the place on the page and then... - some kind of event listener?

// function start loading new picture once the scroll is down

// function to push new loaded picture into index.html