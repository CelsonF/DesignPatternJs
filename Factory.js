function factoryPeople(firstName,lastName){
   let people = {};
   people.firstName = firstName;
   people.lastName = lastName;
   
   function completeName() {
       return `${people.firstName} ${people.lastName}`;
   }

   people.completeName = completeName;

   return people;
}

let people = factoryPeople("Celson Fernando","Rodrigues de Araujo");

console.log(people);

console.log(people.completeName());