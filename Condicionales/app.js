//Ejercicio 1, 2 y 3
let num1, num2
num1 = 5
num2 = 6
if (num1 > num2) {
    console.log("Los números son diferentes.")
    console.log(num1)
} else if (num1 < num2) {
    console.log("Los números son diferentes.")
    console.log(num2)
} else if (num1 == num2) {
    console.log("Los números son iguales.")
}
//Ejercicio 4
let fecha1 = "2018-9-2"
let fecha2 = "2023-5-7"
if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}.`)
}
else if (fecha1 < fecha2) {
    console.log(`La fecha ${fecha1} es menor que ${fecha2}.`)
} else {
    console.log("Las fechas son iguales.")
}
// if (fecha1.localeCompare(fecha2) == 1) {
//     console.log(`La fecha ${fecha1} es mayor que ${fecha2}.`)
// }
// else if (fecha1.localeCompare(fecha2) == -1) {
//     console.log(`La fecha ${fecha1} es menor que ${fecha2}.`)
// } else if (fecha1 === fecha2) {
//     console.log("Las fechas son iguales.")
// }

//Ejercicio 5
fecha1 = "2018-10-07"
fecha2 = "2018-02-17"
if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}.`)
}
else if (fecha1 < fecha2) {
    console.log(`La fecha ${fecha1} es menor que ${fecha2}.`)
} else {
    console.log("Las fechas son iguales.")
}

//Ejercicio 6
let dato1 = 5
let dato2 = 7
let dato3 = 9
if (dato1 > dato2 && dato1 > dato3) {
    console.log(`El número ${dato1} es el mayor.`)
} else if (dato2 > dato1 && dato2 > dato3) {
    console.log(`El número ${dato2} es el mayor.`)
} else {
    console.log(`El número ${dato3} es el mayor.`)
}

//Ejercicio 7
// switch (prompt("Ingrese un color:")) {
//     case "rojo": {
//         alert("El color de la pasión.")
//     } break
//     case "azul": {
//         alert("El color del mar.")
//     } break
//     case "verde": {
//         alert("El color de la naturaleza.")
//     } break
//     default: alert("No se ha seleccionado un color válido.")
// }

//Ejercicio 8
let valor1 = Number(prompt("Ingrese el valor del primer número (del 1 al 100): "))
let valor2 = Number(prompt("Ingrese el valor segundo número (del 1 al 100): "))
if (valor1 >= 1 && valor1 <= 100 && valor2 >= 1 && valor2 <= 100) {
    switch (prompt("Ingrese una operación")) {
        case "suma": {
            alert(`La suma de ${valor1} + ${valor2} es ${valor1 + valor2}`)
        } break
        case "resta": {
            alert(`La resta de ${valor1} - ${valor2} es ${valor1 - valor2}`)
        } break
        case "multiplicación": {
            alert(`La multiplicación de ${valor1} * ${valor2} es ${valor1 * valor2}`)
        } break
        case "división": {
            alert(`La división de ${valor1} / ${valor2} es ${valor1 / valor2}`)
        } break
        default: {
            alert("Ingrese una operación válida")
        }
    }
} else {
    alert("Por favor ingrese sólo valores entre 1 y 100")
}

//Ejercicio 9
let persona1 = {
    nombre: "Juan",
    edad: 39,
    estatura: 1.19
}
let persona2 = {
    nombre: "Marta",
    edad: 17,
    estatura: 1.65
}
if (persona1.estatura > persona2.estatura) {
    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} tiene más estatura y es mayor que ${persona2.nombre}`)
    } else {
        console.log(`${persona1.nombre} tiene más estatura y es menor que ${persona2.nombre}`)
    }
} else {
    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} tiene menos estatura y es mayor que ${persona2.nombre}`)
    } else {
        console.log(`${persona1.nombre} tiene menos estatura y es menor que ${persona2.nombre}`)
    }
}

/*Otra manera
if (persona1.estatura > persona2.estatura && persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} tiene más estatura y es mayor que ${persona2.nombre}`)
} else if (persona1.estatura > persona2.estatura && persona1.edad < persona2.edad) {
    console.log(`${persona1.nombre} tiene más estatura y es menor que ${persona2.nombre}`)
} else if (persona1.estatura < persona2.estatura && persona1.edad > persona2.edad){
    console.log(`${persona1.nombre} tiene menos estatura y es mayor que ${persona2.nombre}`)
}else{
    console.log(`${persona1.nombre} tiene menos estatura y es menor que ${persona2.nombre}`)
}
*/

