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

// Generando un objeto con la busqueda.
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

console.log(datosBusqueda);

// Event listener para cada uno de los Select
marca.addEventListener('change', event => {
  // Almaceno el valor en su propiedad.
  datosBusqueda.marca = event.target.value

  // console.log(datosBusqueda);

})

year.addEventListener('change', event => {
  datosBusqueda.year = event.target.value
})
minimo.addEventListener('change', event => {
  datosBusqueda.precioMin = event.target.value
})
maximo.addEventListener('change', event => {
  datosBusqueda.precioMax = event.target.value
})
puertas.addEventListener('change', event => {
  datosBusqueda.puertas = event.target.value
})
transmision.addEventListener('change', event => {
  datosBusqueda.transmision = event.target.value
})
color.addEventListener('change', event => {
  datosBusqueda.color = event.target.value

  console.log(datosBusqueda);
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



/** Comentarios extras:
 * 
 * 1.- Una vez que revisamos que todo los campos de select, tienen datos, lo siguientes es guardar en algun lado la seleccion de cada no de ellos; y la mejor opcion es un "OBJETO"
 * 
 * 2.- Creamos un event listener por cada selector declarado y nos percatamos que todos tengan sus valores, para esto debes apuntar al evento que tiene la función callback en el listener
 * 
 * 
 * 
 */