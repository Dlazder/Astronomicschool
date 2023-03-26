document.querySelector('.burger__outer').onclick = function() {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.burger__nav').classList.toggle('hidden');
    document.querySelector('.burger__outer').classList.toggle('opened');
    body.classList.toggle('no-scroll');
}