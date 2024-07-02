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
    Ej: `char letra = 'a';`, `char letra = 97;`, `char letra = '\u0061';`.
  - `boolean`: indica un valor booleano, que puede ser `true` o `false`, por defecto es `false`.

- **Referenciados**: Son los tipos de datos que se utilizan para almacenar objetos,
  se pasan por referencia (se compara su referencia en memoria y no su contenido), por defecto tienen el valor de null:
  - `String`: indica una cadena de caracteres, es una clase de Java. Se definen con comillas dobles, por defecto es null.
  - `Integer`: indica un número entero de 32 bits con signo, es una clase de Java.
  - `Array`: indica un arreglo de datos.
  - `Clases`: indica un objeto de una clase.
  - `Interfaces`: indica un objeto de una interfaz.

**Conversión de tipos (casting o casteo):**

```java
// de String a int
int edad = Integer.parseInt("20");
// de String a double
double edad = Double.parseDouble("20.5");
// de int a String
String edad = String.valueOf(20);
// de double a String
String edad = String.valueOf(20.5);
// de int a double
int edad = 20;
double edad = edad;
// de double a int
double edad = 20.5;
int edad = (int) edad;
// de object a string
Object nombreObject = "Juan";
String nombre = (String) nombreObject;
```

**Conversión de objetos:**

```java
// de String a Integer
String edad = "20";
Integer edad = Integer.valueOf(edad);
// de Integer a String
Integer edad = 20;
String edad = String.valueOf(edad);
// de una clase a otra
Persona persona = new Persona();
Empleado empleado = (Empleado) persona;
```

### AutoBoxing y UnBoxing

El autoboxing es la conversión automática que hace Java de un tipo primitivo
a su clase envolvente (wrapper) y el unboxing es la conversión automática que
hace Java de un objeto de tipo envolvente a su tipo primitivo.  
Se usa para convertir tipos primitivos en objetos y viceversa, se usa su clase
envolvente cuando se quiere acceder a los atributos o métodos de la clase.

- Para el tipo primitivo `int`, su clase envolvente es `Integer`.
- Para el tipo primitivo `double`, su clase envolvente es `Double`.
- Para el tipo primitivo `boolean`, su clase envolvente es `Boolean`.
- Para el tipo primitivo `char`, su clase envolvente es `Character`.

```java
// autoboxing
Integer entero = 10; // se convierte a Integer, es decir, a un objeto
// unboxing
int entero2 = entero; // se convierte a int, es decir, a un tipo primitivo
```

### Arrays o arreglos

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

### Listas

Las listas son estructuras de datos que permiten almacenar varios valores
del mismo tipo, pero con un tamaño dinámico.

```java
// importar desde util
import java.util.*;
// declarar una lista de enteros
List numeros = new ArrayList();
// declarar e inicializar una lista de enteros
List numeros = new ArrayList(Arrays.asList(1, 2, 3));
// agregar elementos a la lista
numeros.add(1);
// acceder a un elemento de la lista
System.out.println(numeros.get(0));
// modificar un elemento (en la posicion 0 pone el 2)
numeros.set(0, 2);
// eliminar un elemento
numeros.remove(0);
// obtener el tamaño de la lista
System.out.println(numeros.size());
// comprobar si la lista está vacía
System.out.println(numeros.isEmpty());
// comprobar si un elemento está en la lista
System.out.println(numeros.contains(1));
// vaciar la lista
numeros.clear();
// recorrer una lista
for (int i = 0; i < numeros.size(); i++) {
  System.out.println(numeros.get(i));
}
// recorrer una lista con for each
for (int numero : numeros) {
  System.out.println(numero);
}
// recorrer con funciones lambda o funciones flecha
numeros.forEach(numero -> {
  System.out.println(numero)
});
```

### Sets

Los sets son estructuras de datos que permiten almacenar varios valores
del mismo tipo, pero no permiten duplicados. No garantiza el orden de los elementos.

```java
// importar desde util
import java.util.*;
// declarar un set de enteros
Set numeros = new HashSet();
// agregar elementos al set
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(1);
// acceder a un elemento del set
System.out.println(numeros);
// recorrer un set
for (int numero : numeros) {
  System.out.println(numero); // 1, 2, 3
}
```

### Maps

