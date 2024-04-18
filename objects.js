// No 1
function  getAgePeople(people) {
return people.filter(d=>d.age >=18).map(d=>d.name);
}; 
const peopleAge = [{name: 'Alice',age: 17},
                {name:'Eunice',age:22},
                {name:'Charlie',age:14},
                {name:'Max', age:19},

]; 

console.log(getAgePeople(peopleAge));
  
//No 2

const products = [{name:'Laptop',price:1200,category:'Electronics'},
                 {name:'shirt',price:25,category:'clothing'},
                 {name: 'Headphones',price:80,category:'Electronics'},
                 {name:'Shoes',price:60,category:'clothing'},
];

const groupCategory = products.reduce((group, product) =>{
    const {category} = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
},{});
    
console.log(groupCategory);


// No 3
function Averagemarks(students){
return students.filter(student =>{
    const generalScore = student.scores.reduce((acc, current)=> acc+current,)/student.scores.length
    return generalScore>=85
}).map(student=>student.name)

}
const students = [
    {name:'John',scores:[90,80,85]},
    {name:'Jane',scores:[95,92,88]},
    {name:'Jim',scores:[70,80,75]},
    {name:'Jil',scores:[85,90,84]},

];
const generalMarks=Averagemarks(students)
console.log(generalMarks)


//4
const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
 function myCarAge(car){
  car['age'] = (2024-car.year)
  console.log(car)
 }
myCarAge(car)
