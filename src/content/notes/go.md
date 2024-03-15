---
id: 'go'
title: 'Go'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/go.svg'
---

## Herramientas

- Aprender Go:  
  https://gobyexample.com/

## Comandos

- `go version` mostrar la versión de Go instalada
- `go env` mostrar la configuración de Go
  - `GOPATH` directorio de trabajo
  - `GOROOT` directorio de instalación
  - `GOBIN` directorio de binarios
- `go run <file>.go` ejecutar un archivo .go
- `go build <file>.go` compilar un archivo .go. Genera un nuevo archivo ejecutable.
- `go get <package>` descargar e instalar un paquete. Cuando se ejecuta, crea un archivo go.sum con las dependencias y
  actualiza el archivo go.mod.
- `go mod init <module>` inicializar un módulo. Se utiliza para gestionar dependencias.
- `go test` ejecutar pruebas
- `go fmt` formatear el código

## Conceptos

Go es un lenguaje de programación de código abierto que facilita la creación de software simple, confiable y eficiente.
Es un lenguaje compilado, concurrente, imperativo, estructurado y orientado a objetos.

- **Paquetes**: Un paquete es un conjunto de archivos que definen un conjunto de funciones, tipos y variables.
- **Módulos**: Un módulo es un conjunto de paquetes que se comparten en un repositorio.

El punto de entrada de un programa en Go es la función `main` que se encuentra en el paquete `main`.

Estructura de un archivo .go:

```go
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
```

## Variables

Las variables son pasados por valor.  
Si se declaran fuera de la función, quedan declaradas a nivel de paquete y se pueden usar
en cualquier parte del paquete.

```go
var name string = "John"
var age int = 30
// declarar varias variables
var name, lastName string = "John", "Doe"
// declarar varias variables de distinto tipo
var (
  name string = "John"
  age int = 30
)
// se puede declarar y despues inicializar
var name string
name = "John"
// declarar y dejar que Go infiera el tipo
var name = "John"
// declarar e inicializar sin usar var, solo se puede hacer dentro de una función
name := "John"
name, age := "John", 30
// byte
var a byte = 'a' // 97 (ASCII)
s := "Hello"
b := s[0] // 72 (ASCII)
// rune
var r rune = '♥' // 9829 (Unicode)
```

## Constantes

```go
const name = "John"
const age = 30
const (
  name = "John"
  age = 30
)

// iota es una constante que se incrementa en 1 en cada constante
const (
  lunes = iota
  martes
  miercoles
  jueves
  viernes
  sabado
  domingo
)
// lunes = 0, martes = 1, miercoles = 2, jueves = 3, viernes = 4, sabado = 5, domingo = 6

// se puede usar iota para crear constantes con valores exponenciales
const (
  _ = iota
  KB = 1 << (iota * 10)
  MB = 1 << (iota * 10)
  GB = 1 << (iota * 10)
)
// KB = 1024, MB = 1048576, GB = 1073741824
// _ es una variable que se descarta
// << es el operador de desplazamiento a la izquierda, mueve los bits a la izquierda
// 1 << 10 es igual a 1024
```

## Tipos de datos

Cada tipo de dato tiene un valor por defecto.

- `bool`: el valor por defecto es `false`
- `string`: el valor por defecto es `""`
- numbers: el valor por defecto para todos es `0`.
  - `int, int8, int16, int32, int64`: números enteros, el número representa la cantidad de bits que se reserva
    para ese numero. ej: un int8 abarca los valores de -128 a 127.
  - `uint, uint8, uint16, uint32, uint64`: unsigned integers, no tienen signo, solo pueden representar positivos.
    ej: un uint8 abarca los valores de 0 a 255.
  - `float32, float64`: fracciones.
  - `complex64, complex128`: números imaginarios.
  - `byte`: alias para uint8. Se usa para representar datos en formato binario o ASCII.
  - `rune`: alias para int32. Se usa para representar un carácter Unicode.
- `nil`, `array`, `slice`, `map`, `chan`, `func`, `interface`, `struct`, `pointer`, `error` el valor por defecto es `nil`

A menos que se requiera optimizar recursos al máximo, el estándar de tipos que se deberia
usar sería `int`, `uint32`, `float64`.  
Si solo ponemos `int` o `uint` Go infiere el tamaño del entero dependiendo del sistema operativo,
si es de 32 bits sera `int32` y si es de 64 bits sera `int64`.

## Conversión tipos

```go
temperatureInt := 88
temperatureFloat := float64(temperatureInt)
```

## Interpolar

Con el paquete “fmt” se puede hacer formateo.

```go
// Interpolar valores generales:
fmt.Printf(“I am %v years old”, 10) // I am 10 years old
fmt.Printf(“I am %v years old”,”too many”) // I am too many years old

// Interpolar string:
fmt.Printf(“I am %s years old”, ”too many”) // I am too many years old

// Interpolar integer:
fmt.Printf(“I am %d years old”, 10) // I am 10 years old

// Interpolar float
fmt.Printf(“I am %f years old”, 10.05) // I am 10.05 years old
fmt.Printf(“I am %.2f years old”, 10.0534) // I am 10.05 years old
```

## Condicionales

```go
if 10 > 2 {
  fmt.Println(“Greater”)
} else if 10 == 10 {
  fmt.Println(“Equal”)
} else {
  fmt.Println(“Lower”)
}
```

También se pueden definir de la siguiente forma:

```go
if declaracion_inicial; condicion {
  // codigo
}

if age := 18; age < 18 {
  fmt.Println(“Es menor de edad”)
}
```

La variable `age` solo seria accesible en el scope del if. Se usa para limitar el scope de esta variable.

## Funciones

```go
func sum(x int, y int) int {
  return x + y
}
```

Si los parametros son del mismo tipo, se puede declarar solo una vez:

```go
func sum(x, y int) int {
  return x + y
}
```

Se pueden pasar funciones a otras funciones, similar a como se hace en javascript con los callbacks:

```go
func myFunc(func(x int, y int), int) int {
  // codigo
}
```

`myFunc` seria una funcion que toma 2 argumentos, el primero es una funcion que toma 2 enteros como argumentos
y devuelve un entero, y el segundo argumento es un entero. `myFunc` devuelve un entero.

