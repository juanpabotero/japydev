---
id: 'java'
title: 'Java'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/java.svg'
---

Java está basado en C++, es multiplataforma, orientado a objetos, fuertemente tipado.  
Un lenguaje independiente del sistema operativo, es decir, el código fuente se
compila a bytecode, que es un código intermedio y se puede ejecutar en cualquier
plataforma con un entorno de ejecución llamado JVM (máquina virtual de Java).  
El JDK (kit de desarrollo de Java) incluye el JRE (entorno de ejecución de Java).

## Conceptos

### Variables

Las variables son espacios de memoria que se reservan para almacenar datos.  
Se escribe en camelCase. Debe comenzar con una letra, un guión bajo o un signo de dólar,
nunca un número como primer caracter.  
Debe estar asociada a un tipo de dato, el cual define el tamaño y el tipo de
dato que se pueden almacenar en la variable.  
Se puede declarar una variable sin inicializarla, pero no se puede utilizar hasta
que se le asigne un valor.  
Las variables tienen scoope, es decir, un ámbito de visibilidad. Las variables
locales solo se pueden usar dentro del método donde se declaran y se destruyen
cuando éste termina. Las variables globales se pueden usar en cualquier parte de la clase.  
También puedo declarar una variable con la palabra reservada `var` y el compilador
se encargará de inferir el tipo de dato, solo se puede usar para definir variables
locales. **Funciona a partir de Java 10**.

```java
String nombre = "Juan";
int edad = 20;
var edad = 20;
```

Los tipos de datos se dividen en dos grupos:

- **Primitivos**: Son los tipos de datos básicos que se utilizan para almacenar
  valores simples, se pasan por valor (se compara su valor):

  - `byte`: indica un número entero de 8 bits con signo, por defecto es 0.
  - `short`: indica un número entero de 16 bits con signo, por defecto es 0.
  - `int`: indica un número entero de 32 bits con signo, por defecto es 0.
    Es el que normalmente vamos a utilizar para ahorrar espacio dado que los
    sistemas operativos vienen por 32 o 64 bits, usando un tipo de dato de
    menos bits como el byte no estariamos ahorrando porque igualmente se guarda
    en 32 bits.
  - `long`: indica un número entero de 64 bits con signo, por defecto es 0.
  - `float`: indica un número de coma flotante de 32 bits. Por defecto los tipos
    de datos de coma flotante son `double`, por lo que si queremos usar `float`
    debemos agregar una `F` al final del número.
  - `double`: indica un número de coma flotante de 64 bits, por defecto es 0.0
  - `char`: indica un caracter Unicode de 16 bits. Para poner solo un caracter
    usamos comillas simples y se puede poner en su forma literal, decimal o
    el Unicode (se debe anteponer `\u` seguido del código Unicode).
  - `boolean`: indica un valor booleano, que puede ser `true` o `false`, por defecto es `false`.

- **Referenciados**: Son los tipos de datos que se utilizan para almacenar objetos,
  se pasan por referencia (se compara su referencia en memoria y no su contenido), por defecto tienen el valor de null:
  - `String`: indica una cadena de caracteres, es una clase de Java. Se definen con comillas dobles, por defecto es null.
  - `Integer`: indica un número entero de 32 bits con signo, es una clase de Java.
  - `Array`: indica un arreglo de datos.
  - `Clases`: indica un objeto de una clase.
  - `Interfaces`: indica un objeto de una interfaz.

Conversión de tipos:

```java
// de String a int
int edad = Integer.parseInt("20");
// de String a double
double edad = Double.parseDouble("20.5");
// de int a String
String edad = String.valueOf(20);
// de double a String
String edad = String.valueOf(20.5);
```

### Operadores

- **Aritméticos**: `+`, `-`, `*`, `/`, `%`.
- **Relacionales**: `>`, `<`, `>=`, `<=`, `==`, `!=`.
- **Lógicos**: `&&`, `||`, `!`.
- **Asignación**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`.
- **Incremento y decremento**: `++`, `--`.
- **Ternario**: `?`, `:`.
- **Bit a bit**: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`.
- **De instancia**: `instanceof`.
- **De casteo**: `(tipo)`.

