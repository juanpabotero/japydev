---
id: 'javascript'
title: 'JavaScript'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/javascript.svg'
---

## Conceptos

- Es una lenguaje de programación de tipado débil y dinámico.  
  Funciona en tiempo de ejecución.

- [] hace referencia a un array  
  {} hace referencia a un objeto  
  () hace referencia a una funcion o metodo y se va a ejecutar

- **This**: hace referencia al contexto donde se ejecuta,
  se refiere al dueño que esta llamando la funcion,
  las funciones de flecha no modifican el this.
  cuando se haga una referencia al mismo objeto usar el this

- toda funcion que no tiene un return explicito retorna undefined

- += suma o concatena lo que tiene la variable y el nuevo valor

- `` back tick para interpolar

- '' es un string vacio, no es lo mismo que undefined o null

- ${} lo que pongo adentro debe ser una expresion valida de JS

- **Instancia**: crear un nuevo objeto a partir de una clase

- **Castear o casting**: convertir un tipo de dato a otro

- **JSON.stringify**: transforma los datos a un json string para poder
  ser enviados a traves del navegador

- **JSON.parse**: transforma los datos de un json string a un objeto
  para poder ser trabajados en nuestra aplicacion, es lo inverso
  al stringify

- **[object Object]**: es la representacion de un objeto en forma de
  string

- **prototype**: es como el adn de la clase u objeto

- **Never:** es un tipo de dato que nos indica que se va a procesar a partir
  de una promesa y puede que nunca devuelva un valor.
  es un tipo de dato que nunca va a ser retornado por una funcion o metodo

- **Closure**: permite a variables externas al scope, ser usadas dentro
  del scope. Hacer referencia a la variable externa del scope es un
  closure

- algunos metodos de los arrays modifican el array inicial y otros no,
  los que no modifican el array inicial y devuelven uno nuevo se conocen
  como puros (pure), entre ellos estan map, filter, reduce, slice.
  algunos que mutan el array inicial son splice, sort, reverse, push y otros.

  Si uso los metodos que modifican el array inicial con el spread
  operator (...) para evitar que modifique el array, éste crea una nueva
  copia del arrray, el problema es que esto repetido muchas veces en el
  codigo puede empezar a ser un problema.

  Los nuevo metodos son puros, son inmutables, no mutan el array original.

  - toReversed()
  - toSorted()
  - toSpliced(): devuelve un nuevo array con las modificaciones, no el elemento eliminado como lo hace splice()
  - with(): reemplaza un elemento del array

- el metodo .sort() modifica el array original y convierte los numeros en string
  para ordenarlos, por eso si se quiere ordenar numeros se deben pasar los parametros
  `numbers.sort((a, b) => a - b)`. Ademas si se quiere crear un nuevo elemento a partir
  de un array y usando este metodo, se debe usar el spread operator (...) porque si no,
  se haria referencia al mismo array original

- **Hoisting**: permite a variables y funciones estar disponibles desde
  el inicio del código asi sean llamadas antes de su declaracion, esto
  funciona para variables definidas con `var`, con `let` y `const` no.  
  Para funciones, sirve con `function`, con funciones flecha no.
  Todas las funciones definidas con la palabra function, javascript les
  aplica hoisting, es decir, se puede llamar a las funciones antes de ser
  definidas porq se mueven al inicio cuando se corre el codigo.

- al reject de una promesa deberia siempre pasarle una instancia del error
  new Error:  
  `Promise.reject(new Error('Error'))`

- commonjs va con require para hacer las importaciones y module.exports para
  las exportaciones. ESModules va con import y export.
  La forma de cargar los scripts en el html:

  - forma clasica (bloquea por defecto):  
    `<script src="./main.js"></script>`
  - cargar como modulo (ESModules, se puede usar import y export.) (defer por defecto):  
    `<script type="module" src="./main.js"></script>`

- cadena.match(regEx) !== null: para validar una cadena con una expresion
  regular, es distinto a hacerlo con el test porq el test cambia el ultimo
  indice de la cadena

- formatear numeros con `intl.numberFormat()`

