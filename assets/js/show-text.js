const btn = document.querySelector(".btn--showText");

btn.onclick = showText;

const text = document.querySelector(".lesson__text");
function showText() {
    if (this.innerHTML === 'Показать конспект') {
        this.innerHTML = 'Скрыть конспект';
    } else {
        this.innerHTML = 'Показать конспект';
    }
    text.classList.toggle("showed");
}