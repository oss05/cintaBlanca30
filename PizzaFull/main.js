let inpName = document.getElementById('inputname')
let inpBook = document.getElementById('inputbook')
let inpPizza = document.getElementById('inputpizza')

//Mostrar

let mostrarN = document.getElementById('mostrarname')
let mostrarB = document.getElementById('mostrarbook')
let mostrarP = document.getElementById('mostrarpizza')

//boton

let boton = document.getElementById('button')

//tarjeta

let tarjeta = document.getElementById('tarjeta')



const mostrarAll = ()=>{

    tarjeta.classList.remove('d-none')

    let textName = inpName.value
    let textBook = inpBook.value
    let textPizza = inpPizza.value


    mostrarN.innerHTML = textName
    mostrarB.innerHTML = textBook
   

    if(textPizza === "si"){
        mostrarP.innerHTML = ":D"
    }else if(textPizza==="no"){
        mostrarP.innerHTML = "D:"
    }else{
        mostrarP.innerHTML= "No entendi"
    }



}

boton.addEventListener('click', mostrarAll)