//Ejercicio 10
let nombre, edad, vision
nombre = prompt("Ingrese su nombre: ")
edad = Number(prompt("Ingrese su edad: "))
estatura = Number(prompt("Ingrese su estatura: "))
vision = Number(prompt("Ingrese su visión (1 al 10: "))
if (edad >= 18 && estatura >= 150 && vision >= 8) {
    console.log("Estás capacitado para conducir.")
} else {
    console.log("No estás capacitado para conducir.")
}

//Ejercicio 11
const tuEdad = Number(prompt("Ingresa tu edad: "))
if (tuEdad >= 0 && tuEdad <= 12) {
    alert("Eres un infante.")
} else if (tuEdad >= 13 && tuEdad <= 18) {
    alert("Eres un adolescente.")
} else if (tuEdad >= 19 && tuEdad <= 45) {
    alert("Eres un adulto joven.")
} else if (tuEdad > 45) {
    alert("Eres un anciano.")
}else if(tuEdad>100){
    alert("¿En realidad tienes esa edad?")
}else{
    alert("Por favor ingrese un número válido (mayor a 0).")
}

//Ejercicio 12
let opcion = Number(prompt("Ingrese un número del 1 al 3"))
let numero = Number(prompt("Ingrese un número cualquiera"))
switch (opcion) {
    case (1): {
        alert("El número ingresado es: " + numero)
    } break
    case (2): {
        alert("El doble del número ingresado es: " + numero * 2)
    } break
    case (3): {
        alert("El triple del número ingresado es: " + numero * 3)
    } break
    default: {
        alert("Por favor ingrese un número del 1 al 3")
    }
}

//Ejercicio 13
const nombreCliente = prompt("Inserte el nombre del cliente: ")
const paseCliente = prompt("Ingrese el tipo de pase (vip o normal): ")
const poseeEntrada = prompt("¿Posee una entrada? (si - no)")
if (nombreCliente == "Salomón" || paseCliente == "vip") {
    alert("Bienvenido, " + nombreCliente)
} else if (poseeEntrada == "si") {
    if (prompt(nombreCliente + " posee una entrada, ¿desea utilizarla? (si - no)") == "si") {
        alert("Usted ha utilizado su entrada, ¡Bienvenido/a!")
    }
    else {
        alert("No ha utilizado su entrada, ¡Vuelva pronto!")
    }
} else {
    if (prompt("¿Desea comprar una entrada? (si - no)") == "si") {
        if (Number(prompt("Saldo: ")) >= 1000) {
            alert("Compra exitosa, ¡Bienvenido!")
        } else {
            alert("Saldo insuficiente, por favor vuelva a intentarlo.")
        }
    } else {
        alert("No ha comprado ninguna entrada, ¡Vuelva pronto!")
    }
}

