---
title: 'TypeScript'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 15 2022'
heroImage: '/typescript.svg'
---

# TypeScript

- Typescript transpila el codigo a Javascript para ser leido por el
  navegador

- Instalar Typescript de manera global, abro la terminal como
  administrador y ejecuto:  
   `npm install -g typescript`

- Crear el fichero de configuracion para typescript, tsconfig.json.  
  En la terminal, estando en la carpeta del proyecto, doy:  
  `tsc -init` ó `tsc --init`

- Si escribo un archivo en typescript, debo transpilarlo para que se
  pase a Javascipt y el navegador pueda leerlo.  
  En la terminal bash, estando en la carpeta del proyecto, debo darle:  
  `tsc -w` ó `tsc -w *.ts`  
  Para que este viendo y transpilando todos los archivos .ts del proyecto.  
  En el index HTML debo cargar los archivos Javascript (.js) que se crean
  despues de la transpilacion y no los archivos Typescript (.ts)

- En el **tsconfig.json**, descomento la propiedad **"rootDir"** y pongo la
  nueva ruta, para configurar la ruta desde la cual se va a cargar
  los ficheros de Typescript

- En el **tsconfig.json**, descomento la propiedad **"outDir"** y pongo la
  nueva ruta, para configurar la ruta de salida para los archivos
  transpilados de Javasript

- En el **tsconfig.json** y en **"target"** cambio la version, para cambiar
  la version de Javascript a la cual se va a transpilar

- En el **tsconfig.json**, si descomento **"sourceMap"**, este me creara unos
  nuevos archivos pero me permitira que en la ejecucion en el navegador
  se relacione con el archivo Typescript y no con el Javascript

- En el **tsconfig.json**, descomento **"outFile"** y pongo el nombre del
  archivo que va a ser la salida de todos nuestros archivos Typescript.  
  Es normal y recomendable que nuestro archivos Typescript se transpilen
  a un solo archivo Javascript, ej:  
  `"outFile": "./main.js"`  
  Igualmente desde el navegador y gracias a los maps, puedo saber que
  archivo creó que codigo, se encuentra la referencia a los archivos
  de Typescript. Esto es mas rapido porque solo se lee un archivo y centraliza
  el archivo de salida

- En el **tsconfig.json**, descomento **"removeComments"**, para remover los
  comentarios de los archivos Javascript, pero se mantienen en los
  archivos Typescript

- En el **tsconfig.json**, para incluir o excluir archivos o carpetas
  que se quieran o no transpilar, voy al final del tsconfig e incluyo:

      "exclude": [
      		"nombre carpeta o archivo"
      ],
      "include": [
      		"nombre carpeta o archivo"
      ]

- En el **tsconfig.json** puedo configurar las rutas para hacer las  
  importaciones más cortas:

  ```typescript
  "compilerOptions": {
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@services/*": ["src/services/*"],
    }
  }
  ```

- Los modulos de node estan excluidos de manera automatica para
  la transpilacion

---

TypeScript es JavaScript con una sintaxis para tipos. Es un superset de JavaScript,
o una capa de abstracción encima de JavaScript.  
Añade tipos estáticos y tipado fuerte a JavaScript (No se puede cambiar el tipo
de una variable una vez definido).

No funciona ni valida los tipos en tiempo de ejecución, solo funciona y valida los
tipos en tiempo de compilación. Lo que llega al navegador es JavaScript que si
funciona en tiempo de ejecución.

Intentar tipar lo menos posible, dejar que typeScript infiera los tipos.

Cuando pongo el tipo `any` en una variable, estoy diciendo que no se preocupe por el
tipo de dato que va a recibir, que puede ser cualquier tipo de dato. Lo malo es que
le digo a TypeScript que IGNORE el tipado y pierdo la ventaja de tener tipado fuerte.
Se deberia usar lo menos posible.

```typescript
let cualquierTipo: any = 'hola';
cualquierTipo = 5;
```

El tipo de dato `Function` es un tipo de dato que se usa para definir una funcion, es el
`any` de las funciones. Lo correcto seria definir el tipo de dato de la funcion.

```typescript
const sayHiFromFunction = (fn: (name: string) => string) => {
  fn('Juan');
};
const sayHi = (name: string) => {
  return `Hola ${name}`;
};
sayHiFromFunction(sayHi);
```

