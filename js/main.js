var elPokemonList = document.querySelector('.pokemon__list');
var elForm = document.querySelector('.pokemon__form');
var elPokemonInputFirst = document.querySelector('.pokemon__input--first');
var elPokemonInputSecond = document.querySelector('.pokemon__input--second');
var elPokemonInputThird = document.querySelector('.pokemon__input--third');
var elPokemonInputFourth = document.querySelector('.pokemon__input--fourth');
var elPokemonInputFifth = document.querySelector('.pokemon__input--fifth');



function addNewPokemon(pokemonImg, pokemonName, pokemonType, pokemonWeight, pokemonHeight, pokemonArr){
    var elPokemonInputFirst = pokemonImg.value.trim();
    var elPokemonInputSecond = pokemonName.value.trim();    
    var elPokemonInputThird = pokemonType.value.trim();
    var elPokemonInputFourth = pokemonWeight.value.trim();
    var elPokemonInputFifth = pokemonHeight.value.trim();
    
    var newPokemon = ({
        img: elPokemonInputFirst,
        name: elPokemonInputSecond,
        type: elPokemonInputThird,
        weight: elPokemonInputFourth,
        height: elPokemonInputFifth
    })
    
    pokemonArr.unshift(newPokemon)
}


function handleFormSubmit(evt) {
    evt.preventDefault();
    
    // Adding new pokemon card
    addNewPokemon(
        elPokemonInputFirst,
        elPokemonInputSecond,
        elPokemonInputThird,
        elPokemonInputFourth,
        elPokemonInputFifth,
        pokemons);
        
        renderPokemons(pokemons);
        
        // Clear inputs
        elPokemonInputSecond.value = null;
        elPokemonInputThird.value = null;
        elPokemonInputFourth.value = null;
        elPokemonInputFifth.value = null;
        
    }
    
    
    
    
    elForm.addEventListener('submit', handleFormSubmit);   
    
    
    function renderPokemons(_pokemons) {
        
        elPokemonList.innerHTML = null;
        
        for (var i = 0; i < _pokemons.length; i++) {
            // Create pokemon's elements
            var newLi = document.createElement('li');
            var newImg = document.createElement('img');
            var newHeading = document.createElement('heading');
            var newParagraph = document.createElement('paragraph');
            var newUL = document.createElement('ul');
            var newStrong = document.createElement('strong')
            var newSecondUl = document.createElement('ul')
            var newSecondLi = document.createElement('li');
            var newThirdLi = document.createElement('li');
            
            
            // Set attributes
            newLi.setAttribute('class', 'pokemon__item');
            newImg.setAttribute('class', 'pokemon__img mx-auto');
            newImg.setAttribute('src', _pokemons[i].img);
            newImg.setAttribute('alt', _pokemons[i].name + ', img');
            newImg.setAttribute('width', 157);
            newImg.setAttribute('heigth', 157);
            newHeading.setAttribute('class', 'pokemon__heading');
            newParagraph.setAttribute('class', 'pokemon__paragraph');
            newSecondUl.setAttribute('class', 'pokemon__infos');
            newSecondLi.setAttribute('class', 'pokemon__info');
            newThirdLi.setAttribute('class', 'pokemon__info');
            
            
            
            //  Assign values 
            newHeading.textContent = _pokemons[i].name;
            newParagraph.textContent = _pokemons[i].type;
            newSecondLi.textContent = _pokemons[i].weight
            newThirdLi.textContent = _pokemons[i].height
            
            
            
            
            
            // Append
            newLi.appendChild(newImg);
            newLi.appendChild(newStrong);
            newLi.appendChild(newHeading);
            newLi.appendChild(newParagraph);
            newLi.appendChild(newSecondUl)
            newSecondUl.appendChild(newSecondLi)
            newSecondUl.appendChild(newThirdLi)
            
            
            
            elPokemonList.appendChild(newLi);
        }
    }
    
    renderPokemons(pokemons);    
    
    
    
    
    
    
    
    
    
    
    
    