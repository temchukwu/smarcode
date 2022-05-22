// Arrays
const units = [`max`, `manu`, `Julie`, `pro`];
console.log(units[2]);
console.log(units.length);
// looping an array
for (const el of units) {
   console.log(el);
   for (let el of units) {
       console.log(el);
       console.log(units.indexOf(`julie`));

   }
}
units.push(`chika`);
console.log(units.length);
console.log(units.indexOf(`pro`));

const ids = new Set();
ids.add(`abc`);
ids.add(1);
ids.add(`abk`);
ids.add(45);
console.log(ids.has(`abc`));

let person = {
  name: `Boss`, 
  age: 21,
   hobbies: [`sports`, `cooking`, `travelling`]
  };
person.lastName = `Shama`;
console.log(person);
delete person.age;
console.log(person);
let myResult = Object.entries
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(JSON.stringify(person));

// Mapping
let myData = new Map();
myData.set(`average`, 1.53,);
myData.set(`lastResult`, null,);
const continent = {country: `US`, population: 82};
myData.set(`US`, 0.89);
for (const el of myData) {
  console.log(el);
  console.log(myData.size);
  console.log(myData.set);
  console.log(myData.values);

}

let months = ["Jan", "Feb", "Mar", "Apr", "May"];
console.log(months);
console.log(months[3]);
console.log(months.length);
// looping through an array
for (const el of months) {
console.log(el);
}
months.forEach(function(x, index) {
  console.log(index + " " + x);
});
console.log(months.indexOf("Mar"));
console.log(months[0]);



// Function -the core of programming

let add = 3+6;
console.log(add);
function addnumbers(x,y) {
  console.log(x+y);
}
addnumbers(10,20);


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
  hunt() {
    console.log(`${this.hunt} is hunting`);
  }
}
const Lion = new Animal("Lion", 3);
Lion.eat();
Lion.sleep();
Lion.hunt();

















