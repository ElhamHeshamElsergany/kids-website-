// about us section
document.getElementById('firstimg').addEventListener("mouseenter", changImg);
document.getElementById('firstimg').addEventListener("mouseleave", changwidthImg);
document.getElementById('movingWord').addEventListener("mouseenter", movewords);
document.getElementById('movingWord').addEventListener("mouseleave", movewords2);
document.getElementById("scroll").addEventListener("click",scrolldown)

function scrolldown() {
    window.scrollBy(0, 10)
    
}


function changImg() {

    document.getElementById('firstimg').style.transform = "scale(1.1)";
    document.getElementById('firstimg').style.transitionDuration = "2s";
}

function changwidthImg() {

    document.getElementById('firstimg').style.transform = "scale(1)";
    document.getElementById('firstimg').style.transitionDuration = "2s";

}

function movewords() {
    document.getElementById('movingWord').style.transform = "scale(1.5)";
    document.getElementById('movingWord').style.transform = "rotate(180deg)";
    document.getElementById('movingWord').style.transitionDuration = "2s";
    document.getElementById('movingWord').style.cursor = "pointer";
    document.getElementById('movingWord').style.color = "#109fac";
}

function movewords2() {
    document.getElementById('movingWord').style.transform = "scale(1)";
    document.getElementById('movingWord').style.transform = "rotate(360deg)";
    document.getElementById('movingWord').style.transitionDuration = "1s";
}
// activites part
var imglist = Array.from(document.getElementsByClassName('imgitem'));
var lightboxcontainer = document.querySelector('.lightBox');
var lightboxitem = document.querySelector('.lightbox-item');
var currentindex = 0;
var nextbtn = document.getElementById('next');
var prevbtn = document.getElementById('prev');
var closebtn = document.getElementById('close')

for (let i = 0; i < imglist.length; i++) {
    imglist[i].addEventListener('click', function (e) {
        currentindex = imglist.indexOf(e.target);
        var imgsrc = e.target.getAttribute('src');
        lightboxcontainer.classList.replace('d-none', 'd-flex')
        lightboxitem.style.backgroundImage = `url(${imgsrc})`
    })
}
function nextSlid() {
    currentindex++;
    if (currentindex == imglist.length) {
        currentindex = 0;
    }
    var imgsrc = imglist[currentindex].getAttribute('src');
    lightboxitem.style.backgroundImage = `url(${imgsrc})`
}
function prevSlid() {
    currentindex--;
    if (currentindex == -1) {
        currentindex = imglist.length - 1;

    }
    var imgsrc = imglist[currentindex].getAttribute('src');
    lightboxitem.style.backgroundImage = `url(${imgsrc})`
}
prevbtn.addEventListener("click", prevSlid);
nextbtn.addEventListener('click', nextSlid);
closebtn.addEventListener('click', function () {
    lightboxcontainer.classList.replace('d-flex', 'd-none')

})

