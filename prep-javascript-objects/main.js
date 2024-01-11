const person = {
  firstName: 'Alex',
  lastName: 'Anderson',
  hobby: 'Fishing',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: " + fullName + '.');

person.job = 'Teacher';

console.log("The person's current job is: " + person.job + '.');

person['previuosJob'] = 'Manager';

console.log("The person's previous job is: " + person['previuosJob'] + '.');

console.log('The complete person object: ', person);
