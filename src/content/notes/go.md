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
```

## Constantes

```go
const name = "John"
const age = 30
```

## Tipos de datos

- `int`
- `float64`
- `bool`
- `string`
- `byte`
- `rune`
- `complex64`
- `complex128`
- `uint`
- `uintptr`
- `int8`
- `int16`
- `int32`
- `int64`
- `uint8`
- `uint16`
- `uint32`
- `uint64`
- `float32`
- `complex64`
- `complex128`