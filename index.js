// Home work 4: 
 
// NORMAL 

// Task 1. 

let card = {  
    name: "Dara",
    age: 24,        
  };
delete card.name;
delete card.age;
console.log(card);

// Task 2. 

let cup = {
    color: "red",
    design: "dots",
};
console.log(cup.hasOwnProperty('color'));

// Task 3.

const student = {
    name: 'John',
    age: 19,
    isHappy: true
};

for (const key in student) {
  console.log(key);
}
for (const key in student) {
  console.log(student[key]);
}

// Task 4.

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// Task 5. 

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andre: 664,
  alexandra: 199,
}
let midSalaries = 0;
function sum(salaries){
  let sum = 0;
for (const key in salaries) {
  sum += salaries[key];
 midSalaries= sum/Object.keys(salaries).length;
}
}
sum(salaries);
console.log(midSalaries);

// Task 6. 

let user = {
  login: "solomka2808",
  password: "qwerty123"
  };
let login = prompt("Введите ваш логин");
if (login == "solomka2808") {
  let password = prompt("Введите ваш пароль");
  if (password == "qwerty123") {
      alert ("Добро пожаловать");
  }
}

// ADVANCED

// Task 1.  

let firstTeam = Number(prompt("Какой счёт у первой команды"));
let secondTeam = Number(prompt("Какой счёт у второй команды"));

Object.prototype.getKeyByValue = function(value) {
  for (let prop in this) {
    if (this.hasOwnProperty(prop)) {
      if (this[prop] === value)
        return prop;
    }
  }
};
let goalCount = {
  ноль: 0,
  один: 1,
  два: 2,
  три: 3,
  четыре: 4,
  пять: 5,
  шесть: 6,
  семь: 7,
  восемь: 8,
  девять: 9,
};

if(firstTeam<=9 && secondTeam<=9){
 console.log(`${goalCount.getKeyByValue(firstTeam)} - ${goalCount.getKeyByValue(firstTeam)}`);
}
else{
  console.log('Error! Number of goals cannot be negative or greater than 9');
}

// Task 2. 

let student1 = {
  name: 'Polina',
  age: 27,
}
let student2 = {
  name: 'Polina',
  age: 27,
}
let compare = JSON.stringify(student1) === JSON.stringify(student2);
console.log(compare);

// Task 3. 

const animals = {
  cat: {
     name: 'Енчик',
     age: 3,
  },
  dog: {
     name: 'Орео',
     age: 2,
  }
}
animals.bird?.replace('name:','');
console.log(animals.bird.name);

// хз, как это сделать