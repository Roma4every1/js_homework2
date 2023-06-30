let number = +prompt('введите число: ');
console.log(`таблица умножения для числа ${number}:`)
for(i=1; i<=10; i++){
    console.log(`${number} * ${i} = ${number*i}`);
}