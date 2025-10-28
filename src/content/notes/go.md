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
- `go mod init <nombre_del_modulo>`: se inicializa un módulo. Se utiliza para gestionar dependencias.
- `go mod tidy`: Importa dependencias que esten en el codigo y no se hayan instalado y elimina
  dependencias que no se usan.
- `go get <nombre_paquete>`: descarga e instala un paquete. Cuando se ejecuta, crea un
  archivo go.sum con las dependencias y actualiza el archivo go.mod.
- `go get -u <nombre_paquete>`: se actualizan las dependencias
- `go get nombre_paquete@version`: instalar una versión específica de un paquete
- `go list -m all`: muestra todas las dependencias del módulo
- `go list -m -versions <nombre_paquete>`: muestra todas las versiones de un paquete. Solo muestra las versiones
  compatibles con la version major del paquete.
- `go install` instalar un paquete. Se instala en el directorio de binarios.
- `go test` ejecutar pruebas
- `go fmt` formatear el código

## Conceptos

Go es un lenguaje de programación de código abierto que facilita la creación de software simple, confiable y eficiente.
Es un lenguaje compilado, concurrente, imperativo, estructurado y orientado a objetos.

- **Paquetes**: Un paquete es un conjunto de archivos que definen un conjunto de funciones, tipos y variables.
  El nombre del paquete deberia darnos una idea de la funcionalidad que tiene. Usar nombres como
  `utils`, `helpers`, `common` no es recomendado. El nombre deberia ser el mismo de la carpeta.  
  Se puede poner alias a los paquetes, dentro del import se pone el alias antes del nombre del paquete.

- **Módulos**: Un módulo es un conjunto de paquetes que se comparten en un repositorio.
  Son una forma de gestionar dependencias en Go.  
  Dentro del archivo `go.mod` se definen las dependencias del módulo. Las dependencias se guardan en el archivo `go.sum`.  
  Las dependencias que tienen el comentario de `// indirect` son dependencias de las dependencias.

El punto de entrada de un programa en Go es la función `main` que se encuentra en el paquete `main`.

Estructura de un archivo .go:

```go
package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}
```

Si el nombre de una función, variable, etc., empieza con mayúscula, significa que es pública y se puede acceder desde
otros paquetes. Si empieza con minúscula, es privada y solo se puede acceder desde el paquete en el que se encuentra.

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

Si se declaran fuera de la función, quedan declaradas a nivel de paquete y se pueden usar
en cualquier parte del paquete.

```go
const name = "John"
const age = 30
const (
  name = "John"
  age = 30
)

// iota es una constante que se incrementa en 1 en cada constante, empieza en 0
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
```

## Tipos de datos

Cada tipo de dato tiene un valor por defecto.

- `bool`: el valor por defecto es `false`
- `string`: el valor por defecto es `""`. Siempre entre comilla doble.
- numbers: el valor por defecto para todos es `0`.
  - `int, int8, int16, int32, int64`: números enteros, el número representa la cantidad de bits que se reserva
    para ese numero. ej: un int8 abarca los valores de -128 a 127.
  - `uint, uint8, uint16, uint32, uint64`: unsigned integers, no tienen signo, solo pueden representar positivos.
    ej: un uint8 abarca los valores de 0 a 255.
  - `float32, float64`: fracciones.
  - `complex64, complex128`: números imaginarios.
  - `byte`: alias para uint8. Se usa para representar datos en formato ASCII.
  - `rune`: alias para int32. Se usa para representar un caracter Unicode.
- `nil`, `array`, `slice`, `map`, `chan`, `func`, `interface`, `struct`, `pointer`, `error` el valor por defecto es `nil`

A menos que se requiera optimizar recursos al máximo, el estándar de tipos que se deberia
usar sería `int`, `uint32`, `float64`.  
Si solo ponemos `int` o `uint` Go infiere el tamaño del entero dependiendo del sistema operativo,
si es de 32 bits sera `int32` y si es de 64 bits sera `int64`.

Tambien se pueden crear tipos de datos personalizados:

```go
type Age int
var age Age = 30
```

### Conversión de tipos (casting)

Para hacer operaciones con tipos de datos diferentes, se deben convertir.

```go
temperatureInt := 88
temperatureFloat := float64(temperatureInt)
```

Si se quiere convertir de número a string o viceversa, se puede hacer con el paquete `strconv`.

```go
import "strconv"
temperatureInt := 88
temperatureString := strconv.Itoa(temperatureInt)

temperatureString := "88"
// el segundo valor que devuelve es un error, si no se logra hacer la conversion
temperatureInt, _ := strconv.Atoi(temperatureString)
```

### Type assertions

Se usa para convertir un tipo de dato a otro tipo de dato.

```go
var i interface{} = "Juan"
// se convierte a string, si no se puede convertir, devuelve "" y false
j, ok := i.(string)
if ok {
  fmt.Println(strings.ToUpper(j))
}
```

### Type switches

Se usa para hacer un switch de tipos.

```go
var i interface{} = "Juan"
switch v := i.(type) {
case int:
  fmt.Println("Es un entero")
case string:
  fmt.Println("Es un string")
default:
  fmt.Println("No se que es")
}
```

## Arrays

Los arrays son una estructura fija, no se puede cambiar su tamaño.

```go
var arr [3]int
arr[0] = 1
arr[1] = 2
arr[2] = 3
// se puede declarar e inicializar
arr := [3]int{1, 2, 3}
// se puede declarar e inicializar sin poner el tamaño, Go infiere el tamaño
arr := [...]int{1, 2, 3}
// obtener la longitud del array
len(arr)

// arrays multidimensionales
var arr [3][3]int
// se puede declarar e inicializar
arr := [3][3]int{
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
}
```

