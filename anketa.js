let surname, name, secondname,age,gender;
    do {
    surname = prompt("Введите вашу фамилию:");
  } while(!surname)
  do {
   name = prompt("Введите ваше имя:");
  } while (!name);
  do {
   secondname = prompt("Введите ваше отчество:");
  } while (!secondname);
  do {
    age = prompt("Введите ваш возраст:");
  } while (isNaN(age) || !age);
    gender = confirm("Ваш пол - мужской?");
let pensionableAge = (gender === true) ? 65 : 55;
alert(`Ваше ФИО: ${surname} ${name} ${secondname}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${age*365}
    Через 5 лет вам будет: ${+age+5}
    Ваш пол: ${(gender === true) ? "мужской" : "женский"}
    Вы на пенсии: ${(age >= pensionableAge) ? "да" : "нет"}`);