- La igualdad no estricta (==) se puede utilizar para comparar si un valor es
  null o undefined. Ej, `if (variable == null) { ... }`, esto es equivalente a
  `if (variable === null || variable === undefined) { ... }`.

- **Operadores**:

  - falsy: null, undefined, false, '', 0, NaN
  - ?? operador nullish, compara el valor con un valor null o undefined.
  - || operador or, compara el valor con un valor falsy.
  - && operador and, necesita que el primer valor sea verdadero para evaluar
    el segundo, si es asi pone el segundo asi éste sea falsy.

- Una mejor forma de poner el opcional chaining (?), porq se transpila de
  mejor forma a javascript y evita que el objeto sea null:
  en vez de poner esto:  
  `const name = user?.name`  
  poner esto:  
  `const { name } = user ?? {}`

- **querySelectorAll**: devuelve un nodeList que es diferente a un array,
  tiene el metodo forEach disponible pero no incluye otros metodos
  de los arrays.
  puedo poner Array.from(querySelectorAll('selector')) para convertirlo
  a un array.

- top level await, no es necesario que esté dentro de una función async.
  Se puede usae en ESModules, no en archivos clasicos de JS

- hasOwn: para revisar que los objetos tengan una propiedad, deberia
  usarse en vez de hasOwnProperty

- copia profunda de un objeto:  
  `const cloneObj = structuredClone(obj);`  
  `Object.assign()` hace una copia superficial del objeto

- **Proxy**: intercepta las peticiones de un objeto para cambiar la funcionalidad

- setTimeOut y setInterval no son parte de Javascript, son parte de la web API

- **Declaración y expresión**:

  - declaracion es una instruccion que le estamos dando al PC, no produce un valor,
    devolveria undefined, ej:  
    `const frase = 'Hola' => undefined`
  - expresion produce un valor, ej:  
    `frase => 'Hola'`

- el parametro event de un addEventListener click tiene varias propiedades,
  entre ellas:

  - event.target: es el elemento que ha recibido el click
  - event.currentTarget: es el elemento que esta escuchando el evento

- Los métodos `every` y `some` dejan de hacer la iteración cuando cumplen su propósito.  
  Para `every` es cuando algún elemento no cumple la condición y para `some` es cuando  
  algún elmento cumple la condición.

- Al igual que los metodos anteriores, el metodo `find` tambien deja de hacer la  
  iteración cuando encuentra el elemento que cumple la condición.

- El metodo `reduce` permite crear un único valor a partir de un array.  
  El primer parametro es una funcion que recibe dos parametros, el acumulador y el  
  elemento actual, el segundo parametro es el valor inicial del acumulador.  
  Ej:  
  `const total = numbers.reduce((acc, el) => acc + el, 0);`  
  `const total = numbers.reduce((acc, el) => acc + el);`  
  `const total = numbers.reduce((acc, el) => acc + el, '');`  
  `const total = numbers.reduce((acc, el) => acc + el, []);`  
  `const total = numbers.reduce((acc, el) => acc + el, {});`

- Código imperativo se enfoce en el como quiero hacer las cosas (el paso a paso).  
  Código declarativo se enfoca en el que quiero, este último seria mas universal y  
  reutilizable.

- **Dynamic imports** sirven para importar algo cuando se necesita realmente,  
  similar al lazy load. Los imports que hacemos normalmente son estáticos.

---

## Buenas practicas

- Nombrar variables usando camelCase y tener un significado explicito

  - no se deberian crear nombres de variables que empiecen con numeros
  - no debe llevar .
  - $ en el nombre de una variable es simplemente un caracter mas
  - \_ para separar numeros, no se tendra en cuenta

- Una constante de manera global se puede definir en SCREAMING_CASE

- Nombrar funciones o metodos usando camelCase y debe ser un verbo + sustantivo

- nombrar clases e interfaces usando PascalCase, usar sustantivos

- Tratar de utilizar funciones puras, que no modifiquen el estado de las variables
  que estan fuera de la funcion, que no tengan efectos secundarios.

- Una función solo deberia tener una razón por la cual cambiar.

