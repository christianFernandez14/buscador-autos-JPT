
// Viendo que hay en auto
// console.log(autos);

// Variables
const resultado = document.querySelector('#resultado')


// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos()
})

// Funciones
function mostrarAutos() {
  autos.forEach(auto => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto
    const autoHTML = document.createElement('P')

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color} 
    
    `
    // Insertamos en el HTML
    resultado.appendChild(autoHTML)
  })

}














/** Comentarios extras:
 * 
 * 1.- Podemos ver que tenemos un array de autos que simula una DB, donde existe 19 registros
 * 
 * 2.- el DOMContentLoaded, lo vamos a trabajar un poco diferente, solo haremos el llamado de una funcion
 * 
 */