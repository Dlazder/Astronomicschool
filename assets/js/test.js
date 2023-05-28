let n = 5;
let min = 1;
let max = 5;
let m = 17;
let array = [];
function exercise() {
for (let i = 0; i < n; i++) {
array.push(Math.floor(Math.random() * (max - min) + min))
}
return array;
}
console.log(exercise());