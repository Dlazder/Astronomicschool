if (sessionStorage.getItem('starting') === 'true') {
    document.querySelector(".greeting-screen").classList.add("hidden");
    body.classList.remove("no-scroll");
} else {
    body.classList.add('no-scroll');
};
document.querySelector(".btn--greeting").onclick = function() {
    body.classList.remove("no-scroll");
    document.querySelector(".greeting-screen").classList.add("hidden");
    sessionStorage.setItem('starting', 'true');
    document.querySelector("audio").play();

}
if (localStorage.getItem('userName') !== null && localStorage.getItem('userName') !== '') {
    document.querySelector(".greeting-name").innerHTML = localStorage.getItem('userName') + ',<br>С возвращением!';
};
