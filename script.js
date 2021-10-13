const api_url = 'https://pokeapi.co/api/v2/pokemon/'

const pageName = document.querySelector('.pokemon-name')
const pageType = document.querySelector('.pokemon-type')      
const pageNumber = document.querySelector('.pokemon-number')
const pagePicture = document.querySelector('.pokemon-picture')
const pageTypePicture = document.querySelector('.pokemon-type-picture')
const pageHp = document.querySelector('.stat-hp')
const pageAtt = document.querySelector('.stat-att')
const pageDef = document.querySelector('.stat-def')
const pageSpecAtt = document.querySelector('.stat-specatt')
const pageSpecDef = document.querySelector('.stat-specdef')
const pageSpeed = document.querySelector('.stat-speed')

const btnLeft = document.querySelector('.button-left')
const btnRandom = document.querySelector('.button-random')
const btnRight = document.querySelector('.button-right')

const formatPokemon = async function(data) {
    console.log(data)
    
    pageName.innerHTML = data.name;
    pageNumber.innerHTML = `No. ${data.id}`;
    pageType.innerHTML = `Type: ${data.types[0].type.name}`
    pagePicture.src = data.sprites.front_default;
    pageTypePicture.src = `${data.types[0].type.name}.png`;
    console.log(pageTypePicture.src);
    pageHp.innerHTML = `HP: ${data.stats[0].base_stat}`;
    pageAtt.innerHTML = `Attack: ${data.stats[1].base_stat}`;
    pageDef.innerHTML = `Defence: ${data.stats[2].base_stat}`;
    pageSpecAtt.innerHTML = `Special attack: ${data.stats[3].base_stat}`;
    pageSpecDef.innerHTML = `Special defence: ${data.stats[4].base_stat}`;
    pageSpeed.innerHTML = `Speed: ${data.stats[5].base_stat}`;
};

const getPokemon = async function(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    if (!response.ok) {
        console.log('Not successful!')
        console.log(response.statusText)
        throw new Error;
    } else {
        const data = await response.json()
        formatPokemon(data)
    };
};

btnLeft.addEventListener('click', () => {
    const id = parseInt(pageNumber.innerHTML.split(' ')[1]);
    if (id > 1) getPokemon(id-1);
});

btnRight.addEventListener('click', () => {
    const id = parseInt(pageNumber.innerHTML.split(' ')[1]);
    if (id < 649) getPokemon(id+1);
});

btnRandom.addEventListener('click', () => {
    const id = Math.floor(Math.random() * 650);
    getPokemon(id);
})

getPokemon(25);
