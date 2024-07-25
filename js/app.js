// Variables
const resultado = document.querySelector('#resultado')

const year = document.querySelector('#year')

const max = new Date().getFullYear();
const min = max - 10

// Viendo si esta haciendo la operación bien.
console.log(max, min);

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos()

  // Llena las opciones de años
  llenarSelect()
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

// Genera los años del Select
function llenarSelect() {

  // Trabajando la cantidad de años que podria ver esta agencia de carros
  for (let i = max; i >= min; i--) {
    // Creamos un option, ya que lo insertaremos en el select
    const option = document.createElement('OPTION');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);


    // console.log(i);
  }

}



/** Comentarios extras:
 * 
 * 1.- En la pagina se percato que no habia data de años, por lo tanto lo llenaremos con puro JS.
 * 
 * 2.- Tomamos la opcion de new Date(), para tomar el año actual y de ahi partir para atras.
 * 
 * 3.- La idea del punto anterior, es que si en un futuro se esta en otro año, no es necesario hacer el cambio manual
 * 
 * 4.- Luego de verificar que tenemos el año correcto, trabajamos con un rango de 10 años e iteramos sobre ese rango con un for
 * 
 * 5.- por cada iteracion no solo debo mostrar su valor, si no tambien el atributo valur, ya que el elemento creado "option", toma lo que esta dentro de value.
 * 
 * 6.- finalizado esto, podemos ver que se inyectaron los valores dentro del elemento tomado arriba ("year") y con el appendChild, calsa perfecto.
 * 
 * 
 * 
 */