El tipo de dato `unknown` se asigna cuando TypeScript no puede inferir el tipo de dato.

El tipo de dato `void` se usa para definir que una funcion no retorna nada, pero va
un poco más allá porque la función puede devolver algo, pero yo le digo que no me
importa lo que devuelva.

El tipo de dato `never` se usa para definir que una funcion nunca va a retornar nada,
ni siquiera `undefined`, porque no va a llegar el return implicito.

Para crear tipos se utiliza PascalCase.

```typescript
// Template union types
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type Hero = {
  // readonly es para indicar que no se debe modificar, no hace que sea
  // inmutable pero si dejamos saber que no se debe modificar
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};
let thor: Hero = {
  name: 'Thor',
  age: 30,
};
thor.isActive = true;
```

Un tipo especial es el **Template literal types**, se usa para definir un tipo de dato
que es una cadena de texto, pero que tiene un formato especifico.

```typescript
type HexadecimalColor = `#${string}`;
let color: HexadecimalColor = '#fff';
```

Otro tipo especial son los **Union types**, se usa para definir un tipo de dato que
puede ser de varios tipos de datos. Tambien se pueden usar valores literales.

```typescript
let age: number | string = 30;
let hexColor: 'red' | 'green' | 'blue' = 'red';
age = '30';
hexColor = 'green';
```

Otro tipo especial son los **Intersection types**, se usa para definir un tipo de dato
que es la interseccion de varios tipos de datos.

```typescript
type HeroBasicInfo = {
  name: string;
  age: number;
};
type HeroProperties = {
  id?: string;
  isActive?: boolean;
  power: string;
};
type Hero = HeroBasicInfo & HeroProperties;
let thor: Hero = {
  name: 'Thor',
  age: 30,
  power: 'Lightning',
};
```

**Type indexing** se usa para tipar un objeto con propiedades de un tipo ya definido.  
Asi se puede reutilizar algo que ya esta definido.

```typescript
type Hero = {
  name: string;
  age: number;
  address: {
    country: string;
    city: string;
  };
};
let heroAddress: Hero['address'] = {
  country: 'USA',
  city: 'New York',
};
```

**Type indexing** se usa para definir un tipo de dato que es un objeto con propiedades
dinamicas, que no se conocen de antemano.

```typescript
type Hero = {
  name: string;
  age: number;
  isActive?: boolean;
  [key: string]: any;
};
let thor: Hero = {
  name: 'Thor',
  age: 30,
  power: 'Lightning',
};
```

**typeof** se usa para extraer los tipos de un objeto, una funcion, variables, etc.

- Type from value

  ```typescript
  let thor = {
    name: 'Thor',
    age: 30,
  };
  type HeroName = typeof thor.name;
  let heroName: HeroName = 'Thor';
  ```

- Type from function

  ```typescript
  const sayHi = (name: string) => {
    return `Hola ${name}`;
  };
  type SayHi = typeof sayHi;
  let sayHiFunction: SayHi = (name) => {
    return `${name} ya es hora de comer`;
  };
  ```

  Tambien se puede usar el **ReturnType** para extraer el tipo de dato que retorna una
  funcion.

  ```typescript
  const sayHi = (name: string) => {
    return `Hola ${name}`;
  };
  type SayHi = ReturnType<typeof sayHi>;
  ```

### Arrays

Por la inferencia de tipos que hace typescript, si yo asigno un array vacio
sin definir el tipo de dato, typescript infiere que es un array de tipo **never**,
porque piensa que queremos que el array siempre este vacio.

```typescript
let numbers = [];
```

Para arreglarlo, debo definir el tipo de dato. Los arrays se pueden definir de dos formas:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let numbers: Array<number> = [1, 2, 3, 4, 5];
```

Para poner varios tipos de datos en un array, se usa el **Union types**.

```typescript
let numbers: (number | string)[] = [1, 2, 'tres', 4, 5, 'seis'];
```

Para tipar una matriz, podemos hacerlo asi:

```typescript
let gameBoard: string[][] = [
  ['X', 'O', 'X'], // <-- string[]
  ['O', 'O', 'X'], // <-- string[]
  ['O', 'X', 'X'], // <-- string[]
];
```