- No crear objetos o arrays usando el constructor:

  ```javascript
  const obj = new Object();
  const arr = new Array();
  ```

  usar los literales:

  ```javascript
  const obj = {};
  const arr = [];
  ```

- No usar Magic Strings o Magic Numbers, declarar los valores con sentido, ej:

  ```javascript
  const API_URL = 'https://api.com';
  const API_KEY = '123456';
  const API_VERSION = 'v1';
  const API_ENDPOINT = `${API_URL}/${API_VERSION}/endpoint?key=${API_KEY}`;
  ```

- Usar try/catch en el async/await:

  ```javascript
  const getData = async () => {
    try {
      const res = await fetch(url);
      // si se recibe una respuesta 4xx o 5xx no entrará en el catch
      // response.ok será true con respuestas 2xx
      if (!res.ok) throw new Error('Error');
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };
  ```

- El await se deberia asignar a una constante en vez de asignarse
  a traves de += o un return:  
  no estaria bien:

  ```javascript
  response += await fetch(url);
  return await fetch(url);
  ```

  estaria bien:

  ```javascript
  const response = await fetch(url);
  response2 += response;
  return response;
  ```

- `name = name ?? 'Juan'`
  La expresion anterior se podria optimizar usando el operador ??=, porque esta  
  expresión hace doble asignación, asigna el null o undefined y lo reescribe con  
  el valor. Con el operador `??=` solo se hace la asignación si existe el valor:
  `name ??= 'Juan'`

- No usar el delete para borrar propiedades de un objeto porque éste desoptimiza  
  el código, mejor usar la siguiente sintaxis:

  ```javascript
  const persona: {
    name: 'Juan',
    age: 30,
    single: true
  }
  const {
    name,
    ...restOfPersona
  } = persona
  ```

  restOfPersona seria el nuevo objeto sin la propiedad que queremos eliminar.

- En JavaScript y sus frameworks es buena practica pasar los parametros  
  como objetos porque así hace a la función más extensible y ordenada, ej:

  ```js
  // definicion de la funcion
  someFunction({ param1, param2, param3 }) {
    consol.log({param1, param2, param3})
  }
  // llamada a la funcion
  someFunction({ param1, param2, param3 })
  ```

- Si se tienen muchos archivos dentro de una carpeta, se puede crear un  
  archivo index.js dentro de esta misma carpeta y exportar todos los componentes  
  desde ahi, ej:

  ```js
  export * from './useCounter';
  export * from './useFetch';
  export * from './useForm';
  ```

  Y en el arhivo que se quiera usar, solo se hace referencia a la carpeta  
  porque por defecto mira el index.js.

  ```js
  import { useCounter, useFetch, useForm } from './hooks';
  ```

- La mejor forma de comparar strings es usando el metodo `localeCompare`,
  compara dependiendo del idioma, tiene en cuenta asentos y demás, ej:
  ```js
  const str1 = 'Hola';
  const str2 = 'hola';
  str1.localeCompare(str2); // -1
  str2.localeCompare(str1); // 1
  str1.localeCompare(str1); // 0
  ```
  Para ordenar strings se puede usar el metodo `sort` de los arrays,
  tener en cuenta que modifica el array original, ej:
  ```js
  const arr = ['Hola', 'hola', 'adios', 'Adios'];
  arr.sort((a, b) => a.localeCompare(b)); // ['Adios', 'adios', 'Hola', 'hola']
  const newArr = [...arr].sort((a, b) => a.localeCompare(b)); // para un nuevo array
  ```

---

## Utilidades

- Obtener todos los datos de una URL:

  - hostname: El dominio sin protocolo
  - pathname: La ruta de la URl
  - href: La URL completa
  - origin: El protocolo y el dominio
  - search: Los parametros de la URL
  - hash: El hash de la URL

  ```javascript
  const url = new URL('https://example.com/pathname/?name=Juan&age=30#hash');
  console.log(url.hostname); // example.com
  console.log(url.pathname); // /pathname/
  console.log(url.href); // https://example.com/pathname/?name=Juan&age=30#hash
  console.log(url.origin); // https://example.com
  console.log(url.search); // ?name=Juan&age=30
  console.log(url.searchParams); // URLSearchParams { 'name' => 'Juan', 'age' => '30' }
  console.log(url.hash); // #hash

  // modificar la url y obtener la url modificada
  url.searchParams.set('name', 'Pedro');
  url.searchParams.set('lastname', 'Perez');
  console.log(url.href); // https://example.com/pathname/?name=Pedro&age=30&lastname=Perez#hash
  ```

