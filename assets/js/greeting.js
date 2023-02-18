function audio() {
    body.click();
    document.querySelector("audio").play();
}
if (sessionStorage.getItem('starting') === 'true') {
    document.querySelector(".greeting-screen").classList.add("hidden");
    body.classList.remove("no-scroll");
} else {
    body.classList.add('no-scroll');
};
document.querySelector(".btn--greeting").onclick = function() {
    body.classList.remove("no-scroll");
    document.querySelector(".greeting-screen").classList.add("hidden");
    document.querySelector("audio").play();
    sessionStorage.setItem('starting', 'true');
}
if (localStorage.getItem('userName') != null) {
    document.querySelector(".greeting-name").innerHTML = localStorage.getItem('userName') + ',<br>С возвращением!';
};
