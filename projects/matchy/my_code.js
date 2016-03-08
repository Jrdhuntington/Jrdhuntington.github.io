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
        if (animalName.toUpperCase() === animals[i].name.toUpperCase()){
            return animals[i];
        }
    }
    return null;
}

function edit (animalName, animalObject) {
    var match = search(animalName);
    if (match) {
        var index = animals.indexOf(match);
        animals[index] = animalObject;
    }
}

function remove(animalName) {
    for (var i = 0; i < animals.length; i++) {
        animals.slpice(i, 1);
    }
}

function create (object) {
    if (object.name.length && object.species.length > 0) {
        for (var i = 0; i < animals.length; i++){
            if (object.name === animals[i].name)
        }
    }
}

/*Write a function called edit that:

    Takes 2 parameters, a name of an animal and an object

If an animal with that name exists, replace it's entire object with the new object

  Otherwise do nothing

Test it on the website*/













/*var create = function (object) {
    if (!object.name.length && !object.species.length) return;
        
    for (var i = 0; i < animals.length; i++) {
        if (object.name === animals[i].name) {
            return;
        }
    }
    if (exist === false) {
        
    }
}*/