- Obtener url actual:

  ```javascript
  window.location.href;
  ```

- Obtener el path de la url:

  ```javascript
  window.location.pathname;
  ```

- Obtener parametros de la url:

  ```javascript
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  ```

- Agregar params a una url:

  ```javascript
  const url = new URL('https://example.com');
  url.searchParams.set('name', 'Juan');
  url.searchParams.set('age', 30);
  console.log(url); // https://example.com/?name=Juan&age=30
  ```

- Recuperar los datos de un formulario en un objeto:

  ```javascript
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
  });
  ```

- Generar numeros compactos:

  ```javascript
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })
  formatter.format(1200) => 1.2K
  formatter.format(1200000) => 1.2M
  formatter.format(1200000000) => 1.2B
  ```

- Validar un formulario:

  ```html
  <form onsubmit="return validate();" novalidate>
    <input type="text" name="name" id="name" required />
    <input type="email" name="email" required />
    <input type="submit" value="Send" />
  </form>
  ```

  ```javascript
  const validate = () => {
    const name = document.queryElementById('name');
    if (!name.value) {
      alert('Name is required');
      return false;
    }
    return true;
  };
  ```

  Retornar falso no permitirá hacer el submit del formulario, retornar true
  si lo permitirá.

- Ordenar un array de forma aleatoria. Daria unos números positivos y otros  
  negativos y normalizaria la distribución.

  ```javascript
  const numbers = [2, 22, 33, 55, 11, 44];
  number.sort(() => Math.random() - 0.5);
  ```

- Crear un array de N posiciones

  ```javascript
  const positions = 10;
  const numbers = [...Array(positions).keys()];
  ```

- Hacer un ranking:

  ```javascript
  const createRanking = ({
    rating,
    total = 5,
    starIcon = ':star:',
    emptyIcon = ':starEmpty:'
  }) => {
    const stars = starIcon.repeat(rating);
    const empty = emptyIcon.repeat(total - rating);
    return stars + empty;
  };
  // para usarlo:
  createRanking({ rating: 7, total: 10 });
  ```

- Generar un ID unico:

  ```javascript
  const id = window.crypto.randomUUID();
  ```

- Sacar el tamaño de un elemento en el DOM:

  ```javascript
  const element = document.querySelector('div');
  const { width, height } = element.getBoundingClientRect();
  console.log(width, height);
  ```

- Intersection Observer, permite detectar cuando un elemento esta en el viewport:

  ```javascript
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        const color = entry.target.getAttribute('data-color');
        entry.target.style.background = color;
      }
    });
  });
  const divs = document.querySelectorAll('div');
  divs.forEach((div) => observer.observe(div));
  ```

- AbortController: para cancelar peticiones con fetch. ej:

  ```javascript
  button = document.querySelector('button');
  const controller = new AbortController();
  button.addEventListener('click', () => controller.abort());
  controller.signal.addEventListener('abort', () => console.log('abort'));
  fetch(url, { signal: controller.signal })
    .then((res) => res.json())
    .then((res) => {
      console.log(res); // no se ejecutaria si se aborto la peticion
    });
  ```

- Crear un elemento drag and drop:

  ```html
  <div id="dropzone">Arrastra una imagen aquí</div>
  <img
    id="preview"
    src=""
    alt="Vista previa de la imagen"
    style="display: none"
  />
  ```

  ```javascript
  // referencias a los elementos del DOM
  const dropzone = document.getElementById('dropzone');
  const preview = document.getElementById('preview');
  // evitar el omportamiento por defecto de arrastrar y soltar
  dropzone.addEventListener('dragover', (e) => e.preventDefault());
  // procesar el archivo cuando se suelta en la zona de arrastre
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    // obtener el archivo
    const file = e.dataTransfer.files[0];
    // validar que sea una imagen
    if (!file.type.match('image.*')) {
      alert('Solo puedes subir imagenes');
      return;
    }
    const reader = new FileReader();
    // leer el archivo como una url de datos
    reader.readAsDataURL(file);
    // manejar el evento de carga de archivos
    reader.onload = (e) => {
      // mostrar la imagen
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
  });
  ```