//Ejercicio 14
const numeroIncognita = 8
let numeroIngresado = Number(prompt("Ingrese un número del 1 al 10: "))
if (numeroIngresado >= 1 && numeroIngresado <= 10) {
    if (numeroIngresado == numeroIncognita) {
        alert("¡Ganaste, haz adivinado el número!")
    } else if (numeroIngresado > numeroIncognita) {
        alert("El número ingresado es mayor, vuelve a intentarlo.")
        numeroIngresado = Number(prompt("Ingrese un número del 1 al 10: "))
        if (numeroIngresado >= 1 && numeroIngresado <= 10) {
            if (numeroIngresado == numeroIncognita) {
                alert("¡Ganaste, haz adivinado el número!")
            } else if (numeroIngresado > numeroIncognita) {
                alert("El número ingresado es mayor, vuelve a intentarlo.")
                numeroIngresado = Number(prompt("Ingrese un número del 1 al 10: "))
                if (numeroIngresado >= 1 && numeroIngresado <= 10) {
                    if (numeroIngresado == numeroIncognita) {
                        alert("¡Ganaste, haz adivinado el número!")
                    }
                    else {
                        alert("Perdiste, te has quedado sin intentos.")
                    }
                } else {
                    alert("Por favor ingrese un número entre el 1 y el 10.")
                }
            } else {
                alert("El número ingresado es menor, vuelve a intetarlo.")
                numeroIngresado = Number(prompt("Ingrese un número del 1 al 10: "))
                if (numeroIngresado >= 1 && numeroIngresado <= 10) {

                    if (numeroIngresado == numeroIncognita) {
                        alert("¡Ganaste, haz adivinado el número!")
                    }
                    else {
                        alert("Perdiste, te has quedado sin intentos.")
                    }
                } else {
                    alert("Por favor ingrese un número entre el 1 y el 10.")
                }
            }
        } else {
            alert("Por favor ingrese un número entre el 1 y el 10.")
        }
    } else {
        alert("El número ingresado es menor, vuelve a intetarlo.")
        numeroIngresado = Number(prompt("Ingrese un número del 1 al 10: "))
        if (numeroIngresado >= 1 && numeroIngresado <= 10) {
            if (numeroIngresado == numeroIncognita) {
                alert("¡Ganaste, haz adivinado el número!")
            } else if (numeroIngresado > numeroIncognita) {
                alert("El número ingresado es mayor, vuelve a intentarlo.")
                numeroIngresado = Number(prompt("Ingrese un número del 1 al 10: "))
                if (numeroIngresado >= 1 && numeroIngresado <= 10) {
                    if (numeroIngresado == numeroIncognita) {
                        alert("¡Ganaste, haz adivinado el número!")
                    }
                    else {
                        alert("Perdiste, te has quedado sin intentos.")
                    }
                } else {
                    alert("Por favor ingrese un número del 1 al 10")
                }
            } else {
                alert("El número ingresado es menor, vuelve a intetarlo.")
                numeroIngresado = Number(prompt("Ingrese un número del 1 al 10: "))
                if (numeroIngresado >= 1 && numeroIngresado <= 10) {
                    if (numeroIngresado == numeroIncognita) {
                        alert("¡Ganaste, haz adivinado el número!")
                    }
                    else {
                        alert("Perdiste, te has quedado sin intentos.")
                    }
                } else {
                    alert("Por favor ingrese un número del 1 al 10.")
                }
            }
        } else {
            alert("Por favor ingrese un número entre el 1 y el 10.")
        }
    }
} else {
    alert("Por favor ingrese un número entre el 1 y el 10.")
}

//Ejercicio 15

