// Ejercicio 1

let miNombre = "Salomón"

// Ejercicio 2

let miApellido = "Gutiérrez"

// Ejercicio 3

let miEdad = 24

// Ejercicio 4

let miMascota = "Lucy"

// Ejercicio 5

let edadMascota = 4

// Ejercicio 6

console.log(miNombre, miApellido, miEdad, miMascota, edadMascota)

// Ejercicio 7

let nombreCompleto = miNombre + " " + miApellido

// Ejercicio 8

let textoPresentacion = `Hola, soy ${nombreCompleto} y tengo ${miEdad} años. También tengo una perrita de ${edadMascota} años llamada ${miMascota}`
console.log(textoPresentacion)

// Ejercicio 9

let sumaEdades, restaEdades, productoEdades, divisionEdades
sumaEdades = miEdad + edadMascota
console.log(sumaEdades)
restaEdades = miEdad - edadMascota
console.log(restaEdades)
productoEdades = miEdad * edadMascota
console.log(productoEdades)
divisionEdades = miEdad / edadMascota
console.log(divisionEdades)

// Ejercicio 10

let alumno = {
    nombre: miNombre,
    apellido: miApellido,
    edad: miEdad,
    tieneMascota: true,
    habilidades: ["HTML", "CSS", "Javascript"]
}
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.tieneMascota)
console.log(alumno.habilidades)

// Ejercicio 11

let mascota = {
    nombre: miMascota,
    edad: edadMascota,
    especie: "Perro",
    raza: "Bull Terrier",
    actividades: ["Comer", "Caminar", "Jugar", "Dormir"]
}
console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.especie)
console.log(mascota.raza)
console.log(mascota.actividades)

// Ejercicio 12

let frutas = ["Mango", "Fresa", "Mandarina", "Manzana", "Piña"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

// Ejercicio 13

let soyMayorDeEdad = Number(prompt("Ingrese su edad")) >= 18
console.log("Soy mayor de edad " + soyMayorDeEdad)

// Ejercicio 14

let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

// Ejercicio 15

let familia = [
    pepe = {
        nombre: "Pepe",
        edad: 22,
        rol: "Hijo mayor"
    }, pepa = {
        nombre: "Pepa",
        edad: 20,
        rol: "Hija mayor"
    }, marcela = {
        nombre: "Marcela",
        edad: 17,
        rol: "Hija menor"
    },
    maria = {
        nombre: "María",
        edad: 53,
        rol: "Mamá"
    },
    jose = {
        nombre: "José",
        edad: 56,
        rol: "Papá"
    }]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

// Ejercicio 16

textoAleatorio = `${familia[4].nombre} se comió ${numeros[3]} ${frutas[1]}s`
console.log(textoAleatorio)

// Ejercicio 17

let edad1, edad2
edad1 = prompt("Ingresa tu edad")
edad2 = prompt("Ingresa la edad de tu compañero")
let edadesIguales = "Mi edad es igual a la de mi compañero: " + (edad1 == edad2)
let soyMayor = "Mi edad es mayor a la de mi compañero: " + (edad1 > edad2)
let soyMenor = "Mi edad es menor a la de mi compañero: " + (edad1 < edad2)
console.log(edadesIguales)
console.log(soyMayor)
console.log(soyMenor)

// Ejercicio 18

let edadSubir, estatura, puedeSubir
edadSubir = prompt("Ingrese la edad: ")
estatura = prompt("Ingrese la estatura: ")
puedeSubir = "Puede subir a la atracción: " + ((edadSubir > 6) && (estatura >= 120))
console.log(puedeSubir)

// Ejercicio 19

let pase = prompt("Ingrese el tipo de pase: VIP, Normal, Limitado")
let saldo = prompt("Ingrese el saldo (entre 0 y 5000): ")
let puedePasar = "La persona puede pasar " + (pase == "VIP" || saldo > 1000)
console.log(puedePasar)
