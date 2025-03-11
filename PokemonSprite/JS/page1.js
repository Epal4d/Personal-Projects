function page_load(){

    const msgText = "# page1: Page load";

    console.log(msgText.toUpperCase());

}
const txtsearch = document.getElementById("txtsearch")

function fetchPokemon(){
    let msgText = "# Index Page: fetchPokemon"

    console.log(msgText.toUpperCase())

    const divPhotoSec = document.getElementById('divPhotoSec')

    if (divPhotoSec == null | divPhotoSec == undefined){
        msgText = "# Index Page: - divPhotoSec not found"
        console.log(msgText)
        return false;
    }

    divPhotoSec.innerText = msgText;

}
async function fetchData() {

    try{

        const  pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Not able to Fetch URL");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){

        console.error(error);
    }
}

function srchClear(){

    let msgText = "#Index Page: srchClear"
    console.log(msgText.toUpperCase());

    const pokemonName = document.getElementById("pokemonName")
    const pokemonSprite = document.getElementById("pokemonSprite")

    if(pokemonName == null | pokemonName == undefined) {
        msgText = "# pokemonName is null"
        return false;
    }

    pokemonName.value = "";
    pokemonName.focus();
    pokemonSprite.style.display = "none";
    console.log(res)
    alert("Please enter valid Text")
    
    
}

function InvSearch(){

    
}
