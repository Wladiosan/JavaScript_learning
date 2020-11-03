const peoples = [
    {name: 'Valera', budget: 4000},
    {name: 'Olga', budget: 3800},
    {name: 'Zina', budget: 2000}
]
debugger
const app = peoples.findIndex(function (person){
    return person.budget === 2000
})
console.log(app)