let jugador1, jugador2
jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
switch (jugador1) {
    case "Piedra":
        switch (jugador2) {
            case "Piedra":
                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                switch (jugador1) {
                    case "Piedra":
                        switch (jugador2) {
                            case "Piedra":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            case "Papel":
                                alert("Gana el Jugador 2.")
                                break
                            case "Tijera":
                                alert("Gana el Jugador 1.")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    case "Papel":
                        switch (jugador2) {
                            case "Piedra":
                                alert("Gana el jugador 1")
                                break
                            case "Papel":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            case "Tijera":
                                alert("Gana el Jugador 2.")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    case "Tijera":
                        switch (jugador2) {
                            case "Piedra":
                                alert("Gana el jugador 2")
                                break
                            case "Papel":
                                alert("Gana el jugador 1.")
                                break
                            case "Tijera":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    default: alert("Alguno de los jugadores ha hecho trampa.")
                }
                break
            case "Papel":
                alert("Gana el Jugador 2.")
                break
            case "Tijera":
                alert("Gana el Jugador 1.")
                break
            default: alert("Alguno de los jugadores ha hecho trampa.")
        }
        break
    case "Papel":
        switch (jugador2) {
            case "Piedra":
                alert("Gana el jugador 1")
                break
            case "Papel":
                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                switch (jugador1) {
                    case "Piedra":
                        switch (jugador2) {
                            case "Piedra":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            case "Papel":
                                alert("Gana el Jugador 2.")
                                break
                            case "Tijera":
                                alert("Gana el Jugador 1.")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    case "Papel":
                        switch (jugador2) {
                            case "Piedra":
                                alert("Gana el jugador 1")
                                break
                            case "Papel":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            case "Tijera":
                                alert("Gana el Jugador 2.")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    case "Tijera":
                        switch (jugador2) {
                            case "Piedra":
                                alert("Gana el jugador 2")
                                break
                            case "Papel":
                                alert("Gana el jugador 1.")
                                break
                            case "Tijera":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    default: alert("Alguno de los jugadores ha hecho trampa.")
                }
                break
            case "Tijera":
                alert("Gana el Jugador 2.")
                break
            default: alert("Alguno de los jugadores ha hecho trampa.")
        }
        break
    case "Tijera":
        switch (jugador2) {
            case "Piedra":
                alert("Gana el jugador 2")
                break
            case "Papel":
                alert("Gana el jugador 1.")
                break
            case "Tijera":
                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                switch (jugador1) {
                    case "Piedra":
                        switch (jugador2) {
                            case "Piedra":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            case "Papel":
                                alert("Gana el Jugador 2.")
                                break
                            case "Tijera":
                                alert("Gana el Jugador 1.")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    case "Papel":
                        switch (jugador2) {
                            case "Piedra":
                                alert("Gana el jugador 1")
                                break
                            case "Papel":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            case "Tijera":
                                alert("Gana el Jugador 2.")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    case "Tijera":
                        switch (jugador2) {
                            case "Piedra":
                                alert("Gana el jugador 2")
                                break
                            case "Papel":
                                alert("Gana el jugador 1.")
                                break
                            case "Tijera":
                                jugador1 = prompt("Jugador 1: Ingrese su elección: Piedra, Papel o Tijera")
                                jugador2 = prompt("Jugador 2: Ingrese su elección: Piedra, Papel o Tijera")
                                break
                            default: alert("Alguno de los jugadores ha hecho trampa.")
                        }
                        break
                    default: alert("Alguno de los jugadores ha hecho trampa.")
                }
                break
            default: alert("Alguno de los jugadores ha hecho trampa.")
        }
        break
    default: alert("Alguno de los jugadores ha hecho trampa.")
}

//Ejercicio 16

const primerValor = Number(prompt("Ingrese el primer número: "))
let segundoValor = Number(prompt("Ingrese el segundo número: "))
const operacion = prompt("Ingrese la operación: (Suma, Resta, Multiplicación, División)")
switch (operacion) {
    case "Suma":
        alert(`La suma de ${primerValor} + ${segundoValor} es: ${primerValor + segundoValor}.`)
        break
    case "Resta":
        alert(`La diferencia de ${primerValor} - ${segundoValor} es: ${primerValor - segundoValor}.`)
        break
    case "Multiplicación":
        alert(`El producto de ${primerValor} * ${segundoValor} es: ${primerValor * segundoValor}.`)
        break
    case "División":
        if (segundoValor != 0) {
            alert(`El cociente de ${primerValor} / ${segundoValor} es: ${primerValor / segundoValor}.`)
        } else {
            alert("ERROR: Imposible dividir por 0.")
            segundoValor = Number(prompt("Ingrese el segundo número: "))
            alert(`El cociente de ${primerValor} / ${segundoValor} es: ${primerValor / segundoValor}.`)
        }
        break
    default: alert("Ingrese un número y opción válidos.")
}

//Ejercicio 17

const nombrePersona = prompt("Ingrese su nombre: ")
const apellidoPersona = prompt("Ingrese su apellido: ")
const documentoPersona = prompt("Ingrese su documento: ")
const domicilioPersona = prompt("Ingrese su domicilio: ")
const fechaNacimientoPersona = prompt("Ingrese su fecha de nacimiento: ")
const confirmacion = prompt(`Nombre: ${nombrePersona}
Apellido: ${apellidoPersona}
Número de documento: ${documentoPersona}
Domicilio: ${domicilioPersona}
Fecha de nacimiento: ${fechaNacimientoPersona}
¿Son estos datos correctos? (Si - No)`)
if (confirmacion == "Si") {
    const dni = {
        nombre: nombrePersona,
        apellido: apellidoPersona,
        documento: documentoPersona,
        domicilio: domicilioPersona,
        fechaNacimiento: fechaNacimientoPersona
    }
    console.table(dni)
} else {
    alert("Vuelva a intentarlo en un mes.")
}