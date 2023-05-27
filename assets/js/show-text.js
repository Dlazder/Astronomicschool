const btn = document.querySelector(".btn--showText");

btn.onclick = showText;

const text = document.querySelector(".lesson__text");
function showText() {
    if (btn.innerHTML === 'Показать конспект') {
        btn.innerHTML = 'Скрыть конспект';
    } else {
        btn.innerHTML = 'Показать конспект';
    }
    text.classList.toggle("showed");
}