## Slices

Los slices son una referencia a un array, son punteros a un array. Los arrays son una estructura fija,
no se puede cambiar su tamaño, los slices son una estructura dinámica, se puede cambiar su tamaño.  
Si creo un slice a partir de un array y modifico el slice, tambien se modifica el array original.

```go
// se crea un array
arr := [3]int{1, 2, 3}
// se puede crear un slice a partir de un array, haria referencia a todo el array
slice := arr[:]
// se puede crear un slice a partir de un array, desde la primera posicion hasta la indicada
slice := arr[:2] // [1, 2]
// se puede crear un slice a partir de un array, desde la posicion indicada hasta el final
slice := arr[1:] // [2, 3]
// se puede crear un slice a partir de un array con un rango
slice := arr[1:3] // [2, 3]

// se puede crear un slice sin un array
slice := []int{1, 2, 3}
// se puede crear un slice con un tamaño,
slice := make([]int, 3)
// se puede crear un slice con un tamaño y capacidad
slice := make([]int, 3, 5)
// se puede agregar un elemento a un slice
slice = append(slice, 4)
// se puede agregar varios elementos a un slice
slice = append(slice, 5, 6, 7)
// se puede agregar un slice a otro slice
slice = append(slice, []int{8, 9, 10}...)
// se puede eliminar un elemento de un slice, se elimina el elemento en la posicion 2,
// se copian los elementos desde el inicio hasta la posicion 1 (2 no esta incluido) y desde la posicion 3
// hasta el final del slice, los ... es para desempaquetar el slice
slice = append(slice[:2], slice[3:]...)
// se puede eliminar el primer elemento de un slice
slice = slice[1:]
// se puede eliminar el ultimo elemento de un slice
slice = slice[:len(slice)-1]
// se puede copiar un slice
slice2 := make([]int, len(slice))
copy(slice2, slice)
// longitud de un slice
len(slice)
// capacidad de un slice, es el numero de elementos del array original, a partir de donde se
// creo el slice hasta el final del array
animal := [5]string{"gato", "perro", "conejo", "pajaro", "pez"}
slice := animal[1:3]
cap(slice) // 4
```

## Maps

Son una estructura de datos que permiten almacenar y recuperar datos por llave-valor.

```go
// se puede declarar e inicializar
m := map[string]int{
  "age": 30,
  "height": 180
}
// se puede declarar e inicializar sin valores
m := map[string]int{}
// se puede declarar e inicializar sin valores
m := make(map[string]int)
// agregar un valor
m["age"] = 30
// obtener un valor
m["age"]
// obtener un valor y si existe
value, ok := m["age"]
// obtener un valor y si existe
if value, ok := m["age"]; ok {
  fmt.Println(value)
}
// eliminar un valor
delete(m, "age")
// longitud de un map
len(m)
// recorrer un map
for key, value := range m {
  fmt.Println(key, value)
}
```

## Estructuras (Structs)

Es un tipo que contiene otros tipos, de tipo llave-valor. Similar a una clase de JS.
Se usa la primera letra en mayúscula para que sea pública y se pueda acceder desde otros paquetes.
La primera letra en minúscula para que sea privada y solo se pueda acceder desde el paquete en el que se encuentra.

```go
// esta seria una nested struct
type Person struct {
  Name string
  Age uint8
  AddressInfo Address
}

type Address struct {
  Street int
  City string
}

// cuando se trabaja con json, se indica el nombre de la llave que se va a usar el json si queremos que sea diferente
type Person struct {
  Name string `json:"name"`
  Age uint8 `json:"age"`
  AddressInfo Address `json:"address"`
}

// crear “instancia”, si solo se ponen las llaves, los valores se iniciaran con su valor por defecto
myPerson := Person{}
myPerson.AddressInfo.City = "Pereira"
myPerson.Name = "John"
myPerson.Age = 30
// crear “instancia” con valores
myPerson := Person{
  Name: "John",
  Age: 30,
  AddressInfo: Address{
    City: "Pereira",
    Street: 123
  }
}
```

**Estructuras anónimas:**  
Cuando se usan las estructuras anónimas, se deben instanciar inmediatamente.
Se deberían usar cuando solamente se crea una instancia de esta.

```go
myPerson := struct {
  Name string
  Age int
} {
  Name: "John"
  Age: 30
}
```

**Embedded structs:**  
Son estructuras que contienen otras estructuras, se puede decir que “heredan” las propiedades y metodos
de la otra struct. Se diferencian de las nested struct porq en estas solo una de sus propiedades
hace referencia a otra struct, en las embedded struct se heredan las propiedades de la otra struct.

```go
type person struct {
  name string
  age int
}
func (p person) greet() {
  fmt.Println("Hello")
}
type employee struct {
  person
  salary int
}
// para usarla seria:
myEmployee := employee{
  salary: 5000,
  person: person{
    name: "Jhon",
    age: 30
  }
}
myEmployee.name // Jhon
myEmployee.greet() // Hello
```

**Métodos en estructuras:**  
Se vincula una función a una estructura, se puede decir que es un método de la estructura.

```go
type rect struct {
  width int
  height int
}
func (r rect) area() int {
  return r.width * r.height
}
r := rect{
  width: 5,
  height: 10
}
fmt.Println(r.area()) // 50
```

**Punteros en estructuras:**  
Como en todas las funciones en Go, las estructuras también se pasan por valor, si se quiere modificar
la estructura original, se debe pasar un puntero a la estructura.  
Si hay por lo menos un metodo que recibe un puntero, se deberia usar punteros en todos los metodos.

