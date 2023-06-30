let start = +prompt('введите начальное число');
let end = +prompt('введите конечное число');
let sum=0;
for(i=start; i<=end; i++){
sum+=i;
}
console.log('сумма:',sum);