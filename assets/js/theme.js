const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const photo = document.querySelectorAll(".photo");
const iframe = document.querySelector(".iframe");
if (toggle) {
    toggle.onclick = changeTheme;
}
let whiteTheme = 'false';

function loadTheme() {
    let saveTheme = localStorage.getItem('theme');
    if (saveTheme === 'true') {
        changeTheme();
    }
}
loadTheme();

function changeTheme() {
    // saveTheme
    if (whiteTheme === 'false') {
        whiteTheme = 'true';
        let saveTheme = localStorage.setItem('theme', whiteTheme);
        saveTheme = whiteTheme;
    } else {
        whiteTheme = 'false';
        let saveTheme = localStorage.setItem('theme', whiteTheme);
        saveTheme = whiteTheme;
    };

    //change theme
    html.classList.toggle("theme");
    if (iframe) {
        iframe.classList.toggle("theme");
    }
    
    if (photo) {
        photo.forEach(photo => {
            photo.classList.toggle("grayscale");
            photo.classList.toggle("theme");
        });
    }
    
    if (circle) {
        circle.classList.toggle("move");
    }
}