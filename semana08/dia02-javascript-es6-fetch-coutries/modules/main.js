// console.log("hola")

const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones';

let coutryData = []

const seachInput = document.querySelector('.app__input')
const filterSelect = document.querySelector('.app__filter')


// function fetchCoutries (){
//     return fetch(url)
//     .then(response => response.json())
//     .catch(err => console.log(err))
// }

// fetchCoutries()
// .then(data => console.log(data))

seachInput.addEventListener('input', (event) => {
    const value = event.target.value
    // const value = seachInput.value
    console.log(value)
})


// TODO: Usar async/await para la funcion fetchCoutries

const fetchCoutriesAsync = async () =>{
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error('ERROR:',respuesta.status)
        }
        const json = await respuesta.json()
        return json
        
    } catch (error) {
        console.log(error)
    }
}

const renderCoutries = (coutries = []) =>{
    // console.log(coutries)
    const coutryListElement = document.querySelector('.app__list')

    let coutryList =''

    coutries.forEach(country => {
        coutryList += `
        <div class="country">
    <img class="country__flag" src="${country.flags.png}" alt="${country.flags.alt} />
    <div class="country__wrapper">
      <h2 class="country__title">${country.name.common}</h2>
      <div class="country__description">
        <strong>Population:</strong> ${country.population}
      </div>
      <div class="country__description">
        <strong>Region:</strong> ${country.region}
      </div>
      <div class="country__description">
        <strong>Capital:</strong> ${country.capital}
      </div>
    </div>
  </div>
        `;
    })
    coutryListElement.innerHTML = coutryList
}

// DOMContentLoaded -> Es un evento del navegador que espera a que el dom este cargado

document.addEventListener('DOMContentLoaded', async () =>{

 const data = await fetchCoutriesAsync();
 coutryData = data;
 renderCoutries(data);
});

// fetchCoutriesAsync()
// .then(data => renderCoutries(data))