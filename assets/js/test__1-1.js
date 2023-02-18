const trueAnswers = ['#x1', '#x4', '#x6', '#x11', '#x14'];
// inserting a name
if (localStorage.getItem('userName') != null) {
    document.querySelector("#user-name").value = localStorage.getItem('userName');
}

document.querySelector(".checkAnswers").onclick = function() {
    // Name entry
    if (localStorage.getItem('userName') === null) {
        userName = document.querySelector("#user-name").value;
        localStorage.setItem('userName', userName);
    };
    
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
    localStorage.setItem('result__1-1', result);
    return result;
}

document.querySelector(".showTrueAnswers").onclick = function() {
    if (this.innerHTML === 'Показать правильные ответы') {
        this.innerHTML = 'Скрыть правильные ответы';
    } else this.innerHTML = 'Показать правильные ответы';

    document.querySelector(".test-result__true-answers").classList.toggle("hidden");
}