```go
type Rect struct {
	width  int
	height int
}
func NewRect(width, height int) *Rect {
  return &Rect{width, height}
}
func (r *Rect) ChangeWidth(width int) {
	r.width = width
}
r := NewRect(5, 10)
r.ChangeWidth(10)
fmt.Println(r.width) // 10
```

## Punteros

Un puntero es una dirección de memoria, es una variable que almacena la direccion de memoria de un valor o
de otra variable. Se usan para referenciar y acceder a la variable original.

```go
x := 10
// el & se usa para obtener la direccion de memoria de la variable
y := &x // y seria de tipo *int (puntero a un entero)
fmt.Println(y) // 0xc0000b6010
// el * se usa para obtener el valor de la direccion de memoria
fmt.Println(*y) // 10
// se podria modificar el valor de x a traves del puntero
*y = 20 // x ahora seria 20
```

## Interfaces

Las interfaces definen la implementación de métodos.  
Como recomendacion, se debe poner el nombre de la interfaz como el nombre del método con el sufijo `er`,
ejemplo, si el metodo es Greet(), la interfaz seria Greeter.

```go
type Circle struct {
	radius float64
}
func NewCircle(radius float64) *Circle {
  return &Circle{radius}
}
func (c *Circle) Area() float64 {
	return math.Pi * math.Pow(c.radius, 2)
}

type Square struct {
	width  float64
	height float64
}
func NewSquare(width, height float64) *Square {
  return &Square{width, height}
}
func (s *Square) Area() float64 {
	return s.width * s.height
}

type Sizer interface {
	Area() float64
}

func calculateArea(s Sizer) float64 {
	return s.Area()
}

func main() {
	c := NewCircle(10)
	s := NewSquare(5, 10)
	fmt.Println(calculateArea(c)) // 314.1592
	fmt.Println(calculateArea(s)) // 50
}
```

Las interfaces quedan definidas implícitamente, en el ejemplo si un struct implementa el método ‘Area()’,
queda implícitamente relacionado con la interfaz Sizer. No se necesita decir explícitamente la
palabra implements como en otros lenguajes. Las interfaces quedan desacopladas de la implementación del type.

**Interfaces embebidas**  
Crea una interfaz que se compone de otras interfaces y de sus metodos.  
Como recomendacion el nombre se compone de los nombres de las interfaces que contiene.

```go
type Greeter interface {
  Greet() string
}

type Byer interface {
  Bye() string
}

type GreeterByer interface {
  Greeter
  Byer
}
```

Tambien se pueden retornar interfaces.  
Ver curso-go-edteam/02-POO

## Condicionales

```go
if 10 > 2 {
  fmt.Println("Greater")
} else if 10 == 10 {
  fmt.Println("Equal")
} else {
  fmt.Println("Lower")
}

// También se pueden definir de la siguiente forma:
if declaracion_inicial; condicion {
  // codigo
}
// La variable `age` solo seria accesible en el scope del if. Se usa para limitar el scope de esta variable.
if age := 18; age < 18 {
  fmt.Println("Es menor de edad")
}

// en Go no es necesario poner la sentencia break, el break es implícito
age := 18
switch age {
  case 18:
    fmt.Println("Tiene 18 años")
  case 20:
    fmt.Println("Tiene 20 años")
  default:
    fmt.Println("No tiene 18 ni 20 años")
}
// tambien se puede definir de la siguiente forma:
switch age := 18; age {
  case 18:
    fmt.Println("Tiene 18 años")
  case 20:
    fmt.Println("Tiene 20 años")
  default:
    fmt.Println("No tiene 18 ni 20 años")
}
// se pueden agrupar condiciones
switch age := 18; age {
  case 18, 20:
    fmt.Println("Tiene 18 o 20 años")
  default:
    fmt.Println("No tiene 18 ni 20 años")
}
// se pueden usar condiciones en los cases
switch age := 18; {
  case age < 18:
    fmt.Println("Es menor de edad")
  case age == 18:
    fmt.Println("Tiene 18 años")
  case age > 18:
    fmt.Println("Es mayor de edad")
}
```

## Ciclos

```go
for i := 0; i < 5; i++ {
  if i == 4 {
    break
  }
  if i == 2 {
    continue
  }
  fmt.Println(i)
}

// ciclo infinito
for {
  fmt.Println("Hola")
}

// ciclo "while"
i := 0
for i < 5 {
  fmt.Println(i)
  i++
}

// ciclo for range, se usa para recorrer arrays, slices, maps, strings
arr := []int{1, 2, 3}
for index, value := range arr {
  fmt.Println(index, value)
}
```

Entre las dos formas de iterar en Go, la elección depende del tamaño de los datos y lo que necesitas hacer dentro del bucle:

- `for _, message := range messages` es la opción más clara y conveniente cuando solo necesitas leer los elementos y
  estos son datos simples o punteros. Sin embargo, si los elementos del slice son structs grandes, esta forma implica
  una copia de cada elemento en cada iteración, lo que puede afectar el rendimiento y uso de memoria en
  grandes volúmenes de datos.
- `for i := range messages` es preferible cuando necesitas modificar los elementos, acceder a ellos por índice,
  o cuando trabajas con structs grandes. Esta forma evita la copia de datos pesados, ya que accedes directamente al
  elemento en el slice mediante su índice.

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

Se pueden devolver múltiples valores de una función:

```go
func getNames() (string string) {
  return "Jhon", "Doe"
}
name, lastName := getNames()
```

Se puede ignorar un valor de retorno:

```go
name, _ := getNames()
// con _ se ignora completamente esa variable, el compilador la remueve
```

Se pueden nombrar los valores de retorno:

```go
func getCoords() (x, y int){
  // x y ‘y’ se inicializan con 0
  return // retorna implícitamente x y ‘y’
}
// seria la forma abreviada de escribir:
func getCoords() (int, int){
  var x int
  var y int
  return x, y
}
```

