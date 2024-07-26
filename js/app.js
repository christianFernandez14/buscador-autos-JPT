const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const contenedor = document.querySelector('.contenedor')

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

document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos)
  llenarSelect()
})

marca.addEventListener('change', event => {
  datosBusqueda.marca = event.target.value;
  filtrarAuto();

});

year.addEventListener('change', event => {
  datosBusqueda.year = parseInt(event.target.value);

  filtrarAuto();

});

minimo.addEventListener('change', event => {
  datosBusqueda.precioMin = parseInt(event.target.value);

  filtrarAuto();

});

maximo.addEventListener('change', event => {
  datosBusqueda.precioMax = parseInt(event.target.value);

  filtrarAuto();

});

puertas.addEventListener('change', event => {
  datosBusqueda.puertas = parseInt(event.target.value);

  filtrarAuto();

});

transmision.addEventListener('change', event => {
  datosBusqueda.transmision = event.target.value;

  filtrarAuto();

});

color.addEventListener('change', event => {
  datosBusqueda.color = event.target.value;

  filtrarAuto();

})

function mostrarAutos(autos) {
  limpiarHTML();

  autos.forEach(auto => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto
    const autoHTML = document.createElement('P')

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}     
    `
    resultado.appendChild(autoHTML)
  })

}

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
    .filter(filtarPuertas)
    .filter(filtarTransmision)
    .filter(filtarColor)

  if (resultado.length) {
    mostrarAutos(resultado)

  } else {
    noResultado();
  }

}

function noResultado() {
  limpiarHTML();

  const noResultados = document.createElement('DIV')

  noResultados.classList.add('alerta', 'error')
  noResultados.textContent = 'No hay resultados, intenta con otros terminos de busquedas'
  contenedor.appendChild(noResultados)

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

  if (precioMin) {
    return auto.precio >= precioMin;
  }
  return auto;
}

function filtrarMaximo(auto) {
  const { precioMax } = datosBusqueda

  if (precioMax) {
    return auto.precio <= precioMax;
  }
  return auto;
}

function filtarPuertas(auto) {
  const { puertas } = datosBusqueda

  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}

function filtarTransmision(auto) {
  const { transmision } = datosBusqueda

  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

function filtarColor(auto) {
  const { color } = datosBusqueda

  if (color) {
    return auto.color === color;
  }
  return auto;
}

