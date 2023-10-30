//Ejercicio 1

const numeroMax = Number(prompt("Ingrese un número del 1 al 100: "))
if (numeroMax >= 1 && numeroMax <= 100) {
    for (let index = numeroMax; index > 0; index--) {
        console.log(index)
    }
} else {
    alert("El número no es válido.")
}

//Ejercicio 2

const numeroTabla = Number(prompt("Ingrese un número del 1 al 10: "))
if (numeroTabla >= 1 && numeroTabla <= 10) {
    for (let index = 1; index <= 10; index++) {
        console.log(`${index} x ${numeroTabla} = ${index * numeroTabla}`)
    }
}

//Ejercicio 3

