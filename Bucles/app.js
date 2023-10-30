//Ejercicio 1

const numeroMax = Number(prompt("Ingrese un número del 1 al 100: "))
if (numeroMax >= 1 && numeroMax <= 100) {
    for (let index = numeroMax; index > 0; index--) {
        console.log(index)
    }
}else{
    alert("El número no es válido.")
}