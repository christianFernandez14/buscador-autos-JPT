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
  mostrarAutos(autos)
  llenarSelect()
})

// Event listener para cada uno de los Select
marca.addEventListener('change', event => {
  datosBusqueda.marca = event.target.value;
  filtrarAuto();

});

year.addEventListener('change', event => {
  datosBusqueda.year = parseInt(event.target.value);

  filtrarAuto();

});

minimo.addEventListener('change', event => {
  datosBusqueda.precioMin = event.target.value;

  filtrarAuto();

});

maximo.addEventListener('change', event => {
  datosBusqueda.precioMax = event.target.value;

  filtrarAuto();

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
function mostrarAutos(autos) {
  limpiarHTML(); // Elimina el HTML previo

  autos.forEach(auto => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto
    const autoHTML = document.createElement('P')

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}     
    `
    resultado.appendChild(autoHTML)
  })

}

// Funcion que limpiara el HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
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

  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)

  // console.log(resultado);
  mostrarAutos(resultado)

}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda
  if (marca) {
    return auto.marca === marca;

  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda

  if (year) {
    return auto.year === year;
  }
  return auto;
}

function filtrarMinimo(auto) {

  const { precioMin } = datosBusqueda
  // console.log(precioMin);

  if (precioMin) {
    return auto.precio >= precioMin;
  }
  return auto;
}

function filtrarMaximo(auto) {

  const { precioMax } = datosBusqueda
  // console.log(precioMax);

  if (precioMax) {
    return auto.precio <= precioMax;
  }
  return auto;
}




/** Comentarios extras:
 * 
 * 1.- Siguiendo con las funcionalidades, debes seguir llamandola en los subsiguientes listener
 * 
 * 2.- Repetimos la logica para la logica del select minimo y maximo
 * 
 */