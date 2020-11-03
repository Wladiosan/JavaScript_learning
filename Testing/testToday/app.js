const people = [
    {name:'Vasya', budget: 1000},
    {name:'Petya', budget: 2000},
    {name:'Kolya', budget: 3000}
]

const index = people.findIndex(function (person){
    return person.budget === 1000
})

console.log(people[index].name);