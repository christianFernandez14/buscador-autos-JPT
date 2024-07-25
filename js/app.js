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
  // console.log('Filtrando...');

  // Recuerda que "autos" es el array que tiene todo los datos o db, como se comporta para este momentos
  const resultado = autos.filter(filtrarMarca)

  console.log(resultado);


}

function filtrarMarca(auto) {
  // console.log(auto);// Aca podemos ver que itera sobre todo el array
  if (datosBusqueda.marca) { // debemos vericiar que haya algun dato, por eso hacemos este condicional previo
    return auto.marca === datosBusqueda.marca;
  }
  // Este return aca, es para no perder la referencia, en caso de que el usuario no filtre por marca, el nuevo else.s
  return auto;
}



/** Comentarios extras:
 * 
 * 1.- Una vez los event ya escuchando, podemos trabajar con los filtros, para ello podemos usar una funcion que genere esa logica.
 * 
 * 2.- Pera esta funcion tendran otras funciones como parametros, y a esta la definimos como funcniones de alto nivel, la idea aca es que filtre por el selector que se encuentre el usuario dando click en el momento.
 * 
 * 3.- Una vez en esta funcion de alto nivel, debes cerciorarte que haya valor en esa propiedad, y de contrario retorna el array completo
 * 
 * 
 */