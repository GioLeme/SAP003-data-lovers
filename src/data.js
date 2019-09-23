function handleFilters() {
  const filteredPokemons = filterByType($pokemonTypes.value);
  const orderedPokemons = orderByAlphabet($orderByAlphabet.value, filteredPokemons);
  list(orderedPokemons);
  const searchPokemons = searchBy($search.value, orderedPokemons);
  list(searchPokemons);
};

function filterByType(typeToFilter) {
  if (typeToFilter === "") {
    return [...pokemonList]
  } else {
    const result = pokemonList.filter(pokemon => {
      return (pokemon.type.includes(typeToFilter))
    });
    return result
  }
}

function orderByAlphabet(orderBy, orderedPokemons) {
  const result = orderedPokemons;
  if (orderBy === "") {
    return result
  }

  if (orderBy === "sortAscending") {
    return result.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
    })
  }
  if (orderBy === "sortDescending") {
    return result.sort(function (a, b) {
      if (a.name > b.name) {
        return -1
      }
    })
  }

} 
function searchBy(searchPokemons, orderedPokemons) {
  const result = orderedPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().match(searchPokemons.toLowerCase())
  });
  console.log(result)
  return result
}


function list(pokemons) {
  document.getElementById('pokemonList').innerHTML = ""
  pokemons.forEach((pokemon) => {
    document.getElementById('pokemonList').innerHTML += `
    <div class="card">
    <img class="pokemon-image" src="${pokemon.img}" alt="pokemon">
    <div class="name-and-number">
    <p class="name"> ${pokemon.name}<p>
    <p class="pokemonNumber"># ${pokemon.num} </p>
    </div>
    <div class="pokemonInfo">
    <p class="element-title">Element:</p>

    <div class="elements" id="elements">
    ${listElements(pokemon.type)}
    </div>

    
    </div>
    </div>

    `
  })  

}  

      
    
      
    


/*
window.pokemon={
}*/
