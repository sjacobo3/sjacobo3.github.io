// get image element
let image = document.getElementById("profile-pic");
let header = document.getElementById("header");
let count = 0;

// when image clicked
image.addEventListener("click", function() {
    // change image src
    if (count === 0) {
        image.src = "img/fam.jpg"
        count = 1;
    }
    // if clicked again, change back to original image
    else {
        image.src = "img/prof.jpg"
        count = 0;
    }
})

