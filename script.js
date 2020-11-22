// get ID or class from index.html where to put new picture - getelementbyid
const getAddPicture = document.getElementById('add-picture');


// function or two for loading animation? timing - when on and when off

// function??? (maybe function is not needed, only once I want to repeat it over and over) to create a new element into HTML and add the picture from API???

let ImgToDOM = document.createElement('img');
ImgToDOM.src = 'https://source.unsplash.com/random/800x800';
getAddPicture.appendChild(ImgToDOM);


// function Fetch picture(s) from unsplash API
// https://source.unsplash.com/random /800x800



// function check the place on the page and then... - some kind of event listener?

// function start loading new picture once the scroll is down

// function to push new loaded picture into index.html