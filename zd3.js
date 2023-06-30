let number = +prompt('введи число');
console.log(number);
let subtrahend = +prompt('введите вычитаемое число')
difference = number - subtrahend;
let added = +prompt('введите прибавляемое число')
sum = difference + added;
let multiplier = +prompt('введите множитель')
product = sum * multiplier;
let divider = +prompt('введите длитель')
quotient = product/divider;
alert(`((((${number} - ${subtrahend}) + ${added}) * ${multiplier}) / ${divider} = ${quotient}`);

