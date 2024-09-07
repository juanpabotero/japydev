---
id: 'clean-code'
title: 'Clean Code'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/code.svg'
---

Codigo limpio es aquel que se ha escrito con la intencion de que otra
persona pueda entenderlo

## Convenciones

- Nombrar variables usando lowercamelcase y tener un significado explicito

  - no se deberian crear nombres de variables que empiecen con numeros
  - no debe llevar .
  - $ en el nombre de una variable es simplemente un caracter mas
  - \_ para separar numeros

- Una constante de manera global se puede definir en mayusculas y cada
  palabra separada por un \_

- Nombrar funciones o metodos usando lowercamelcase y
  debe ser un verbo + sustantivo

- Nombrar clases e interfaces usando uppercamelcase, usar sustantivos

- Evitar lineas de mas de 80 caracteres

- 1 identacion = 4 espacios

## Principios

### Principios SOLID:

- SINGLE RESPONSABILITY (SRP): responsabilidad unica.
  Nunca deberia haber mas de un motivo por el cual cambiar una clase.
  Una clase o funcion deberia tener una unica responsabilidad y hacerla
  bien (esto no significa que solo haga una cosa).

- OPEN AND CLOSE (OCP): abierto y cerrado.
  Establece que las entidades de software (clases, modulos, metodos, etc)
  deben estar abiertas para la extensión, pero cerradas para la
  modificación. Por ej, deberia poderse reutilizar a traves de
  parametros y no deberia entrar a modificar la clase original para
  reutilizarla.

- LISKOV SUBSTITUTION (LSP): sustitución de Liskov.
  Las funciones que utilizan referencias a clases base deben ser
  capaces de usar objetos de clases derivadas de éstas sin saberlo.
  Si una clase b hereda de una clase a, se podria sustituir cualquier
  instancia de a por cualquier instancia de b, sin alterar las
  propiedades del sistema.

- INTERFACE SEGREGATION (ISP): segregación de interfaz.
  Los clientes no deberian estar obligados a depender de interfaces
  que no utlizan. Se deberian segregar las interfaces en funcion de
  la necesidad de cada objeto que depende de ella, para que este objeto
  no tenga algo que no necesita.

- DEPENDENCY INVERSION (IDP): inversión de dependencias.  
  Establece que las clases deben depender de interfaces o clases abstractas en lugar de
  clases y funciones concretas.
  - Los modulos de alto nivel no deben depender de modulos de bajo nivel.
    Ambos deben depender de abstracciones.
  - Las abstracciones no deben depender de los detalles.
    Los detalles deben depender de abstracciones.

### Principio DRY (Don't repeat yourself):

Evitar tener duplicidad de codigo

### Principio YAGNI (You aren't gonna to need it):

Evitar escribir codigo para el mañana o una mega-solucion, centrarse
unicamente en lo necesario.

### Principio KISS (Kepp it simple, stupid):

La sencillez debe ser una meta en el desarrollo y la complejidad innecesaria
debe ser eliminada.

### Acronimo STUPID:

6 principios que debemos evitar:

- **Singleton**: patron singleton

- **Tight Coupling**: alto acoplamiento.
  deberiamos tener bajo acoplamiento y buena cohesion. Son inversamente proporcionales.
  **acoplamiento** se refiere a cuan relacionadas o dependientes son 2
  clases o modulos entre si, un bajo acoplamiento indica que cambiar
  algo importante en una clase no deberia afectar a la otra.  
  **cohesion** se refiere a lo que la clase puede hacer, una buena cohesion
  indica que la clase se enfoca en lo que deberia hacer, que realice una tarea en especifico.
  Si es un modulo de facturacion, deberia encargarse solo de eso y no de otra cosa.

- **Untestability**: codigo no probable (unit test)

- **Premature** optimization: optimizacion prematura

- **Indescriptive** Naming: nombres poco descriptivos

- **Duplication**: codigo duplicado

## TypeScript

- no usar \_ como prefijo o sufijo, ni como un identificador.  
  si no se necesitan todos los elementos simplemente se agrega una coma:  
  const [a, , b] = [1, 2, 3]; => a=1, b=3

- usar `/** */` para comentarios de documentacion
- usar `//` ó `/* */` para comentarios de implementacion

- no usar # para identificador de propiedad privada, usar la palabra
  reservada private

- usar readonly para marcar propiedades que no seran reasignadas
