//Ejercicio 1

function sumar() {
    console.log(100 * 20)
}
//Ejercicio 2

sumar()

//Ejercicio 3

function sumar2(numero1, numero2) {
    console.log(numero1 * numero2)
}

//Ejercicio 4

let numeroA = 100
let numeroB = 20

sumar2(numeroA, numeroB)

//Ejercicio 5

function sumar3(numero1, numero2) {
    const resultado = numero1 * numero2
    return resultado
}

//Ejercicio 6

const sumarAnon = function (numero1, numero2) {
    const resultado = numero1 * numero2
    return resultado
}

sumarAnon()

//Ejercicio 7

const flecha = (numero1, numero2) => (numero1 * numero2)
console.log(flecha(numeroA, numeroB))

//Ejercicio 8

function saludar(nombre) {
    console.log("Hola, mi nombre es " + nombre)
}

saludar("Pedro")

//Ejercicio 9

var producto = function (num1, num2) {
    return num1 * num2
}

console.log(producto(3, 8))

//Ejercicio 10

function area(base, altura) {
    return base * altura / 2
}

function perimetro(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

console.log("El área del triángulo es: " + area(13, 20))
console.log("El perímetro del triángulo es: " + perimetro(12, 16, 8))

//Ejercicio 11

const totalCompra = (precio, cantidad) => {
    let descuento = 0
    const total = precio * cantidad
    if (cantidad >= 10) {
        descuento = total * 0.1
    } else if (cantidad >= 20) {
        descuento = total * 0.2
    }
    return total - descuento
}
const precio = 10
const cantidad = 20
console.log(`Precio por unidad: ${precio}
Cantidad: ${cantidad}
Total a pagar: ${totalCompra(precio, cantidad)}`)

//Ejercicio 12

function esMayorDeEdad(edad) { return (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad." }
console.log(esMayorDeEdad(18))

//Ejercicio 13

const impuestoAPagar = (ingreso) => {
    if (ingreso <= 10000) {
        return ingreso * 0.1
    } else if (ingreso > 10000) {
        if (ingreso <= 20000) {
            return ingreso * 0.15
        } else { return ingreso * 0.2 }
    }
}

console.log(`Total impuesto a pagar: $${impuestoAPagar(22000)}`)

//Ejercicio 14

function diaLaboral(numero) {
    switch (numero) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es día laboral."
            break
        case 6:
        case 7:
            return "Es fin de semana."
            break
        default: return "Ingrese un número válido"
    }
}

console.log(diaLaboral(7))

//Ejercicio 15

function registro(nombre) {
    if (nombre == "" || nombre == null) {
        console.error("El nombre no puede estar vacío.")
        return null
    }
    const apellido = prompt(`Bienvenido ${nombre}, por favor ingrese su apellido: `)
    if (apellido == "" || apellido == null) {
        console.error("El apellido no puede estar vacío.")
        return null
    }
    const edad = Number(prompt(`${nombre} ${apellido}, ingrese su edad: `))
    if (isNaN(edad) || edad <= 0 || edad == undefined) {
        console.error("La edad debe ser un número mayor a 0 y no debe estar vacía.")
        return null
    }
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
    console.table(usuario)
}

registro(prompt("Ingrese su nombre: "))

//Ejercicio 16

const saludar2 = (nombre) => "Hola mi nombre es " + nombre
const calcularEdad = (añoNacimiento) => {
    const añoActual = new Date().getFullYear()
    return añoActual - añoNacimiento
}
function presentarse() {
    alert(`${saludar2(prompt("Bienvenido, por favor ingrese su nombre:"))} y tengo ${calcularEdad(Number(prompt("Ingrese su año de nacimiento: ")))} años.`)
}

presentarse()