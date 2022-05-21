
document.addEventListener("DOMContentLoaded", function(){
const form = document.getElementById("form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("deu");

// create li element

const memeLi = document.createElement('li');
memeLi.classList.add("meme-image");

// create element to put img
const textontop = document.getElementById("textontop");
const imageurl = document.getElementById('img-url').value,
src = imageurl,
img = document.createElement('img');
img.src = src;

console.log(imageurl);

const textOnTopDiv = document.createElement('div');
textOnTopDiv.classList.add("texttop");
textOnTopDiv.innerText = document.getElementById("textontop").value;

const textOnBottomDiv = document.createElement('div');
textOnBottomDiv.classList.add("textbottom");
textOnBottomDiv.innerText = document.getElementById("textonbottom").value;

gallery.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(textOnTopDiv);
memeLi.appendChild(textOnBottomDiv);

form.reset();

})

function remove(e){
    e.target.parentNode.remove();
}

gallery.addEventListener('click', remove, false);

});

