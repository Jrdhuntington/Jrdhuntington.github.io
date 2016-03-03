var animal =  {};
animal.species = 'dog';
animal['name'] = 'T-Bone';
animal.noises = ['roof, roof'];

console.log(animal);

var noises = [];
noises[0] = 'growl';
noises[noises.length] = 'bark';
noises.unshift('Whinning');

console.log(noises);

console.log(noises.length);

console.log(noises[noises.length - 1]);

var animalNoises = animal.noises.concat(noises);
console.log(animalNoises);

var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);

var lion = {
    species:'cat',
    name: 'leo',
    noises: ['rwar', 'grr', 'meow']
    
};
animals.push(lion);

var hyena = {
    species: 'dog',
    name: 'sam',
    noises: ['laughing', 'cry']
    
};
animals.push(hyena);
console.log(animals);
console.log(animals.length);

var friends = [];

function math() {
    var randMath = animals[Math.floor(Math.random()*animals.length)];
    return randMath.name;
}
friends.push(math());
console.log(friends);

animals[3].friends = friends;

function search (animalName) {
    for (var i = 0; i < animals.length; i++) {
        if (animalName === animals[i].name){
            return animals[i];
        }
    }
    return null;
}

function edit (animalName, animalObject) {
    for (var i = 0; i < animals.length; i++)
}
