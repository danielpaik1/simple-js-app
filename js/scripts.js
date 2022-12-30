let pokemonRepository = (function () {

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
  ]

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  }

})()
console.log(pokemonRepository.getAll())

// for (let i = 0; 
//     i < pokemonList.length; i++) {
//     if (pokemonList[i].height > 0.5) {
//       document.write(pokemonList[i].name + " (" + pokemonList[i].height + " meter) " + " is a " + pokemonList[i].type + " type! It's a large pokemon.<br>")
//     }
//     else{
//       document.write(pokemonList[i].name + " (" + pokemonList[i].height + " meter) " + " is a " + pokemonList[i].type + " type! <br>")
//     }
//   }
pokemonList.forEach(function(pokemonList) {
  if (pokemonList.height > 0.5) { 
    console.log(pokemonList.name + " is " + pokemonList.height + " meters tall. Wow! Thats a big pokemon! " + " It is a " + pokemonList.type + "type.");
    }
  else{ 
    console.log(pokemonList.name + " is " + pokemonList.height + " meters tall " + " and is a " + pokemonList.type + "type.");
  }});
  