- Recuperar los queries de una url a un objeto:

  ```javascript
  'https://example.com/?name=Juan&age=30'; // url de ejemplo
  const query = document.location.search;
  const searchParams = new URLSearchParams(query);
  const queryParams = Object.fromEntries(searchParams.entries());
  console.log(queryParams); // { name: 'Juan', age: '30' }
  ```

- Sincronizar pestañas usando el localStorage:

  ```javascript
  // cuando cambia el storage, ejecutamos esto para sinconizar en otras pestañas
  window.addEventListener('storage', (event) => {
    if (event.key === 'counter') {
      const newCounterValue = event.newValue;
      $counter.textContent = newCounterValue;
    }
  });

  // cuando se hace click en el boton para incrementar el contador
  $button.addEventListener('click', () => {
    counter++;
    $counter.textContent = counter;
    localStorage.setItem('counter', counter);
  });
  ```

- Desplazarse hasta un elemento que no se vea en el viewport:

  ```javascript
  const element = document.getElementById('element');
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    element.scrollIntoView({ behavior: 'smooth' });
  });
  ```

- Tiempo relativo en cualquier idioma:

  ```javascript
  const rtf = new Intl.RelativeTimeFormat('es');
  rtf.format(-1, 'day'); // hace 1 día
  rtf.format(1, 'day'); // dentro de 1 día
  rtf.format(-3, 'month'); // hace 3 meses
  rtf.format(3, 'month'); // dentro de 3 meses
  ```

---

## Midudev

## Conceptos

- **Declaración**: es una instrucción que no produce un valor.  
  **Expresión**: es una instrucción que produce un valor.  
  Es importante saber la diferencia porque, por ejemplo, en los condicionales
  solo se pueden poner expresiones.

- **Hoisting**: es un término que se usa para describir cómo JavaScript parece que
  mueve las declaraciones funciones al principio del código, de forma que las puedes
  usar incluso antes de declararlas.

  Lo que está pasando es que JavaScript asigna en memoria, durante la fase de
  compilación, las declaraciones de funciones y por eso al ejecutarse el código
  tiene acceso a esa posición de memoria a la que se refiere la función.

  Para las function expressions y arrow funtions no se aplica el hoisting.

- **Recursividad**: es una técnica de programación que consiste en que una función
  se llame a sí misma. Cuando hacemos recursividad SIEMPRE hay que tener una
  condición base que haga que la función salga de sí misma. Si no ponemos la condición,
  la función se llamará infinitamente y el navegador se quedará bloqueado. Ej:

  ```javascript
  function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es
    // menor de 0 entonces salimos de la función
    if (numero < 0) {
      return;
    }

    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero);

    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1);
  }
  ```

## Tipos de datos

- number (enteros y decimales son del mismo tipo)
- string
- boolean
- null (significa que algo no tiene valor)
- undefined (significa que algo no ha sido definido)
- symbol
- bigint
- object (arrays, funciones, clases, etc)

**typeof**: devuelve el tipo de dato de una variable

```javascript
typeof 40; // number
typeof null; // object
typeof Symbol('Simbolo'); // symbol
typeof 40n; // bigint
```

## Bucles

Para el bucle **For** o **While** se puede usar las palabras reservadas _break_ y _continue_.
Por ejemplo:

```javascript
let cuentaAtras = 10;

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1;
  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break; // <---- salimos del bucle
  }
}
```

```javascript
let cuentaAtras = 10;

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1;
  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue; // <---- saltamos a la siguiente iteración
  }
}
```

## Funciones

Los parámetros son los valores que recibe la función.  
Los argumentos son los valores que se le pasan a la función.
