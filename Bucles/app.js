// // Ejercicio 1

// const numeroMax = Number(prompt("Ingrese un número del 1 al 100: "))
// if (numeroMax >= 1 && numeroMax <= 100) {
//     for (let index = numeroMax; index > 0; index--) {
//         console.log(index)
//     }
// } else {
//     alert("El número no es válido.")
// }

// // Ejercicio 2

// const numeroTabla = Number(prompt("Ingrese un número del 1 al 10: "))
// if (numeroTabla >= 1 && numeroTabla <= 10) {
//     for (let index = 1; index <= 10; index++) {
//         console.log(`${index} x ${numeroTabla} = ${index * numeroTabla}`)
//     }
// }

// // Ejercicio 3

let input
let suma = 0
while (input != 0) {
    input = Number(prompt("Ingrese un número para sumarlo, ingrese 0 para salir."))
    if (input == 0) {
        console.log(suma)
    }
    else
        suma += input
}

// Ejercicio 4
let suma2 = 0
do {
    input = Number(prompt("Ingrese un número para sumarlo, ingrese 0 para salir."))
    if (input == 0) {
        console.log(suma2)
        break
    }
    else
        suma2 += input
} while (input != 0)

// Ejercicio 5
let numeroIngresado = 0
let intentos = 0
do {
    numeroIngresado = Number(prompt("Adivine el número: "))
    intentos++
    if (numeroIngresado > suma)
        console.log("El número que ingresaste es mayor al número ganador.")
    else if (numeroIngresado < suma)
        console.log("El número que ingresaste es menor al número ganador.")
    else if (numeroIngresado == suma)
        console.log(`¡Haz adivinado! El número secreto es: ${suma}. Haz realizado ${intentos} intentos.`)
    else
        console.log("Por favor ingrese un número válido.")
} while (numeroIngresado != suma)

// // Ejercicio 6

// let dividendo = Number(prompt("Ingrese el número a dividir: "))

// for (let index = dividendo; index > 0; index--) {
//     if (dividendo % index == 0) {
//         console.log(index)
//     }
// }

// // Ejercicio 7
// function sonarCampana() {
//     return "Ding Dong, "
// }

// campanazos = ""
// for (let index = 0; index < 5; index++) {
//     campanazos += sonarCampana()
// }
// console.log(campanazos)

// // Ejercicio 8

// const fechaLimite = "1997-08-03"
// const fechas = ["1984-18-02", "1990-03-02", "1973-15-07", "2024-21-10", "2001-01-09"]

// console.log("Expiradas: ")
// for (const fecha of fechas) {
//     if (fecha >= fechaLimite)
//         console.log(fecha)
// }

// // Ejercicio 9

// let colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"]

// for (const color of colores) {
//     console.log(color)
// }

// // Ejercicio 10

// function imprimirColores(colores) {
//     for (const color of colores) {
//         console.log(color)
//     }
// }

// imprimirColores(colores)

// // Ejercicio 11

// let numeros = [5, 7, 10, 13, 17]
// for (const numero of numeros) {
//     console.log(`El número es ${numero} y su doble es ${numero * 2}`)
// }

// // Ejercicio 12

// let familia = [{
//     nombre: "Juan", apellido: "Pérez", edad: 25, integrante: "Padre"
// },
// {
//     nombre: "María", apellido: "González", edad: 25, integrante: "Madre"
// },
// {
//     nombre: "Julián", apellido: "Pérez", edad: 1, integrante: "Hijo"
// },
// {
//     nombre: "Cocolate", apellido: "Pérez", edad: 4, integrante: "Mascota"
// }]

// function saludarFamilia(familia) {
//     for (const miembro of familia) {
//         console.log(`Hola soy ${miembro.nombre} ${miembro.apellido} (${miembro.integrante}) y tengo ${miembro.edad} años.`)
//     }
// }
// saludarFamilia(familia)

// // Ejercicio 13

// const estudiante = {
//     nombre: "Salomon",
//     apellido: "Gutiérrez",
//     esColombiano: true,
//     edad: 24,
//     estudios: "Secundario"
// }
// for (const key in estudiante) {
//     if (Object.hasOwnProperty.call(estudiante, key)) {
//         console.log(key)
//     }
// }

// // Ejercicio 14

// for (const key in estudiante) {
//     if (Object.hasOwnProperty.call(estudiante, key)) {
//         console.log(estudiante[key])
//     }
// }

// // Ejercicio 15

// let numeroEntrada
// let sumaPares = 0
// let sumaImpares = 0

// while (numeroEntrada != 0) {
//     numeroEntrada = Number(prompt("Ingrese un número par o impar, ingrese 0 para salir: "));

//     (numeroEntrada % 2 == 0) ? (sumaPares += numeroEntrada) : (sumaImpares += numeroEntrada)
// }

// console.log("Pares: " + sumaPares)
// console.log("Impares: " + sumaImpares)

// // Ejercicio 16

// let numeros2 = [11, 201, 32, 42, 502, 626, 777, 88, 12, 100]
// function imprimirMayor(numeros) {
//     let mayor = numeros[0]
//     for (const numero of numeros) {
//         if (numero > mayor)
//             mayor = numero
//     }
//     console.log(mayor)
// }
// imprimirMayor(numeros2)

// // // Ejercicio 17

// const series = [
//     {
//         nombre: "Stranger Things",
//         genero: ["Terror", "Fantasía", "Suspenso"]
//     },
//     {
//         nombre: "You",
//         genero: ["Suspenso", "Drama", "Thriller"]
//     },
//     {
//         nombre: "Lupin",
//         genero: ["Acción", "Comedia", "Fantasía"]
//     }
// ]

// const generos = series => {
//     let generosAux = []
//     for (const serie of series) {
//         generosAux.push(serie.genero)
//     }
//     return generosAux
// }

// console.log(generos(series))

// // // Ejercicio 18

// const generosOpt = series => {
//     let generosAux = []
//     for (const serie of series) {
//         for (const genero of serie.genero) {
//             if (!generosAux.includes(genero)) {
//                 generosAux.push(genero)
//             }
//         }
//     }
//     return generosAux
// }
// console.log(generosOpt(series))

// // // Ejercicio 19

// const consulta = prompt("Ingrese el género a buscar")
// function buscarGenero(consulta) {
//     if (generosOpt(series).includes(consulta)) {
//         console.log("Existe una serie con ese género.")
//     } else {
//         console.log("No existe una serie con ese género.")
//     }
// }
// buscarGenero(consulta)