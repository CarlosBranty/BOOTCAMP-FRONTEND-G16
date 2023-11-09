
const inputPeso = document.querySelector('#inputPeso');
const inputAltura = document.querySelector('#inputAltura');
const btnCalcular = document.querySelector('#btnCalcular');
const divResultado = document.querySelector('#resultado')

btnCalcular.addEventListener('click', function(event){
    // console.log(event.target)

    const peso = inputPeso.value;
    const altura = inputAltura.value
    const indicedeMasaCorporal = peso / ((altura/100) * (altura/100))
    // console.log(indicedeMasaCorporal);
    let resultado = ''
    if(indicedeMasaCorporal <18.5){
        resultado = 'Baja'
    }
    else if(indicedeMasaCorporal >= 18.5 && indicedeMasaCorporal <=24.9){
        resultado='Normal'
    }
    else if(indicedeMasaCorporal > 25 && indicedeMasaCorporal<= 29.9){
        resultado='Sobrepeso'
    }
    else if(indicedeMasaCorporal >30){
        resultado='Obeso'
    }
    else{
        resultado = 'Datos Incorrectos'
    }

    divResultado.innerText = 'Tu indice de masa corporal es: '+indicedeMasaCorporal.toFixed(2) +' Esto es: '+ resultado
    // divResultado.textContent = 'Tu indice de masa corporal es: '+indicedeMasaCorporal +'Esto es: '+ resultado

})





// console.log(inputPeso, inputAltura)
// inputPeso.value = 77.8