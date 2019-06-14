
// let titulo = document.getElementById('titulo')
// let parrafo = document.getElementById('parrafo')
// let button = document.getElementById('button')
// let input = document.getElementById('input')
// let mostrar = document.getElementById('mostrar')
// titulo.innerHTML = "Titulo cambiado"
// parrafo.innerHTML = "Perro pitbull"

// const cambio = ()=>{
//     titulo.innerHTML = "Titulo cambiado"
// }

// button.addEventListener('click',cambio)

// button.addEventListener('click', ()=>{
//     console.log("Si funciona")
// })

// const inputM = ()=>{
//     let texto = input.value

//     mostrar.innerHTML = texto
// }

// button.addEventListener('click', inputM)




//Preguntar al usuario su nombre, su libro, pizza con piña o no
//mostrarlo en 3 etiquetas diferentes con un nuevo boton


//Inputs
let inpName = document.getElementById('inputname')
let inpBook = document.getElementById('inputbook')
let inpPizza = document.getElementById('inputpizza')

//Mostrar

let mostrarN = document.getElementById('mostrarname')
let mostrarB = document.getElementById('mostrarbook')
let mostrarP = document.getElementById('mostrarpizza')

//boton

let boton = document.getElementById('button')



const mostrarAll = ()=>{

    let textName = inpName.value
    let textBook = inpBook.value
    let textPizza = inpPizza.value


    mostrarN.innerHTML = textName
    mostrarB.innerHTML = textBook
    mostrarP.innerHTML = textPizza

}

boton.addEventListener('click', mostrarAll)