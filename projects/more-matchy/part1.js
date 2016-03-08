//Use this file to implement Part One of your project
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

var animal;