Igualmente lo recomendado es un retorno explicito, poner explicitamente x y ‘y’ en el return.

### Funciones variádicas

Son funciones que pueden recibir un número variable de argumentos.

```go
func sum(nums ...int) int {
  total := 0
  for _, num := range nums {
    total += num
  }
  return total
}
sum(1, 2, 3, 4, 5) // 15

// se pueden pasar varios tipos de datos (Genericos)
func PrintList(values ...interface{}) int {
  for _, value := range values {
    fmt.Println(value)
  }
}
PrintList(1, "Juan", true, 4, "Pablo") // 1, Juan, true, 4, Pablo
```

### Funciones recursivas

Las funciones recursivas son funciones que se llaman a sí mismas.

```go
func factorial(n int) int {
  if n == 0 {
    return 1
  }
  return n * factorial(n-1)
}
factorial(5) // 120
```

### Funciones anónimas

Las funciones anónimas son funciones que no tienen nombre.

```go
func main() {
  func() {
    fmt.Println("Hello")
  }()
}
// puedo asignar la funcion anonima a una variable
f := func(name string) {
  return "Hello " + name
}
f("Juan") // Hello Juan
```

### Funciones de orden superior

Las funciones de orden superior son funciones que toman otras funciones como argumentos o devuelven funciones.

```go
func main() {
  result := calculate(10, 5, sum)
  fmt.Println(result) // 15
}
func sum(x, y int) int {
  return x + y
}
func calculate(x, y int, f func(int, int) int) int {
  return f(x, y)
}
```

## Closures

Un closure es una función que captura variables del entorno en el que fue creada.

```go
func main() {
  f := increment()
  fmt.Println(f()) // 1
  fmt.Println(f()) // 2
  fmt.Println(f()) // 3
}

func increment() func() int {
  i := 0
  return func() int {
    i++
    return i
  }
}
```

## Genericos

Son una forma de escribir código que funciona con cualquier tipo de dato.  
Desde la versión 1.18 de Go, se añadió soporte para genéricos.

```go
// se pueden pasar varios tipos de datos
func PrintList(values ...interface{}) int {
  for _, value := range values {
    fmt.Println(value)
  }
}
PrintList(1, "Juan", true, 4, "Pablo") // 1, Juan, true, 4, Pablo

// tambien se puede usar any
func PrintList(values ...any) int {
  for _, value := range values {
    fmt.Println(value)
  }
}
PrintList(1, "Juan", true, 4, "Pablo") // 1, Juan, true, 4, Pablo

// se puede poner tipos a los parametros, crear una restriccion (constraint) de tipo
func Sum[T int | float64](nums ...T) T {
  var total T
  for _, num := range nums {
    total += num
  }
  return total
}
Sum[int](1, 2, 3, 4, 5) // 15
Sum[float64](1.5, 2.5, 3.5, 4.5, 5.5) // 17.5

// se puede usar tipos de datos derivados o por aproximacion
type MyInt int
var num MyInt = 10
var num2 MyInt = 20
// ~ se usa para decir que el tipo de dato es aproximado o derivado
func Sum[T ~int | float64](nums ...T) T {
  var total T
  for _, num := range nums {
    total += num
  }
  return total
}
Sum[int](num, num2) // 30

// otra forma de crear un constraint. Tambien podria usar el paquete constraints que ya tiene tipos definidos
type Numeric interface {
  ~int | ~float64 | ~float32 | ~uint
}
func Sum[T Numeric](nums ...T) T {
  var total T
  for _, num := range nums {
    total += num
  }
  return total
}
Sum(1, 2, 3, 4, 5) // 15

// estructura generica
type Product[T uint | string] struct {
  Id T
  Name string
  Price float64
}
product1 := Product[uint]{Id: 1, Name: "Product 1", Price: 10.5}
product2 := Product[string]{Id: "1", Name: "Product 2", Price: 20.5}
```

## Defer

Se usa para posponer la ejecución de una función hasta que la función que la contiene termine.

```go
func main() {
  defer fmt.Println("World")
  fmt.Println("Hello")
}
// Hello
// World
```

Se ejecutan en el orden inverso en el que se declaran.

```go
func main() {
  defer fmt.Println("World")
  defer fmt.Println("Hello")
}
// Hello
// World
```

Se usa para cerrar archivos, conexiones, liberar recursos, etc.

```go
file, err := os.Open("file.txt")
defer file.Close()
if err != nil {
  fmt.Println("Error al abrir el archivo")
  return
}
```

## Manejo de errores

Go no tiene excepciones, se manejan los errores con el tipo `error`.

```go
func divide(x, y int) (int, error) {
  if y == 0 {
    return 0, errors.New("No se puede dividir por 0")
  }
  return x / y, nil
}
result, err := divide(10, 0)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(result)
}

// se puede crear un error personalizado
type customError struct {
  message string
}
func (e *customError) Error() string {
  return e.message
}
func divide(x, y int) (int, error) {
  if y == 0 {
    return 0, &customError{"No se puede dividir por 0"}
  }
  return x / y, nil
}
result, err := divide(10, 0)
if err != nil {
  fmt.Println(err.Error()) // No se puede dividir por 0
} else {
  fmt.Println(result)
}

// manejo de errores en funciones anidadas
var errNotFound = errors.New("not found")

var food = map[int]string{
	1: "🍕",
	2: "🍔",
}

func main() {
	found, err := search("34")
  // usando el paquete errors, comprobar si el error es igual a otro
	if errors.Is(err, errNotFound) {
		fmt.Println("pudimos controlar el error correctamente")
		return
	}
	if err != nil {
    // le doy contexto al error, diciendo de donde viene
		fmt.Println("search()", err)
		return
	}
	fmt.Println(found)
}

func search(key string) (string, error) {
	num, err := strconv.Atoi(key)
	if err != nil {
    // le doy contexto al error, diciendo de donde viene
    // %w es para envolver el error y despues poder compararlo con errors.Is()
		return "", fmt.Errorf("strconv.Atoi(): %w", err)
	}

	emoji, err := findFood(num)
	if err != nil {
    // le doy contexto al error, diciendo de donde viene
    // %w es para envolver el error y despues poder compararlo con errors.Is()
		return "", fmt.Errorf("findFood(): %w", err)
	}
	return emoji, nil
}

func findFood(id int) (string, error) {
	value, ok := food[id]
	if !ok {
		return "", errNotFound
	}
	return value, nil
}
```