Los maps son estructuras de datos que permiten almacenar varios valores
del mismo tipo, pero no permiten duplicados de sus llaves. Se compone de una clave y un valor.

```java
// importar desde util
import java.util.*;
// declarar un map de enteros
Map numeros = new HashMap();
// agregar elementos al map
numeros.put("uno", 1);
// acceder a un elemento del map
System.out.println(numeros.get("uno"));
// recorrer un map
for (Object clave : numeros.keySet()) {
  System.out.println(clave + ": " + numeros.get(clave));
}
// imprimir los valores
for (Object valor : numeros.values()) {
  System.out.println(valor);
}
// recorrer un map con funciones lambda o funciones flecha
numeros.forEach((clave, valor) -> {
  System.out.println(clave + ": " + valor);
});
```

### Genericos

Los genéricos son una característica de Java que permite definir clases, interfaces
y métodos que pueden trabajar con tipos de datos genéricos.

```java
// declarar una clase genérica
public class ClaseGenerica<T> {
  // atributo de tipo genérico
  private T objeto;
  // constructor
  public ClaseGenerica(T objeto) {
    this.objeto = objeto;
  }
  // método que devuelve el objeto
  public T getObjeto() {
    return this.objeto;
  }
}

// usar una clase genérica
ClaseGenerica<String> claseGenerica = new ClaseGenerica<>("Hola");
System.out.println(claseGenerica.getObjeto());
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

### Argumentos o parámetros variables

Se pueden definir métodos que reciban un número variable de argumentos,
estos deben ir al final y son un array.

```java
// definir un método que recibe un número variable de argumentos
public static int sumar(String comentario, int... numeros) {
  int suma = 0;
  for (int numero : numeros) {
    suma += numero;
  }
  return suma;
}
// llamar al método
int resultado = sumar("Hola", 1, 2, 3, 4, 5);
// resultado = 15
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

Con el modificador `public` se puede acceder a los atributos y métodos de una clase
desde cualquier parte del programa.  
Con el modificador `private` se puede restringir el acceso a los atributos y métodos
de una clase, solo se podrá acceder a ellos desde la misma clase.  
Con el modificador `protected` se puede restringir el acceso a los atributos y métodos
de una clase, solo se podrá acceder a ellos desde la misma clase y desde las clases
que heredan de ella, o que estan en el mismo paquete.  
Por defecto, si no se define un modificador, se usa el modificador `default` o
`package`, que permite acceder a los atributos y métodos de una clase desde el
mismo paquete.  
Solo debe haber una clase pública en el archivo, las demás clases que se agreguen no
deben tener este modificador.

Se puede acceder a los atributos a través de getters y setters, que son métodos
públicos que se crean dentro de la clase.

Se puede agregar el metodo `toString` a una clase para que devuelva el estado del
objeto en un String.

```java
// definir una clase
public class Persona {
  // atributos
  private String nombre;
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
  public int getEdad() {
    return this.edad;
  }
  public void setEdad(int edad) {
    this.edad = edad;
  }
  // metodo toString
  @Override // anotación para indicar que se sobreescribe el método
  public String toString() {
    return "Persona [nombre=" + nombre + ", edad=" + edad + "]";
  }
}
// crear un objeto de la clase Persona
Persona persona = new Persona();
// acceder a los métodos del objet
persona.saludar();
// acceder a los atributos del objeto usando getters y setters
persona.setNombre("Juan");
persona.setEdad(20);
System.out.println(persona.getNombre());
System.out.println(persona.getEdad());
```

También se puede crear un constructor para inicializar los atributos del objeto.  
El constructor se llama igual que la clase y no tiene tipo de retorno.

```java
public class Persona {
  String nombre;
  int edad;
  // constructor
  public Persona(String nombre, int edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
// crear un objeto de la clase Persona
Persona persona = new Persona("Juan", 20);
```

Sobrecarga de constructores.  
Se pueden crear varios constructores con diferentes parámetros.

```java
public class Persona {
  String nombre;
  int edad;
  // constructor
  public Persona(String nombre, int edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  // constructor
  public Persona(String nombre) {
    this.nombre = nombre;
  }
}
// crear un objeto de la clase Persona
Persona persona1 = new Persona("Juan", 20);
Persona persona3 = new Persona("Juan");
```