### Tuplas

Son arrays con un numero fijo de elementos y cada elemento tiene un
tipo de dato definido.

```typescript
type CellValue = 'X' | 'O' | '';
// tupla
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];
let gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
];
```

Otro ejemplo:

```typescript
type RGB = [number, number, number];
const red: RGB = [255, 0, 0];
```

Otro ejemplo seria el useState de React, que es una tupla con dos elementos,
el primero es el valor y el segundo es una funcion para actualizar el valor.

```typescript
type State = [string, (newName: string) => void];
const [hero, setHero]: State = useState('Thor');
```

Para evitar que las tuplas se puedan modificar, se usa la palabra reservada
**readonly**.

```typescript
type RGB = readonly [number, number, number];
const red: RGB = [255, 0, 0];
```

### Enums

Son un tipo de dato que permite definir un conjunto de valores que pueden ser
usados como un tipo de dato.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Red;
console.log(color); // 0
```

Si no se define un valor, el valor por defecto es el indice del elemento.

```typescript
enum Color {
  Red = 1,
  Green,
  Blue,
}
let color: Color = Color.Red;
console.log(color); // 1
```

Puedo poner **const** antes del enum para evitar que se cree un objeto con
los valores del enum al momento de compilar a JavaScript.

```typescript
const enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}
let color: Color = Color.Red;
```

### Aserciones de tipos (Type assertions)

Es una forma de decirle a TypeScript de que tipo es una variable, que confie
en nosotros.  
El elemento recuperado en el siguiente caso, puede ser null o por defecto
HTMLElement, lo mejor seria indicarle el Type assertion despues de la comprobacion,
porque de esa manera no se pierde el tipado fuerte, que reconoce que puede ser null.

```typescript
const canvas = document.querySelector('canvas');
if (canvas != null) {
  const context = (canvas as HTMLCanvasElement).getContext('2d');
}
```

Una mejor comprobación seria asi, porque TypeScript se da cuenta por inferencia
que dentro del if el canvas solo va a poder ser un HTMLCanvasElement:

```typescript
const canvas = document.querySelector('canvas');
if (canvas instanceof HTMLCanvasElement) {
  const context = canvas.getContext('2d');
}
```

typeof se usa para tipos, por ejemplo strings, numbers, booleans, etc.  
instanceof se usa para instancias, por ejemplo HTMLElement, HTMLCanvasElement, Date, etc.

### Interfaces

Se usan para definir la forma que debe tener un objeto o clase, sus propiedades y metodos.  
No se pueden usar para definir tipos primitivos.

```typescript
interface Hero {
  name: string;
  age: number;
  isActive?: boolean;
  powers: string[];
  getName: () => string;
}
const thor: Hero = {
  name: 'Thor',
  age: 30,
  powers: ['Lightning', 'Thunder'],
  getName() {
    return this.name;
  },
};
```

Las interfaces pueden extender otras interfaces.

```typescript
interface Hero {
  name: string;
  age: number;
  isActive?: boolean;
  powers: string[];
  getName: () => string;
}
interface Avenger extends Hero {
  isAvenger: boolean;
}
const thor: Avenger = {
  name: 'Thor',
  age: 30,
  powers: ['Lightning', 'Thunder'],
  isAvenger: true,
  getName() {
    return this.name;
  },
};
```

Una de las grandes diferencias entre interfaces y types, es que las interfaces
se pueden definir multiples veces y se van a ir uniendo sus propiedades, mientras
que los types no se pueden definir multiples veces, solo se puede definir una vez.

```typescript
// esto seria valido
interface Hero {
  name: string;
  age: number;
}
interface Hero {
  isAvenger: boolean;
}
// esto seria invalido
type Hero = {
  name: string;
  age: number;
};
type Hero = {
  isAvenger: boolean;
};
```

Para definir la forma de un objeto o clase puedo usar una interfaz, para
todo lo demás puedo usar un type.

### Narrowing types

Es una forma de reducir el tipo de dato de una variable, para que TypeScript
sepa que tipo de dato es.

```typescript
let age: number | string = 30;
if (typeof age === 'number') {
  age = age + 1;
} else if (typeof age === 'string') {
  age = parseInt(age) + 1;
}
```
