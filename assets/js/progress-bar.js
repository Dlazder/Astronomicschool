const progressFill = document.querySelector('.progress-fill');
const percent = document.querySelector('.percent');
const progressFill2 = document.querySelector('.progress-fill-2');
const percent2 = document.querySelector('.percent-2');
const progressFill3 = document.querySelector('.progress-fill-3');
const percent3 = document.querySelector('.percent3');
let pos = 0;
let pos2 = 0;
let pos3 = 0;
let result = 0;
let averageResult = 0;

const allTests = ['result__1-1', 'result__1-2', 'result__2-1', 'result__2-2', 'result__2-3', 'result__3-1'];
let averageResults = [];
//passed tests
for (let i in allTests) {
   if (localStorage.getItem(allTests[i])) {
      result++;
   };
};

//average score
for (let i in allTests) {
   if (localStorage.getItem(allTests[i])) {
      averageResults.push(localStorage.getItem(allTests[i]));
      averageResult += Number(averageResults[i]);
   };
};
averageResult /= averageResults.length;

function timer() {
   if (pos === 100/allTests.length*result) {
      return;
   };
   if (pos < 100/allTests.length*result) {
      setTimeout(function() {
      pos++;
      progressFill.style.background = "conic-gradient(#40ff4e " + pos*2.7 + 'deg, transparent 0deg)';
      percent.textContent = pos + '%';
   timer();
      },15);
   };
} //1

function timer2() {
   if (pos2 === 100/5*averageResult) {
      return;
   };
   if (pos2 < 100/5*averageResult) {
      setTimeout(function() {
      pos2++;
      progressFill2.style.background = "conic-gradient(#40ff4e " + pos2*2.7 + 'deg, transparent 0deg)';
      percent2.textContent = pos2 + '%';
      timer2();
      },15);
   };
} //2

timer();
timer2();