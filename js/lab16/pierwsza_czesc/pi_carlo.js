let n = 100000 // punkty
let k = 0;
for (i = 1; i <= n; i++){
    x = Math.random();
    y = Math.random();
    if ((x * x + y * y) <= 1) k++;    
}
p = 4 * k / n;
console.log('pi = ' + p);