document.querySelector(".user-name").innerHTML = localStorage.getItem('userName');

if (document.querySelector('input')) {
    document.querySelector('input').value = localStorage.getItem('userName');
    document.querySelector('.change').onclick = function() {
        localStorage.setItem('userName', document.querySelector('input').value);
        document.querySelector(".user-name").innerHTML = localStorage.getItem('userName');
    }
};