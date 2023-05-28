const trueAnswers = ['#x1', '#x5', '#x7', '#x12', '#x15', '#x16', '#x20', '#x24', '#x26', '#x30', '#x32', '#x36', '#x37', '#x42', '#x44', '#x48', '#x49', '#x52', '#x55', '#x58', '#x61', '#x64', '#x67', '#x70', '#x73', '#x76', '#x81', '#x82', '#x85', '#x88', '#x91', '#x94', '#x98', '#x100', '#x103', '#x107', '#x109', '#x112', '#x115', '#x119'];

// inserting a name
if (localStorage.getItem('userName') != null) {
    document.querySelector("#user-name").value = localStorage.getItem('userName');
}

document.querySelector(".checkAnswers").onclick = function() {
    // Name entry
        userName = document.querySelector("#user-name").value;
        localStorage.setItem('userName', userName);
    
    checkAnswers();
    let result = checkAnswers();

    document.querySelector(".test-result").classList.remove("hidden");
    document.querySelector(".test").classList.add("hidden");

    const resultCount = document.querySelector(".result__count");
    // declensions
    if (result === 1 || result === 21 || result === 31 || result === 41) {
        resultCount.innerHTML = 'Ваш результат: ' + result + ' балл';
    } else if (result > 1 && result < 4 || result > 21 && result < 25) {
        resultCount.innerHTML = 'Ваш результат: ' + result + ' балла';
    } else if (result > 4 && result < 21) {
        resultCount.innerHTML = 'Ваш результат: ' + result + ' баллов';
    } else {
        resultCount.innerHTML = 'Ваш результат: ' + result;
    };
}

function checkAnswers() {
    let result = 0; 
    for (let i of trueAnswers) {
       if (document.querySelector(i).checked) result++;
       console.log(result);
    }
    localStorage.setItem('final__result', result);
    return result;
}


document.querySelector(".showTrueAnswers").onclick = function() {
    if (this.innerHTML === 'Показать правильные ответы') {
        this.innerHTML = 'Скрыть правильные ответы';
    } else this.innerHTML = 'Показать правильные ответы';

    document.querySelector(".test-result__true-answers").classList.toggle("hidden");
}