Hay 2 formas de incrementar o decrementar una variable:

```java
int edad = 20;
// forma postfija, primero se asigna el valor y luego se incrementa
edad++;
// forma prefija, primero se incrementa y luego se asigna el valor
++edad;
// si se usa postfija en una operación, primero se realiza la operación y luego
// se incrementa, lo que hace que el incremento no se vea reflejado en la operación
int edad = 20;
int resultado = edad++ * 2; // resultado = 40, edad = 21
// si se usa prefija en una operación, primero se incrementa y luego se realiza
// la operación, lo que hace que el incremento se vea reflejado en la operación
int edad = 20;
int resultado = ++edad * 2; // resultado = 42, edad = 21
```

Comparar dos objetos de tipo `String`.  
Para comparar dos objetos de tipo String no se puede usar el operador
relacional == porque compara las referencias de los objetos, no los valores.
Para comparar los valores se debe usar el método equals:

```java
String nombre1 = "Juan";
String nombre2 = "Juan";
boolean sonIguales = nombre1.equals(nombre2);
// sonIguales = true
```

Operador ternario:

```java
int num = 11;
String resultado = (num % 2 == 0) ? "Número par" : "Número impar";
// resultado = "Número impar"
```

Operador instanceof. Permite saber si un objeto es de un tipo determinado:

```java
String texto = "Hola";
boolean esString = texto instanceof String;
// esString = true
```

### Clases

Las clases son plantillas que se utilizan para crear objetos.  
Se escribe en PascalCase.

Dentro de las clases se crea una variable especial llamada `this` que hace
referencia al objeto actual, a través de ella se puede acceder a los atributos
y métodos del objeto. Dentro de un método estático no se puede usar `this` porque
no hace referencia a un objeto.

Si no se define un constructor, Java crea uno por defecto que no recibe parámetros
y no hace nada.

Las clases quedan asociadas a paquetes, que son las carpetas donde estan contenidas,
para poder usar una clase de otro paquete se debe importar, ej: `import clases.Persona;`.

Solo debe haber una clase pública en el archivo, las demás clases que se agreguen no
deben tener este modificador, por defecto tendran el modificador `default` o
`package` y solo se podrán acceder desde el mismo paquete.

Con el modificador `private` se puede restringir el acceso a los atributos y métodos
de una clase, solo se podrá acceder a ellos desde la misma clase.  
Con el modificador `protected` se puede restringir el acceso a los atributos y métodos
de una clase, solo se podrá acceder a ellos desde la misma clase y desde las clases
que heredan de ella.

Se puede acceder a los atributos a través de getters y setters, que son métodos
públicos que se crean dentro de la clase.

Se puede agregar el metodo `toString` a una clase para que devuelva el estado del
objeto en un String.

```java
// definir una clase
public class Persona {
  // atributos
  private String nombre;
  private String apellido;
  private int edad;
  // métodos
  public void saludar() {
    System.out.println("Hola");
  }
  // getters y setters
  public String getNombre() {
    return this.nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  public String getApellido() {
    return this.apellido;
  }
  public void setApellido(String apellido) {
    this.apellido = apellido;
  }
  public int getEdad() {
    return this.edad;
  }
  public void setEdad(int edad) {
    this.edad = edad;
  }
  // metodo toString
  @Override // anotación para indicar que se sobreescribe el método
  public String toString() {
    return "Persona [nombre=" + nombre + ", apellido=" + apellido + ", edad=" + edad + "]";
  }
}
// crear un objeto de la clase Persona
Persona persona = new Persona();
// acceder a los métodos del objet
persona.saludar();
// acceder a los atributos del objeto usando getters y setters
persona.setNombre("Juan");
persona.setApellido("Perez");
persona.setEdad(20);
System.out.println(persona.getNombre());
System.out.println(persona.getApellido());
System.out.println(persona.getEdad());
```

