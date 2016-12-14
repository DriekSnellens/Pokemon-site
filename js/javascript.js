function getPokemonByNameOrId() {
  $( document ).ready(function() {
    emptyPokeDex();
    $('#loadingSpinner').show();
    var BASE_URL = "http://pokeapi.co/api/v2/pokemon/";
    var input = document.getElementById('txtSearch').value;
    var pokemonURL = BASE_URL + input;
    $.getJSON(pokemonURL, function (pokemon) {

        document.getElementById('pokemonName').innerHTML = capitalizeFirstLetter(pokemon.name);
        setImageWithPokemonId(pokemon.id);
        setPokemonTypes(pokemon.types);
        $('#pokemonImage').addClass('imageFilled');
        $('#pokemonImage').show();
        $('#loadingSpinner').hide();
        setPokemonDescription(pokemon.id);
    });

  });
}

function emptyPokeDex() {
  document.getElementById('pokemonName').innerHTML = "";
  $('#type1').hide();
  $('#type2').hide();
  document.getElementById('pokemonImage').src = "";
  $('#pokemonImage').hide();
  $('#pokemonImage').removeClass('imageFilled');
  document.getElementById('pokemonDescription').innerHTML = "";
}

function setPokemonTypes(pokemonTypes) {
  if(pokemonTypes.length === 1) {
    $.each(pokemonTypes, function(i, item) {
      var typeNumber = 1;
      $('#type2').hide();
      document.getElementById('type' + typeNumber).innerHTML = item.type.name;
      switch(item.type.name) {
      case 'grass':
          $('#type' + typeNumber).css('background-color', '#78C850');
          break;
      case 'poison':
          $('#type' + typeNumber).css('background-color', '#A040A0');
          break;
      case 'fighting':
          $('#type' + typeNumber).css('background-color', '#C03028');
          break;
      case 'normal':
          $('#type' + typeNumber).css('background-color', '#A8A878');
          break;
      case 'fire':
          $('#type' + typeNumber).css('background-color', '#F08030');
          break;
      case 'water':
          $('#type' + typeNumber).css('background-color', '#6890F0');
          break;
      case 'flying':
        $('#type' + typeNumber).css('background-color', '#A890F0');
        break;
      case 'electric':
          $('#type' + typeNumber).css('background-color', '#F8D030');
          break;
      case 'ground':
          $('#type' + typeNumber).css('background-color', '#E0C068');
          break;
      case 'psychic':
          $('#type' + typeNumber).css('background-color', '#F85888');
          break;
      case 'rock':
          $('#type' + typeNumber).css('background-color', '#B8A038');
          break;
      case 'ice':
          $('#type' + typeNumber).css('background-color', '#98D8D8');
          break;
      case 'bug':
          $('#type' + typeNumber).css('background-color', '#A8B820');
          break;
      case 'dragon':
          $('#type' + typeNumber).css('background-color', '#7038F8');
          break;
      case 'ghost':
          $('#type' + typeNumber).css('background-color', '#705898');
          break;
      case 'dark':
          $('#type' + typeNumber).css('background-color', '#705848');
          break;
      case 'steel':
          $('#type' + typeNumber).css('background-color', '#B8B8D0');
          break;
      case 'fairy':
          $('#type' + typeNumber).css('background-color', '#EE99AC');
          break;
      case '???':
          $('#type' + typeNumber).css('background-color', '#68A090');
          break;
  };
    });
    $('#type1').show();
  }
  else {
    $.each(pokemonTypes, function(i, item) {
      var typeNumber = i + 1;
      document.getElementById('type' + typeNumber).innerHTML = item.type.name;
      switch(item.type.name) {
      case 'grass':
          $('#type' + typeNumber).css('background-color', '#78C850');
          break;
      case 'poison':
          $('#type' + typeNumber).css('background-color', '#A040A0');
          break;
      case 'fighting':
          $('#type' + typeNumber).css('background-color', '#C03028');
          break;
      case 'normal':
          $('#type' + typeNumber).css('background-color', '#A8A878');
          break;
      case 'fire':
          $('#type' + typeNumber).css('background-color', '#F08030');
          break;
      case 'water':
          $('#type' + typeNumber).css('background-color', '#6890F0');
          break;
      case 'flying':
        $('#type' + typeNumber).css('background-color', '#A890F0');
        break;
      case 'electric':
          $('#type' + typeNumber).css('background-color', '#F8D030');
          break;
      case 'ground':
          $('#type' + typeNumber).css('background-color', '#E0C068');
          break;
      case 'psychic':
          $('#type' + typeNumber).css('background-color', '#F85888');
          break;
      case 'rock':
          $('#type' + typeNumber).css('background-color', '#B8A038');
          break;
      case 'ice':
          $('#type' + typeNumber).css('background-color', '#98D8D8');
          break;
      case 'bug':
          $('#type' + typeNumber).css('background-color', '#A8B820');
          break;
      case 'dragon':
          $('#type' + typeNumber).css('background-color', '#7038F8');
          break;
      case 'ghost':
          $('#type' + typeNumber).css('background-color', '#705898');
          break;
      case 'dark':
          $('#type' + typeNumber).css('background-color', '#705848');
          break;
      case 'steel':
          $('#type' + typeNumber).css('background-color', '#B8B8D0');
          break;
      case 'fairy':
          $('#type' + typeNumber).css('background-color', '#EE99AC');
          break;
      case '???':
          $('#type' + typeNumber).css('background-color', '#68A090');
          break;
  };
    });
    $('#type1').show();
    $('#type2').show();
  }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function setPokemonDescription(id) {
  $('#descriptionLoader').show();
  var BASE_URL = 'http://pokeapi.co/api/v2/pokemon-species/';
  var speciesURL = BASE_URL + id;
  console.log(speciesURL);
  $.getJSON(speciesURL, function (species) {

    for(var i = 0; i < species.flavor_text_entries.length; i++)
    {
      console.log(species.flavor_text_entries[i].language.name.toString());
      if(species.flavor_text_entries[i].language.name == 'en')
      {
        document.getElementById('pokemonDescription').innerHTML = species.flavor_text_entries[i].flavor_text;
        $('#descriptionLoader').hide();
        return;
      }
    }
  });
}

function setImageWithPokemonId(id){
  var BASE_URL = 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  var correctIdFormat = (id / 100);
  correctIdFormat = correctIdFormat.toString().replace(".", "")
  var imageURL = BASE_URL + correctIdFormat + '.png';
  document.getElementById('pokemonImage').src = imageURL;
}

function pauseMusic() {
  document.getElementById('player').pause();
  document.getElementById('play').style.display='none';
  document.getElementById('pause').style.display='block';
}

function playMusic() {
  document.getElementById('player').play();
  document.getElementById('play').style.display='block';
  document.getElementById('pause').style.display='none';
}

function setHalfVolume() {
    var myAudio = document.getElementById("player");
    myAudio.volume = 0.1;
}




//link voor afbeeldingen: http://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png     -----id moet in hondersten