## Panic y Recover

Cuando existe un panic, deberiamos leer los errores en consola de abajo hacia arriba.

`panic` se usa para detener la ejecución de un programa.
`recover` se usa para recuperar el control del programa después de un `panic`.

```go
func main() {
	division(100, 10)
	division(34, 0)
	division(120, 10)
}

func division(dividend, divisor int) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("me recupere del panic")
		}
	}()

	validateZero(divisor)
	fmt.Println(dividend / divisor)
}

func validateZero(divisor int) {
	if divisor == 0 {
		panic("🤕 no puedes dividir por cero")
	}
}
// 10
// me recupere del panic
// 12
```

## Concurrencia (Goroutine)

La concurrencia es la capacidad de ejecutar varias tareas al mismo tiempo.  
Las Goroutines es una función que se ejecuta de forma independiente en el mismo espacio
de tiempo que otras Goroutines, son hilos de ejecución ligeros que se pueden ejecutar en paralelo.

Go tiene minimo una Goroutine que es la principal (main), la que se ejecuta cuando se inicia el programa.
Go utiliza el modelo "fork-join" para crear Goroutines, se crea una Goroutine principal y se crean
Goroutines hijas que se ejecutan de forma independiente y en algun punto vuelven a la principal,
como se ve en la imagen. Para crear una Goroutine se usa la palabra clave `go`.

Para crear los puntos de unión (join-points) se necesita sincronizar la Goroutine padre con la hija,
se puede hacer con el paquete `sync`, los canales o esperar que la Goroutine hija finalice, es recomendable
usar el paquete sync o los canales.

![Modelo de Goroutine](/public/model_goroutine.png)

Los valores de retorno de las Goroutines hijas son descartados, no se pueden recuperar estos valores en las
Goroutines padres, si se necesita recuperar el valor de retorno se debe usar un canal.

Para trabajar con Goroutines se tienen 2 enfoques, a traves del paquete `sync` y a traves de canales.
El paquete `sync` se usa para sincronizar las Goroutines, solo queremos que las Goroutines terminen
su ejecución; los canales se usan para comunicar las Goroutines.

```go
func main() {
  // go permite ejecutar la funcion en un hilo separado
  go sayHello()
  fmt.Println("Hello")
}
func sayHello() {
  fmt.Println("World")
}
```

Problemas de concurrencia:

- **Data race:** Pasa cuando las Goroutines compiten por acceder a la misma variable y al menos
  una de ellas es de escritura (), para solucionar esto se puede usar el paquete `sync` o uso de canales.

- **Race condition:** Se produce cuando 2 o más operaciones deben ejecutarse en el orden correcto, pero el
  programa no se ha escrito para garantizar que se mantenga este orden, para solucionar esto se debe escribir
  el código de forma que se garantice el orden de ejecución, pensando que se usa la concurrencia y no como código
  sincrono.

- **Deadlock:** Se produce cuando 2 o más Goroutines se bloquean entre sí, es decir, se esperan unas a otras
  y ninguna puede continuar, para solucionar esto se debe tener cuidado con el uso de canales, se debe asegurar
  que se cierre el canal o que se use un canal bufferizado.

- **Livelock:** Se produce cuando 2 o más Goroutines se bloquean entre sí, pero en lugar de quedarse quietas,
  siguen intentando resolver el problema, pero no pueden, para solucionar esto se debe tener cuidado con la
  logica de las Goroutines.

- **Starvation:** Es una situacipin en la que un proceso no puede obtener acceso regular a los recursos
  que necesita para realizar su trabajo y no puede progresar. Esto sucede cuando hay mas procesos que impiden
  que otros procesos realicen su trabajo. Se produce cuando una Goroutine no puede avanzar porque otra Goroutine la bloquea, para solucionar esto se debe tener cuidado con la logica de las Goroutines.

### WaitGroup

El paquete `sync` se usa para sincronizar las Goroutines, se puede usar `WaitGroup` para esperar a que
todas las Goroutines terminen su ejecución.

```go
func main() {
  // instancia de WaitGroup
  var wg sync.WaitGroup
  // definir el contador, en este caso, agregar 2 Goroutines
  wg.Add(2)
  go func() {
    // cuando la Goroutine termina, se llama a Done y se resta 1 del contador
    defer wg.Done()
    fmt.Println("Hello")
  }()
  go func() {
    defer wg.Done()
    fmt.Println("World")
  }()
  // esperar a que todas las Goroutines terminen, es decir, que el contador llegue a 0
  wg.Wait()
}
```

### Mutex

El paquete `sync` se usa para sincronizar las Goroutines, se puede usar `Mutex` para evitar
que las Goroutines compitan por acceder a la misma variable.

