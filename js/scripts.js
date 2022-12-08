let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['grass',' poison']
    },
    {
        name: 'Pikachu',
        height: 0.4,
        type:['electricity',' speed']
    },
    {
        name: 'Charmander',
        height: 0.6,
        type: ['fire',' speed']
    },
];

for (let i = 0; 
    i < pokemonList.length; i++) {
    if (pokemonList[i].height > 0.5) {
      document.write(pokemonList[i].name + " (" + pokemonList[i].height + " meter) " + " is a " + pokemonList[i].type + " type! It's a large pokemon.<br>")
    }
    else{
      document.write(pokemonList[i].name + " (" + pokemonList[i].height + " meter) " + " is a " + pokemonList[i].type + " type! <br>")
    }
  }