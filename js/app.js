// Variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

const resultado = document.querySelector('#resultado')
const max = new Date().getFullYear();
const min = max - 10

const datosBusqueda = {
  marca: '',
  year: '',
  precioMax: '',
  precioMin: '',
  puertas: '',
  transmision: '',
  color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos()
  llenarSelect()
})

// Event listener para cada uno de los Select
marca.addEventListener('change', event => {
  datosBusqueda.marca = event.target.value;
  filtrarAuto();

});

year.addEventListener('change', event => {
  datosBusqueda.year = event.target.value;

  filtrarAuto();

});

minimo.addEventListener('change', event => {
  datosBusqueda.precioMin = event.target.value;

});

maximo.addEventListener('change', event => {
  datosBusqueda.precioMax = event.target.value;

});

puertas.addEventListener('change', event => {
  datosBusqueda.puertas = event.target.value;

});

transmision.addEventListener('change', event => {
  datosBusqueda.transmision = event.target.value;

});

color.addEventListener('change', event => {
  datosBusqueda.color = event.target.value;

})

// Funciones
function mostrarAutos() {
  autos.forEach(auto => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto
    const autoHTML = document.createElement('P')

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}     
    `
    resultado.appendChild(autoHTML)
  })

}

function llenarSelect() {

  for (let i = max; i >= min; i--) {
    const option = document.createElement('OPTION');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }

}

function filtrarAuto() {
  // Aca podemos filtrar por el año tambien 
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear)

  console.log(resultado);

}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda
  if (marca) {
    return auto.marca === marca;

  }
  return auto;
}

function filtrarYear(auto) {
  // console.log(auto); // vemos que el array es el ya filtro Marca
  const { year } = datosBusqueda
  // console.log(typeof year); // Al incio nos nos traia informacion por que estabamos comparando string con number y usando el comparador strict
  // console.log(typeof auto.year); // number
  if (year) {
    return auto.year === parseInt(year);
  }
  return auto;
}



/** Comentarios extras:
 * 
 * 1.- Antes de continuar con los otros filtros, podemos mejorar un poco el codigo de filtrarMarca, haciendo destructuring.
 * 
 * 2.- Pera esta funcion tendran otras funciones como parametros, y a esta la definimos como funcniones de alto nivel, la idea aca es que filtre por el selector que se encuentre el usuario dando click en el momento.
 * 
 * 3.- Una vez en esta funcion de alto nivel, debes cerciorarte que haya valor en esa propiedad, y de contrario retorna el array completo
 * 
 * 
 */