```go
func main() {
	// instancia de Mutex
	mu := sync.Mutex{}
  // instancia de WaitGroup
	wg := sync.WaitGroup{}
  // definir el contador, en este caso, agregar 1 Goroutines
	wg.Add(1)

	data := 1

	go func() {
  	// bloquear el Mutex, para que solo una Goroutine pueda acceder a la sección crítica
		mu.Lock()
		data++
  	// desbloquear el Mutex, para que otra Goroutine pueda acceder a la sección crítica
		mu.Unlock()
  	// cuando la Goroutine termina, se llama a Done y se resta 1 del contador
		wg.Done()
	}()
  // esperar a que todas las Goroutines terminen, es decir, que el contador llegue a 0
	wg.Wait()
	mu.Lock()
	fmt.Println(data)
	mu.Unlock()
}
```

### Data race detector

Go tiene una herramienta para detectar el problema de Data race, este solo funciona en tiempo de
ejecución, es decir, solo funciona en el código que ejecuta, no en todo el código. Se debe ejecutar el
programa con la bandera `-race`. Ej: `go run main.go -race`

## Canales (Channels)

Los canales se usan para comunicar Goroutines. Es el prinicpal metodo de sincronizacion entre Goroutines.  
Se pueden enviar y recibir valores de un canal.  
Los canales son bloqueantes, la rutina se bloquea hasta que se reciba el mensaje. Ya no se tiene que hacer
el bloqueo de forma manual, los canales se encargan de esto.  
Se debe asegurar que alguna rutina envie el mensaje y otra lo reciba, si no se hace, se produce un deadlock.

```go
func main() {
  // declarar un canal
  ch := make(chan string)
  go func() {
    // enviar un valor al canal
    ch <- "Hello"
  }()
  // recibir un valor del canal
  msg := <-ch
  fmt.Println(msg)
}
```

En la imagen se puede ver como funciona un canal.

![Modelo de Goroutine](/public/model_channel.png)

Se pueden enviar y recibir valores de un channel de forma asíncrona.

```go
func main() {
  // declarar un canal
  ch := make(chan string)
  go func() {
    // enviar un valor al canal
    ch <- "Hello"
  }()
  go func() {
    // recibir un valor del canal
    msg := <-ch
    fmt.Println(msg)
  }()
}
```

Se puede indicar que una función solo reciba o envie valores de un canal.

```go
// chan<- int: canal de solo escritura, solo puede enviar valores
func send(ch chan<- string) {
	// enviar valores al canal
  ch <- "Hello"
}
// <-chan int: canal de solo lectura, solo puede recibir valores
func receive(ch <-chan string) {
  // recibir valores del canal
  msg := <-ch
  fmt.Println(msg)
}
func main() {
	// crear canal
  ch := make(chan string)
	// crear gorutinas
  go send(ch)
  go receive(ch)
}
```

Se pueden enviar y recibir valores de un canal con buffer, la funcion de envio puede ir enviando valores,
sin que quede bloqueada hasta que haya una operacion de lectura. Enviar se bloquea cuando el buffer esta lleno,
y recibir se bloquea cuando el buffer esta vacio.

```go
func main() {
  // crear canal con buffer de 2
  ch := make(chan string, 2)
  // enviar valores al canal
  ch <- "Hello"
  ch <- "World"
  // recibir valores del canal
  fmt.Println(<-ch)
  fmt.Println(<-ch)
}
```

Se pueden cerrar los canales, quien envia los valores debe cerrar el canal, para que el receptor sepa que
no se enviaran mas valores.

```go
func main() {
  // declarar un canal
  ch := make(chan string)
  go func() {
    // enviar valores al canal
    ch <- "Hello"
		ch <- "World"
    // cerrar el canal
    close(ch)
  }()
  for msg := range ch {
    fmt.Println(msg)
  }
}
// Hello
// World
```

## Testing

Los tests se deben crear en un archivo con el nombre del archivo que se va a testear seguido de `_test.go`.  
Para ejecutar los tests: `go test` ó `go test -v` para ver los detalles (para ver los logs se deberia usar con -v).

- `go test ./...` para ejecutar todos los tests (en todos los subdirectorios. Recomendado para test unitarios).
- `go test -run <nombre_de_la_funcion>` para ejecutar solo una funcion.
- `go test -bench .` para ejecutar los benchmarks (los test que empiezan con Benchmark).
- `go test -cover` para ver el porcentaje de cobertura de los tests.
- `go test -coverprofile=coverage.out` para guardar el resultado de la cobertura en un archivo.
- `go tool cover -func=coverage.out` para ver que funciones y cuales no tienen cobertura.
- `go tool cover -html=coverage.out` para ver el resultado de la cobertura en un navegador.
- `go test -cpuprofile=cou.out` para ver el uso de la CPU y genera un archivo.
- `go tool pprof cou.out` para ver el uso de la CPU en consola, despues se pone `top` y muestra
  que es lo que mas consume. `web` para verlo en el navegador. `pdf` para generar un pdf.

```go
// archivo a testear: main.go
package main

func sum(x, y int) int {
  return x + y
}

// archivo de test: main_test.go
package main

import "testing"

func TestSum(t *testing.T) {
  // para testear varias condiciones
  table := []struct {
    x, y, expected int
  }{
    {5, 5, 10},
    {2, 3, 5},
    {0, 0, 0},
  }

  for _, test := range table {
    total := Sum(test.x, test.y)
    if total != test.expected {
    	t.Errorf("Expected %d, got %d", test.expected, total)
    }
  }
}
```

## Paquete fmt

Sirve para formatear texto e imprimir y recuperar datos en consola.

```go
var name string
fmt.Println("Ingrese su nombre:")
// se pone la referencia de la variable que va a recibir el valor
fmt.Scanln(&name)
fmt.Println("Hola", name)
```

Con el paquete “fmt” se puede interpolar.