También se puede crear un constructor para inicializar los atributos del objeto.  
El constructor se llama igual que la clase y no tiene tipo de retorno.

```java
public class Persona {
  String nombre;
  String apellido;
  int edad;
  // constructor
  public Persona(String nombre, String apellido, int edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}
// crear un objeto de la clase Persona
Persona persona = new Persona("Juan", "Perez", 20);
```

Sobrecarga de constructores.  
Se pueden crear varios constructores con diferentes parámetros.

```java
public class Persona {
  String nombre;
  String apellido;
  int edad;
  // constructor
  public Persona(String nombre, String apellido, int edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  // constructor
  public Persona(String nombre, String apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  // constructor
  public Persona(String nombre) {
    this.nombre = nombre;
  }
}
// crear un objeto de la clase Persona
Persona persona1 = new Persona("Juan", "Perez", 20);
Persona persona2 = new Persona("Juan", "Perez");
Persona persona3 = new Persona("Juan");
```

Los métodos u atributos estáticos se pueden usar sin necesidad de crear un
objeto de la clase, quedan asociados a la clase y no al objeto, por lo tanto,
un método o atributo estático es común a todos los objetos que se crean a
partir de esa clase. Sólo pueden acceder a otros atributos y métodos
estáticos.

```java
public class Persona {
  private String nombre;
  // atributo estático
  private static int contadorPersonas;

  public Persona(String nombre) {
    this.nombre = nombre;
    // acceder a un atributo estático
    Persona.contadorPersonas++;
  }

  public String getNombre() {
    return this.nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  // método estático
  public static int getContadorPersonas() {
    return Persona.contadorPersonas;
  }
  public static void setContadorPersonas(int contador) {
    Persona.contadorPersonas = contador;
  }
}
// crear un objeto de la clase Persona
Persona persona1 = new Persona("Juan");
Persona persona2 = new Persona("Pedro");
// acceder a un atributo estático
System.out.println(Persona.contadorPersonas); // 2
```

La palabra reservada `final` se usa para dejar declarado definitivamente un
atributo, método o clase. Cuando se usa en un atributo o método, no se puede
modificar, cuando se usa en una clase, no se puede heredar de ella.

Cuando se usa en conjunto con `static` se crea una constante, es decir, un
atributo que no se puede modificar y que pertenece a la clase y no a los objetos. Se debe declarar en mayúsculas y separados por guión bajo.

```java
public class Persona {
  // constante
  public static final int EDAD_MAXIMA = 100;
}
// acceder a una constante
System.out.println(Persona.EDAD_MAXIMA);
```

### Herencia

La herencia es un mecanismo que permite crear nuevas clases a partir de otras
clases existentes. Solo se puede heredar de una clase, no se puede heredar de
varias clases.

```java
public class Persona {
  private String nombre;
  private String apellido;
  private int edad;
  // constructor
  public Persona(String nombre, String apellido, int edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  // getters y setters
  public String getNombre() {
    return this.nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  public String getApellido() {
    return this.apellido;
  }
  public void setApellido(String apellido) {
    this.apellido = apellido;
  }
  public int getEdad() {
    return this.edad;
  }
  public void setEdad(int edad) {
    this.edad = edad;
  }
  // metodo toString
  @Override // anotación para indicar que se sobreescribe el método
  public String toString() {
    return "Persona [nombre=" + nombre + ", apellido=" + apellido + ", edad=" + edad + "]";
  }
}

// crear una clase que hereda de Persona
public class Empleado extends Persona {
  private int idEmpleado;
  private double sueldo;
  // constructor
  public Empleado(String nombre, String apellido, int edad, int idEmpleado, double sueldo) {
    // llamar al constructor de la clase padre
    super(nombre, apellido, edad);
    this.idEmpleado = idEmpleado;
    this.sueldo = sueldo;
  }
  // getters y setters
  public int getIdEmpleado() {
    return this.idEmpleado;
  }
  public void setIdEmpleado(int idEmpleado) {
    this.idEmpleado = idEmpleado;
  }
  public double getSueldo() {
    return this.sueldo;
  }
  public void setSueldo(double sueldo) {
    this.sueldo = sueldo;
  }
  // metodo toString
  @Override // anotación para indicar que se sobreescribe el método
  public String toString() {
    return "Empleado [idEmpleado=" + idEmpleado + ", sueldo=" + sueldo + ", nombre=" + getNombre() + ", apellido=" + getApellido() + ", edad=" + getEdad() + "]";
  }
}
// crear un objeto de la clase Empleado
Empleado empleado = new Empleado("Juan", "Perez", 20, 1, 1000);
```