Los métodos u atributos **estáticos (static)** se pueden usar sin necesidad de crear un
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
atributo que no se puede modificar y que pertenece a la clase y no a los objetos.  
Se debe declarar en mayúsculas y separados por guión bajo.

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
  private int edad;
  // constructor
  public Persona(String nombre, int edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  // getters y setters
  public String getNombre() {
    return this.nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
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
    return "Persona [nombre=" + nombre + ", edad=" + edad + "]";
  }
}

// crear una clase que hereda de Persona
public class Empleado extends Persona {
  private int idEmpleado;
  private double sueldo;
  // constructor
  public Empleado(String nombre, int edad, int idEmpleado, double sueldo) {
    // llamar al constructor de la clase padre
    super(nombre, edad);
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
    return "Empleado [idEmpleado=" + idEmpleado + ", sueldo=" + sueldo + ", nombre=" + getNombre() + ", edad=" + getEdad() + "]";
  }
}
// crear un objeto de la clase Empleado
Empleado empleado = new Empleado("Juan", 20, 1, 1000);
```

Se puede sobreescribir un método de la clase padre en la clase hija.

```java
// crear clase padre
public class Empleado {
  String nombre;
  int sueldo;
  // constructor
  public Empleado(String nombre, int sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }
  // método
  public String obtenerDetalles() {
    return "nombre=" + nombre + ", sueldo=" + sueldo;
  }
}
// crear clase hija
public class Gerente extends Empleado {
  String departamento;
  // constructor
  public Gerente(String nombre, int sueldo, String departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }
  // sobreescribir el método de la clase padre
  @Override // anotación para indicar que se sobreescribe el método
  public String obtenerDetalles() {
    // se puede llamar al método de la clase padre
    return super.obtenerDetalles() + ", departamento=" + departamento;
  }
}
// crear un objeto de la clase Gerente
Gerente gerente = new Gerente("Juan", 1000, "Sistemas");
// llamar al método
System.out.println(gerente.obtenerDetalles());
```

### Polimorfismo

El polimorfismo es la capacidad que tienen los objetos de comportarse de
diferentes formas.

```java
// crear una clase padre
public class Empleado {
  String nombre;
  int sueldo;
  // constructor
  public Empleado(String nombre, int sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }
  // método
  public String obtenerDetalles() {
    return "nombre=" + nombre + ", sueldo=" + sueldo;
  }
}
// crear clase hija
public class Gerente extends Empleado {
  String departamento;
  // constructor
  public Gerente(String nombre, int sueldo, String departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }
  // sobreescribir el método de la clase padre
  @Override // anotación para indicar que se sobreescribe el método
  public String obtenerDetalles() {
    // se puede llamar al método de la clase padre
    return super.obtenerDetalles() + ", departamento=" + departamento;
  }
}
// crear clase hija
public class Vendedor extends Empleado {
  String zona;
  // constructor
  public Vendedor(String nombre, int sueldo, String zona) {
    super(nombre, sueldo);
    this.zona = zona;
  }
  // sobreescribir el método de la clase padre
  @Override // anotación para indicar que se sobreescribe el método
  public String obtenerDetalles() {
    // se puede llamar al método de la clase padre
    return super.obtenerDetalles() + ", zona=" + zona;
  }
}
// crear un objeto de la clase Gerente
Gerente gerente = new Gerente("Juan", 1000, "Sistemas");
// crear un objeto de la clase Vendedor
Vendedor vendedor = new Vendedor("Pedro", 500, "Zona 1");
// crear un arreglo de objetos de la clase Empleado
Empleado[] empleados = new Empleado[2];
// asignar objetos a las posiciones del arreglo
empleados[0] = gerente;
empleados[1] = vendedor;
// recorrer el arreglo
for (Empleado empleado : empleados) {
  // se llama al metodo segun el tipo de objeto
  // como ambas referencias que se pasan son hijas de la
  // clase Empleado, se pueden usar ambas aqui
  // esto es polimorfismo
  System.out.println(empleado.obtenerDetalles());
}
```

### Clases abstractas

Las clases abstractas son clases que no se pueden instanciar, es decir, no se
pueden crear objetos de ellas. Se usan para definir una clase base que no se
puede instanciar, pero que se puede heredar de ella.

```java
// crear una clase abstracta
public abstract class FiguraGeometrica {
  // atributos
  protected String tipoFigura;
  // constructor
  protected FiguraGeometrica(String tipoFigura) {
    this.tipoFigura = tipoFigura;
  }
  // método abstracto, no define la implementación
  public abstract void dibujar();
  // getters y setters
  public String getTipoFigura() {
    return this.tipoFigura;
  }
  public void setTipoFigura(String tipoFigura) {
    this.tipoFigura = tipoFigura;
  }
}
// crear una clase que hereda de FiguraGeometrica
public class Rectangulo extends FiguraGeometrica {
  // constructor
  public Rectangulo(String tipoFigura) {
    super(tipoFigura);
  }
  // sobreescribir el método abstracto, se debe definir la implementación
  @Override // anotación para indicar que se sobreescribe el método
  public void dibujar() {
    System.out.println("Aquí se debería dibujar un: " + this.getClass().getSimpleName());
  }
}
// crear una clase que hereda de FiguraGeometrica
public class Triangulo extends FiguraGeometrica {
  // constructor
  public Triangulo(String tipoFigura) {
    super(tipoFigura);
  }
  // sobreescribir el método abstracto, se debe definir la implementación
  @Override // anotación para indicar que se sobreescribe el método
  public void dibujar() {
    System.out.println("Aquí se debería dibujar un: " + this.getClass().getSimpleName());
  }
}
// crear un objeto de la clase Rectangulo
FiguraGeometrica rectangulo = new Rectangulo("Rectangulo");
// crear un objeto de la clase Triangulo
FiguraGeometrica triangulo = new Triangulo("Triangulo");
// crear un arreglo de objetos de la clase FiguraGeometrica
FiguraGeometrica[] figuras = new FiguraGeometrica[2];
// asignar objetos a las posiciones del arreglo
figuras[0] = rectangulo;
figuras[1] = triangulo;
// recorrer el arreglo
for (FiguraGeometrica figura : figuras) {
  figura.dibujar();
}
```

### Clase Object

La clase `Object` es la clase padre de todas las clases de Java, por lo tanto,
todos los objetos heredan de ella.  
La clase `Object` tiene los siguientes métodos:

- `toString()`: devuelve una cadena de caracteres que representa al objeto.
- `equals()`: compara el contenido de dos objetos y devuelve true si son iguales.
- `hashCode()`: compara el contenido de dos objetos pero devuelve un número entero
  que representa al objeto y los compara.
- `getClass()`: devuelve el nombre de la clase del objeto.
- `clone()`: crea un nuevo objeto con los mismos valores del objeto original.

```java
// crear una clase
public class Persona {
  String nombre;
  int edad;
  // constructor
  public Persona(String nombre, int edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  // getters y setters
  public String getNombre() {
    return this.nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
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
    return "Persona [nombre=" + nombre + ", edad=" + edad + "]";
  }
  // metodo hashCode
  @Override // anotación para indicar que se sobreescribe el método
  public int hashCode() {
    // se puede usar el método hashCode de la clase Object
    // o se puede crear uno propio
    return super.hashCode();
  }
  // metodo equals
  @Override // anotación para indicar que se sobreescribe el método
  public boolean equals(Object obj) {
    // si el objeto es el mismo, devuelve true
    if (this == obj) {
      return true;
    }
    // si el objeto es nulo o no es una instancia de la clase Persona, devuelve false
    if (obj == null || !(obj instanceof Persona)) {
      return false;
    }
    // si el objeto es una instancia de la clase Persona, devuelve true
    Persona persona = (Persona) obj;
    return this.nombre.equals(persona.nombre) && this.edad == persona.edad;
  }
}
// crear un objeto de la clase Persona
Persona persona1 = new Persona("Juan", 20);
Persona persona2 = new Persona("Juan", 20);
// comparar objetos
System.out.println(persona1 == persona2); // false
System.out.println(persona1.equals(persona2)); // true
System.out.println(persona1.hashCode() == persona2.hashCode()); // true
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

### Otras clases

- Clase `Math`: contiene métodos matemáticos.
- Clase `Date`: permite trabajar con fechas.
- Clase `Calendar`: permite trabajar con fechas.
- Clase `System`: permite trabajar con el sistema.

### Paquetes

Los paquetes son carpetas que contienen clases, se usan para organizar y agrupar
clases y evitar conflictos de nombres.

```java
// declarar un paquete
package com.example;
// importar una clase de otro paquete
import com.example.Persona;
// importar todas las clases de un paquete
import com.example.*;
// importar estaticos
import static com.example.Persona.EDAD_MAXIMA;
```

### Enumeraciones o enums

Las enumeraciones son un tipo de dato que permite definir un conjunto de
constantes (por defecto son públicos, estáticos y finales), se usan para
definir valores que no van a cambiar.  
Se escribe en PascalCase.

```java
// declarar una enumeración
public enum Dias {
  LUNES,
  MARTES,
  MIERCOLES,
  JUEVES,
  VIERNES,
  SABADO,
  DOMINGO
}
// usar una enumeración
Dias dia = Dias.LUNES;
// acceder a una constante de la enumeración
System.out.println(dia); // LUNES
// recorrer una enumeración
for (Dias d : Dias.values()) {
  System.out.println(d);
}
```

Se pueden agregar atributos y métodos a una enumeración:

```java
// declarar una enumeración
public enum Dias {
  LUNES("Lunes", 1),
  MARTES("Martes", 2),
  MIERCOLES("Miércoles", 3),
  JUEVES("Jueves", 4),
  VIERNES("Viernes", 5),
  SABADO("Sábado", 6),
  DOMINGO("Domingo", 7);

  // atributos
  private final String nombre;
  private final int numero;

  // constructor
  private Dias(String nombre, int numero) {
    this.nombre = nombre;
    this.numero = numero;
  }

  // getters
  public String getNombre() {
    return this.nombre;
  }
  public int getNumero() {
    return this.numero;
  }

  // método toString
  @Override
  public String toString() {
    return "Dias [nombre=" + nombre + ", numero=" + numero + "]";
  }
}
// usar una enumeración
Dias dia = Dias.LUNES;
// acceder a una constante de la enumeración
System.out.println(dia); // LUNES
// acceder a un atributo de la enumeración
System.out.println(dia.getNombre()); // Lunes
System.out.println(dia.getNumero()); // 1
// recorrer una enumeración
for (Dias d : Dias.values()) {
  System.out.println(d);
}
```

### Bloques de inicialización

Los bloques de inicialización se usan para inicializar los atributos de una
clase. Se ejecutan antes que los constructores. Pueden ser estáticos o dinámicos.

```java
public class Persona {
  private final int idPersona;
  private static int contadorPersonas;
  // bloque de inicialización estático
  static {
    // se ejecuta antes que los constructores
    // se usa para inicializar los atributos estáticos
    System.out.println("Ejecución bloque estático");
    // se puede inicializar un atributo estático
    Persona.contadorPersonas = 10;
  }
  // bloque de inicialización no estático
  {
    // se ejecuta antes que los constructores
    // se usa para inicializar los atributos no estáticos
    System.out.println("Ejecución bloque no estático");
    // se puede inicializar un atributo no estático
    this.idPersona = Persona.contadorPersonas++;
  }
  // constructor
  public Persona() {
    System.out.println("Ejecución del constructor");
  }
  // getters y setters
  public int getIdPersona() {
    return this.idPersona;
  }
  public static int getContadorPersonas() {
    return Persona.contadorPersonas;
  }
  public static void setContadorPersonas(int contador) {
    Persona.contadorPersonas = contador;
  }
}
// crear un objeto de la clase Persona
Persona persona = new Persona();
// acceder a un atributo estático
System.out.println(Persona.contadorPersonas); // 10
// acceder a un atributo no estático
System.out.println(persona.getIdPersona()); // 10
// crear otro objeto de la clase Persona
Persona persona2 = new Persona();
System.out.println(persona2.getIdPersona()); // 11
```

### Interfaces

Las interfaces son un tipo de dato que permite definir un conjunto de métodos
que deben ser implementados por las clases que la implementan.  
Los metodos de una interfaz no tienen una implmentacion por lo que son abstractos por defecto, ademas de publicos.  
Si asignamos un valor a un atributo de una interfaz, este será una constante, es decir, final y estático.  
Conviene mas usar una clase abstracta, cuando la implementaciòn tiene que ver mas con sus caracteristicas,
si es mas de comportamiento, se usa una interfaz.

```java
// declarar una interfaz
public interface AccesoDatos {
// métodos
void insertar();
}
// implementar una interfaz
public class ImplementacionMySql implements AccesoDatos {
  // implementar los métodos de la interfaz
  @Override
  public void insertar() {
    System.out.println("Insertar desde MySql");
  }
}
// implementar una interfaz
public class ImplementacionOracle implements AccesoDatos {
  // implementar los métodos de la interfaz
  @Override
  public void insertar() {
    System.out.println("Insertar desde Oracle");
  }
}
// crear un objeto de la clase ImplementacionMySql
AccesoDatos datos = new ImplementacionMySql();
// llamar a los métodos de la interfaz
datos.insertar();
// crear un objeto de la clase ImplementacionOracle
AccesoDatos datos2 = new ImplementacionOracle();
// llamar a los métodos de la interfaz
datos2.insertar();
```

### JavaBeans

Los JavaBeans son clases que siguen una serie de convenciones, al cumplir estas convenciones
algunos frameworks y herramientas de Java pueden trabajar con ellas sin necesidad de configuración.

- Deben tener un constructor sin parámetros.
- Deben tener atributos privados.
- Deben tener métodos getters y setters para acceder a los atributos.
- Deben implementar la interfaz `Serializable` si se quiere guardar en un archivo.

Serializable permite convertir un objeto a bits, para que pueda ser transferido
a través de la red o guardado en un archivo.  
Una vez se recibe el objeto se aplica el concepto de deserializacion para volver
a construir el objeto.

```java
// declarar una clase JavaBean
public class Persona implements Serializable {
  // atributos
  private String nombre;
  private int edad;
  // constructor sin parámetros
  public Persona() {
  }
  // getters y setters
  public String getNombre() {
    return this.nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  public int getEdad() {
    return this.edad;
  }
  public void setEdad(int edad) {
    this.edad = edad;
  }
}
```

### Excepciones

Las excepciones son errores que se producen durante la ejecución de un programa.
Java maneja las excepciones con un sistema de excepciones que permite controlar
los errores y evitar que el programa se detenga.

Las excepciones se dividen en dos tipos:

- Excepciones comprobadas o checked: son las que se deben manejar obligatoriamente
  en el código, si no se manejan, el programa no compila. Pertenecen las clases
  que heredan de `Exception` pero no de `RuntimeException`.
- Excepciones no comprobadas o unchecked: no estan obligadas a ser manejadas.
  Pertenecen las clases que heredan de `RuntimeException`.

```java
// lanzar una excepción
throw new Exception("Error");
// capturar una excepción
try {
  // código que puede lanzar una excepción
} catch (Exception e) {
  // código que se ejecuta si se lanza una excepción
  System.out.println(e.getMessage());
} finally {
  // código que se ejecuta siempre, haya o no excepción
}
```

### Threads

Los threads o hilos son la forma de ejecutar varios procesos de forma simultánea
en un programa.

```java
// crear un hilo
Thread hilo = new Thread() {
  // método run
  @Override
  public void run() {
    // código que se ejecuta en el hilo
    System.out.println("Hola desde el hilo");
  }
};
// iniciar el hilo
hilo.start();
```

### Expresiones lambda

Las expresiones lambda son funciones anónimas que se pueden pasar como argumentos
a un método o asignar a una variable.

```java
// declarar una expresión lambda
Runnable r = () -> {
  System.out.println("Hola desde la expresión lambda");
};
// ejecutar la expresión lambda
r.run();
```

### Streams

Los streams son una secuencia de elementos que se pueden procesar de forma
secuencial o paralela.

```java
// declarar un stream
List<String> lista = Arrays.asList("uno", "dos", "tres");
// recorrer un stream
lista.stream().forEach(System.out::println);
// filtrar un stream
lista.stream().filter(e -> e.startsWith("d")).forEach(System.out::println);
// ordenar un stream
lista.stream().sorted().forEach(System.out::println);
// mapear un stream
lista.stream().map(String::toUpperCase).forEach(System.out::println);
// contar un stream
long cantidad = lista.stream().count();
System.out.println(cantidad);
```
