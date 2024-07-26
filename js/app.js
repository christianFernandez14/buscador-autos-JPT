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
  // Aca podemos filtrar por el año tambien 
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear)

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



/** Comentarios extras:
 * 
 * 1.- Podemos tambien hacer el parseInt de year, antes de guardarlo en nuestro objeto y que la funcion de filtarYear, no haga ese trabajo.
 * 
 * 2.- La funcion que muestra los autos, debo forzarla con un parametro, para reutilizar, ya que ella es la que me permite mostrar los elementos.
 * 
 * 3.- Pero hay un dato curioso, y es que muestra la busqueda, al final de los resultados y esto se da por le appendChild, por lo tanto debemos limpiar previo el HTML y luego mostrar el nuevo HTML con las busquedas aplicadas.
 * 
 * 4.- Se crea la funcion limpiarHTML con la logica más rapida (while)
 * 
 */