### Clase Scanner

La clase `Scanner` se utiliza para leer datos de la consola.  
Se debe importar `import java.util.Scanner;`

```java
// leer datos de la consola
// System.in es la entrada estándar
Scanner scanner = new Scanner(System.in);
// imprimir en consola y dejar el cursor en la misma línea
System.out.print("Ingrese su nombre: ");
// asignar el valor leído
// nextLine lee una línea completa de la consola, detiene la ejecución
// del programa hasta que el usuario ingrese un valor y presione enter
// devuelve un String
String nombre = scanner.nextLine();
System.out.print("Ingrese su apellido: ");
String apellido = scanner.nextLine();
// imprimir en consola y dejar el cursor en la siguiente línea
System.out.println("Hola " + nombre + " " + apellido);
// cerrar el scanner
scanner.close();
```

### Arreglos

Los arreglos son estructuras de datos que permiten almacenar varios valores
del mismo tipo, los arreglos son de tipo objeto. Una vez se crea un arreglo,
no se puede cambiar su tamaño. Si se quiere agregar un elemento, se debe crear
un nuevo arreglo con el tamaño necesario y copiar los elementos del arreglo 
anterior, o se puede usar otra estructura de datos como una lista, set o map, 
que si permiten un tamaño dinámico.

```java
// declarar un arreglo de enteros
int[] numeros;
// inicializar el arreglo
numeros = new int[3];
// asignar valores al arreglo
numeros[0] = 1;
numeros[1] = 2;
numeros[2] = 3;
// declarar e inicializar un arreglo de enteros
int[] numeros1 = new int[3];
// declarar e inicializar un arreglo de enteros
int[] numeros2 = {1, 2, 3};
// acceder a un elemento del arreglo
System.out.println(numeros[0]);
// recorrer un arreglo
for (int i = 0; i < numeros.length; i++) {
  System.out.println(numeros[i]);
}
// recorrer un arreglo con for each
for (int numero : numeros) {
  System.out.println(numero);
}

// declarar un arreglo de Strings
String[] nombres = {"Juan", "Pedro", "Maria"};

// declarar un arreglo de objetos
Persona[] personas = new Persona[3];
// inicializar los objetos del arreglo
personas[0] = new Persona("Juan", "Perez", 20);
personas[1] = new Persona("Pedro", "Gomez", 30);
personas[2] = new Persona("Maria", "Lopez", 40);
// recorrer un arreglo de objetos
for (Persona persona : personas) {
  System.out.println(persona);
}

// declarar e inicializar un arreglo de enteros de 2 dimensiones
int[][] numeros = {{1, 2}, {3, 4}};
// acceder a un elemento del arreglo
System.out.println(numeros[0][0]);
// recorrer un arreglo de 2 dimensiones
for (int i = 0; i < numeros.length; i++) {
  for (int j = 0; j < numeros[i].length; j++) {
    System.out.println(numeros[i][j]);
  }
}
// recorrer un arreglo de 2 dimensiones con for each
for (int[] fila : numeros) {
  for (int numero : fila) {
    System.out.println(numero);
  }
}
```