```go
// Interpolar valores generales:
fmt.Printf("I am %v years old", 10) // I am 10 years old
fmt.Printf("I am %v years old","too many") // I am too many years old

// Interpolar string:
fmt.Printf("I am %s years old", "too many") // I am too many years old

// Interpolar integer:
fmt.Printf("I am %d years old", 10) // I am 10 years old

// Interpolar float
fmt.Printf("I am %f years old", 10.05) // I am 10.05 years old
fmt.Printf("I am %.2f years old", 10.0534) // I am 10.05 years old
```

- `%v` para valores generales.
- `%s` para strings.
- `%q` para strings con comillas.
- `%d` para enteros.
- `%f` para flotantes.
- `%.2f` para flotantes con 2 decimales.
- `%T` para el tipo de dato.
- `%t` para booleanos.
- `%p` para punteros.
- `%U` para Unicode.

## Paquete strings

Sirve para trabajar con cadenas de texto.

```go
import "strings"
// concatenar cadenas
strings.Join([]string{"Hello", "World"}, " ") // Hello World
// separar cadenas
strings.Split("Hello World", " ") // [Hello World]
// buscar una cadena
strings.Contains("Hello World", "World") // true
// reemplazar una cadena
strings.Replace("Hello World", "World", "Go", 1) // Hello Go
// convertir a mayúsculas
strings.ToUpper("Hello") // HELLO
// convertir a minúsculas
strings.ToLower("Hello") // hello
// obtener la longitud de una cadena
len("Hello") // 5
// contar cuantas veces aparece una cadena
strings.Count("Hello", "l") // 2
// obtener el indice de una cadena
strings.Index("Hello", "l") // 2
// obtener el indice de una cadena desde la derecha
strings.LastIndex("Hello", "l") // 3
// obtener si una cadena empieza con otra
strings.HasPrefix("Hello", "He") // true
// obtener si una cadena termina con otra
strings.HasSuffix("Hello", "lo") // true
```

## Operadores y Paquete math

Operadores: + - \* / % ++ --  
Operadores de comparación: == != < > <= >=
Operadores lógicos: && || !

```go
// operadores en asignacion
x := 10
x += 5 // 15 (x = x + 5)
x -= 5 // 10 (x = x - 5)
x++ // 11
x-- // 9

// paquete math
import "math"
math.Pi
math.Pow(2, 3) // 8
math.Sqrt(9) // 3
math.Round(3.14) // 3
math.Floor(3.14) // 3
math.Ceil(3.14) // 4
math.max(1, 2) // 2
math.min(1, 2) // 1
math.abs(-1) // 1
math.IsNaN(0/0) // true

// paquete math/rand para generar numeros aleatorios
import "math/rand"
rand.Intn(100) // numero aleatorio entre 0 y 100
rand.Float64() // numero aleatorio entre 0 y 1
```

## Paquete time

Paquete para trabajar con fechas y horas.

```go
import "time"
time.Now()
time.Now().Year()
time.Now().Month()
time.Now().Day()
time.Now().Hour()
time.Now().Minute()
time.Now().Second()
time.Now().Weekday()
time.Now().Add(time.Hour * 24)
time.Now().Sub(time.Now().Add(time.Hour * 24))
```

## Paquete constraints

Paquete para trabajar con constraints.

```go
import "constraints"
// se puede usar para restringir el tipo de dato
func sum[T constraints.Integer | constraints.Float](x, y T) T {
  return x + y
}
sum(1, 2) // 3
```

El tipo de dato `constraints.Ordered` se usa para restringir el tipo de dato a los que se pueden comparar
(>, <, <=, >=, ==, !=). Estos son todos los enteros, flotantes y strings.

## Paquete os

Paquete para trabajar con el sistema operativo.

```go
import "os"
os.Getwd() // obtener el directorio de trabajo
os.Mkdir("folder", 0777) // crear un directorio, 0777 es el permiso
os.MkdirAll("folder/subfolder", 0777) // crear un directorio con subdirectorios
os.Remove("folder") // eliminar un directorio
os.RemoveAll("folder") // eliminar un directorio con subdirectorios
os.Create("file.txt") // crear un archivo
os.Remove("file.txt") // eliminar un archivo
```

## Pquete runtime

Paquete para trabajar con el runtime de Go.

```go
import "runtime"
runtime.GOOS // obtener el sistema operativo
runtime.NumCPU() // obtener el número de CPUs
runtime.NumGoroutine() // obtener el número de gorutinas
```

## Paquete log

Paquete para trabajar con logs.

```go
import "log"
log.Println("Hello") // imprimir en consola
log.Fatalln("Error") // imprime y termina la ejecución del programa
log.Panicln("Panic") // imprime y termina la ejecución del programa y muestra el stack trace
log.SetPrefix("Prefix: ") // establecer un prefijo
```

## Paquete http

Paquete para trabajar con servidores web, permite crear servidores y clientes HTTP.

Existen diferentes tipos de handlers predefinidos:

- `http.HandleFunc`: para manejar las rutas.
- `http.Handle`: para manejar las rutas con un handler.
- `http.FileServer`: para servir archivos estáticos.
- `http.NotFound`: para manejar las rutas no encontradas.
- `http.Redirect`: para redireccionar a otra ruta.
- `http.StripPrefix`: para eliminar un prefijo de la ruta.
- `http.TimeoutHandler`: para manejar el tiempo de espera de una petición.

```go
import (
  "net/http"
  "fmt"
)

func handler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Hello")
}

func main() {
  http.HandleFunc("/", handler)
  http.ListenAndServe(":8080", nil)
}
```

La estructura `http.Request` contiene la informaciòn de la petición de un cliente,
se pueden encontrar los siguientes campos:

- `r.URL.Path`: la ruta de la petición.
- `r.URL.Query()`: los query params.
- `r.Method`: el método de la petición.
- `r.Header`: los headers de la petición.
- `r.Body`: el cuerpo de la petición.
- `r.Form`: los datos del formulario.
- `r.PostForm`: los datos del formulario en un POST.
- `r.Cookies()`: las cookies de la petición.
- `r.MultiPartForm`: los datos de un formulario multipart.

Los metodos màs comunes de `http.Request` son:

- `r.NewRequest()`: para crear una nueva petición.
- `r.Context()`: obtiene el contexto de una petición.
- `r.Cookie()`: obtiene una cookie por su nombre.
- `r.Cookies()`: obtiene todas las cookies de una petición.
- `r.FormValue()`: obtiene el valor de un campo de un formulario.
- `r.FormFile()`: para obtener un archivo de un formulario multipart.
- `r.ParseForm()`: para parsear los datos de un formulario.
- `r.ParseMultipartForm()`: para parsear los datos de un formulario multipart.

La estructura `http.ResponseWriter` se usa para enviar la respuesta al cliente,
se pueden encontrar los siguientes métodos:

- `w.Header()`: para escribir los headers de la respuesta.
- `w.Write()`: para escribir el cuerpo de la respuesta.
- `w.WriteHeader()`: para establecer el código de estado de la respuesta.

Se puede modificar la estructura `Serve` para personalizar el servidor:

```go
import (
  "net/http"
  "fmt"
)

func handler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Hello")
}

func main() {
  http.HandleFunc("/", handler)

  server := http.Server {
    Addr: ":8080",
    Handler: nil,
    ReadTimeout: 10 * time.Second,
    WriteTimeout: 10 * time.Second,
    MaxHeaderBytes: 1 << 20,
  }

  server.ListenAndServe()
}
```

## Bases de datos

Go no tiene un driver nativo para bases de datos, se deben instalar los drivers de las bases de datos
que se van a usar. Se debe instalar el driver en el proyecto, se puede encontrar y como instalar en la
página de los drivers de Go, https://go.dev/wiki/SQLDrivers , se selecciona el driver que se va a usar y
se siguen las instrucciones. Es recmendable instalar los drivers que estan marcados con `[*]`

Consultar información a la base de datos se hace a traves del SELECT y los metodos `Query`, `QueryContext` (este a
diferencia del Query, recibe un contexto) y `QueryRow` (asegura que solo se devuelva una fila), para insertar,
actualizar, eliminar y demas comandos se usa el metodo `Exec` y `ExecContext` (recibe un contexto).

Si quiero utilizar las filas, lo puedo hacer usando el metodo `Query` que me devuelve las filas (recordar
que debo cerrar las filas para liberar el recurso), si quiero trabajar solo con el resultado de la consulta
puedo usar el metodo `Exec`.

### Instrucciones preparadas

Le dice a la base de datos que prepare una consulta y que la ejecute varias veces
con diferentes valores, esto es mas eficiente que ejecutar toda la consulta varias veces.

```go

func main() {
  // ejecutar una consulta preparada
  stmt, err := db.Prepare("INSERT INTO products (name) VALUES (?)")
  if err != nil {
    log.Fatal(err)
  }
  defer stmt.Close()

  result1, err := stmt.Exec("Product 1")
  if err != nil {
    log.Fatal(err)
  }

  result2, err := stmt.Exec("Product 2")
  if err != nil {
    log.Fatal(err)
  }
}
```

### Transacciones

Las transacciones se usan para agrupar varias consultas en una sola transacción, si una consulta falla,
se pueden revertir todas las consultas.

```go
func main() {
  tx, err := db.Begin()
  if err != nil { log.Fatal(err) }

  stmtInvoice, err := tx.Prepare("INSERT INTO invoices (client) VALUES (?)")
  if err != nil { tx.Rollback() }
  defer stmtInvoice.Close()

  invRes, err := stmtInvoice.Exec("Juan")
  if err != nil { tx.Rollback() }

  invID, err := invRes.LastInsertId()
  if err != nil { tx.Rollback() }

  stmtItem, err := tx.Prepare("INSERT INTO invoice_items (invoice_id, product, price) VALUES (?, ?, ?)")
  if err != nil { tx.Rollback() }
  defer stmtItem.Close()

  _, err = stmtItem.Exec(invID, "Product 1", 10)
  if err != nil { tx.Rollback() }

  err = tx.Commit()
  if err != nil { tx.Rollback() }
}
```

### Datos nulos

Para trabajar con datos nulos se puede usar el paquete `sql.NullString`, `sql.NullInt64`, `sql.NullFloat64`,
`sql.NullBool`, `sql.NullTime` y demás. Se usa para trabajar con valores nulos en la base de datos y se debe
crear una variable intermedia para hacer la asignación.

```go
func main() {
  type Product struct { Name string }
  for rows.Next() {
    var nameNull sql.NullString
    p := Product{}
    err := rows.Scan(&nameNull)
    if err != nil {
      log.Fatal(err)
    }
    // si nameNull.Valid es verdadero, quiere decir que nameNull.String tiene un valor
    if nameNull.Valid {
      p.Name = nameNull.String
    }
  }

  // se puede hacer lo mismo trabajando con un puntero
  type Product struct { Name string }
  for rows.Next() {
    var name *string
    p := Product{}
    err := rows.Scan(&name)
    if err != nil {
      log.Fatal(err)
    }
    if name != nil {
      p.Name = *name
    }
  }
}
```

## GoLand IDE

MAC:

- `option` 2 veces, se mantiene presionado y flecha arriba o abajo: crear multiples cursores.
- `contol + G`: seleccionar siguiente coincicencia.
- `command + D`: duplicar linea.
- `command + backspace`: borrar linea.
- `option + shift + flecha arriba o abajo`: mover linea.

