---
id: 'react'
title: 'React'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 13 2022'
heroImage: '/react.svg'
---

## Herramientas

Recomendado instalar las extensiones del navegador:

- React Developer Tools (solo funcionan en modo desarrollo)
- Redux DevTools

Extensiones de VSCode:

- ES7+ React
- Simple React Snippets

## Librerías

- **Crear proyecto**  
  Client Side: Vite  
  SSR: Next.js  
  Static: Astro

- **Package Manager**  
  Por defecto: npm  
  Por cambiar o por probar: pnpm

- **State Management**  
  Cosas estáticas o que cambian poco: React Context  
  Para estado global general: Zustand  
  Redux Toolkit SÓLO para proyectos medio/grandecitos con estados globales complejos  
  Para proyectos GRANDES, evitar el estado global y depender de React Query, Apollo, Flux...

  - Tanstack Query (React Query): Es una libreria para manejar estados asincronos.  
    Permite también hacer fetching de datos.  
    Para instalar: `npm install @tanstack/react-query`  
    (ver curso-react-midudev/10b-prueba-tecnica-typescript-react-query)

- **Data Fetching**  
  https://tanstack.com/query/latest  
  urlQL

- **Routing**  
  NextJS File System Routing  
  React Router (para proyectos con paths complejos o muchas páginass)  
  Wouter (smaller alternative, páginas sencillas)

- **CSS Styling**  
  TailwindCSS  
  CSS Modules  
  Vanilla Extract

- **React UI Libraries**  
  Framer Motion  
  Auto Animate

- **Gráficas - Charts**  
  Recharts  
  https://www.react-graph-gallery.com/

- **Forms**  
  https://react-hook-form.com/  
  zod (para validaciones)

- **Autenticación**  
  Supabase Auth  
  Next Auth  
  O probar Lucia Auth/Authjs.dev

- **Hosting**

  Proyectos web:  
  Vercel  
  Netlify

  Proyectos web + Workers (Edge Functions):  
  Especial mención: Cloudflare

  Dockerfiles:  
  Railway  
  Fly.io  
  Render

- **Testing**  
  Vitest + Playwright + React Testing Library

- **Time in React**  
  Menos momentjs lo que quieras.  
  date-fns  
  dayjs  
  luxon

- **Componentes**  
  https://mui.com/  
  https://react-bootstrap.github.io/  
  https://www.tremor.so/

- **Iconos**  
  https://react-icons.github.io/react-icons/

- **Animaciones**  
  https://react.useanimations.com/  
  https://react-spring.io

- **Notificaciones**  
  https://react-hot-toast.com/  
  https://sonner.emilkowal.ski/

- **Calendario**  
  https://react-day-picker.js.org/

- **Debounce**  
  https://www.npmjs.com/package/use-debounce  
  https://github.com/angus-c/just#just-debounce-it

- **Dropzone (subir archivos arrastrando y soltando)**  
  https://react-dropzone.js.org  
  https://pqina.nl/filepond/?ref=pqina

- **Renderizar PDFs**  
  https://react-pdf.org/

## Hosting

- Github Pages con Vite:
  - Puedo instalar: `npm install gh-pages --save-dev`
  - Agregar en el package.json:
    ```json
    "scripts": {
      "deploy": "gh-pages -d dist"
    }
    ```
  - Seguir los pasos de la documentación.  
    [vitejs.dev/guide/static-deploy.html](https://vitejs.dev/guide/static-deploy.html)
  - [Ver video](https://www.youtube.com/watch?v=rLoWMU4L_qE&list=WL&index=12&t=17005s)

---

## Comandos

- `npm create vite@latest`  
  Una aplicación nueva de React se debería crear usando Vite, y no  
  create reactApp, con este comando y seleccionando React.

**Inicializar un proyecto de React** sin ayuda de Vite o ninguna
otra herramienta, debo hacer esto:

- Inicializar Vite con vanilla
- Instalar un plugin, como Babel, para React:  
  `npm install @vitejs/plugin-react -E`  
  -E es para que instale la version exacta.
- Instalar React y React DOM:  
  `npm install react react-dom -E`
- Crear el archivo **vite.config.js** para configurar Vite  
  con React y ponemos dentro del archivo:

  ```js
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  export default defineConfig({
    plugins: [react()],
  });
  ```

- En el archivo que es el punto de entrada de mi aplicación,  
  en este caso, main.js, ponemos:
  ```js
  import { createRoot } from 'react-dom/client';
  // selecciono el elemento donde quiero renderizar mi app
  const root = createRoot(document.getElementById('app'));
  root.render(<h1>Hello world</h1>);
  ```
- Cambiar el nombre del archivo de main.js a main.jsx.  
  Cambiarlo tambien en el index.html
- Seria recomendable instalar un linter.

---

## Conceptos

### React

Es una librería, se transpila a JAVASCRIPT, no a HTML.

React detecta la parte que ha cambiado y es lo unico que va a  
actualizar en el DOM, lo hace comparando el estado anterior del  
componente con el actual y revisa si ha cambiado algo.

El punto de entrada de la aplicación es el fichero main.jsx

Los archivos jsx equivalen a js + xml.

### Componente

Es una función que devuelve un elemento, es una pieza de código encapsulada  
y reutilizable que puede tener estado o no, el elemento que devuelve la  
función es lo que React renderiza.  
Los componentes se deben nombrar usando PascalCase para  
diferenciarlos de los elementos HTML.

Si el componente no va a tener nada en su interior puedo usarlo  
asi `<Button />`, esto se llama _self closing tag_, si va a contener algo,  
debo usarlo asi `<Button>Boton 1</Button>`

Lo que tiene dentro el elemento son los hijos y se les llama children,  
para recuperarlos utilizaria la prop children en el componente:

```jsx
<Button>Boton 1 /* este seria el children */</Button>
```

Solo se debe retornar un elemento porque en el momento en que  
React quiere renderizarlo, solo acepta un elemento, si quiero  
devolver mas de un elemento debo envolverlos en otro elemento o  
puedo usar `<React.Fragment></React.Fragment>` que no crea  
ningun elemento HTML:

```jsx
<React.Fragment>
  <button>Boton 1</button>
  <button>Boton 2</button>
  <button>Boton 3</button>
</React.Fragment>
```

O en su forma corta:

```jsx
<>
  <button>Boton 1</button>
  <button>Boton 2</button>
  <button>Boton 3</button>
</>
```

Tambien puedo pasar funciones y elementos como parametros a un componente.  
Función: paso solo la función y en el componente hijo la ejecuto,  
esta es una forma de pasar información del componente hijo al padre,
ya que la función está en el padre pero la ejecuta el hijo con los datos  
que éste tiene y devuelve algo que el padre puede usar.  
En el padre:

```jsx
function App() {
  const changeUsername = (userName) => setUserName(userName);
  return <FollowCard formatUserName={changeUsername} />;
}
```

En el hijo:

```jsx
function FollowCard({ formatUserName }) {
  const handleClick = () => {
    formatUserName('midudev');
  };
  return <button onClick={handleClick}>Format User</button>;
}
```

Elemento: paso el elemento y el componente hijo lo rendrizaria:  
En el padre:

```jsx
function App() {
  const format = <span>midudev</span>;
  return <FollowCard formatUserName={format} />;
}
```

En el hijo:

```jsx
function FollowCard({ formatUserName }) {
  return <div>{formatUserName}</div>;
}
```

### Props

Son las propiedades que recibe el componente, es un objeto,  
pero normalmente se desestructura para usar dentro de la función.  
Sirven para pasar información del componente padre al componente  
hijo. Se les puede dar un valor por defecto.

Las props deberían ser inmutables, se podria crear una variable nueva  
a partir de la prop.

Puedo poner valores por defecto cuando hago la desestructuración  
o también de la siguiente manera, despues de la función principal:

```jsx
SomeComponent.defaultProps = {
  title: 'No hay título',
};
```

Si quiero enviar el valor booleano true como prop, puedo solamente  
poner el nombre de la prop: `<Button isFollowing />`, en vez de  
`<Button isFollowing={true} />`

### PropTypes

Se usan para definir el tipo a las properties, para usarse se
debe instalar `npm install prop-types` y se debe importar
`import PropTypes from 'prop-types';`. Se usan asi:

```jsx
SomeComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
```

### Eventos

Para manejar un evento, por ejemplo un click, lo podemos hacer asi:  
`<button onClick={() => handleClick()}>Incrementar</button>`  
Ademas, tenemos disponible el `event` que va a tener la información del evento:  
`<button onClick={(event) => handleClick(event)}>Incrementar</button>`  
Todo lo anterior se puede resumir asi y el manejo de los argumentos se  
hace en el método que se llama:  
`<button onClick={handleClick}>Incrementar</button>`  
Si le quiero pasar algo distinto al evento, puedo hacerlo asi:  
`<button onClick={() => handleClick(task.id)}>Incrementar</button>`  
Si solo pusiera la funcion que quiero ejecutar con los parentesis,  
ésta se ejecutaría cuando se renderiza el componente:  
`<button onClick={handleClick(task.id)}>Incrementar</button>`

### Estilos

- Según donde se importe el archivo de css, afectará a ciertos componentes.  
  Si se importa en el main.jsx, afectará a todos los componentes, si se  
  importa en un componente afectará solo a ese componente y sus hijos.

- Para poner estilos en linea podemos ponerlos como un objeto,  
  debo usar sus propiedades en camelCase y el valor como un string,  
  porque React transpila a JavaScript y no a HTML:

  ```jsx
  <div style={{ display: 'flex', alignItems: 'center' }}>Hola</div>
  ```

- Para añadir una clase se debe usar `className=""`:
  ```jsx
  <div className="my-card">Hola</div>
  ```
  Puedo pasarle una clase dependiendo de una condición:
  ```jsx
  <div className={`my-card ${isFollowing ? 'is-following' : ''}`}>Hola</div>
  ```

### Formularios

#### Formularios no controlados

Se gestiona el formulario a traves del DOM.  
El formulario no tiene estado, por lo que no se puede usar `useState`  
para manejar los cambios en los inputs.  
Es la forma mas sencilla y rápida.

```jsx
function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="lastName" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

#### Formularios controlados

Se gestiona el formulario a traves de React,  
gracias al estado, se crea un estado para tener el control de lo que se  
escribe en los inputs.  
El formulario tiene estado, por lo que se puede usar `useState`  
para manejar los cambios en los inputs.  
Los datos del formulario se obtienen con las variables de estado.  
El problema es que se vuelve a renderizar el componente porque se cambia  
el estado en cada cambio del input.  
El formulario se valida de mejor manera que con el no controlado.

```jsx
function Form() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, lastName });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

Se podria usar un solo estado para manejar los datos del formulario:

```jsx
function Form() {
  const [data, setData] = useState({ name: '', lastName: '' });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
      />
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        onChange={(event) => setData({ ...data, lastName: event.target.value })}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

Se podria usar un _useEffect_ para validar el formulario:

```jsx
function Form() {
  const [data, setData] = useState({ name: '', lastName: '' });
  const [error, setError] = useState(null);
  useEffect(() => {
    if (data.name.length > 0 && data.lastName.length > 0) {
      setError(null);
    } else {
      setError('Los campos no pueden estar vacios');
    }
  }, [data]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
      />
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        onChange={(event) => setData({ ...data, lastName: event.target.value })}
      />
      <button type="submit" disabled={error}>
        Enviar
      </button>
    </form>
  );
}
```

### Otros conceptos

- Puedo usar {} para poner expresiones validas de JavaScript,  
  recordar que las expresiones devuelven un valor.

- Cuando renderizamos una lista de elementos o un array se debe agregar el  
  atributo **key** y debe ser un identificador unico para ese elemento.  
  No es recomendable usar el indice del array como key, porque si se agrega  
  un elemento al principio del array, se re-renderizan todos los elementos.

---

## Hooks

Son funciones que permiten añadir funcionalidad a los componentes de React o  
poder ejecutar código arbitrario cuando pasen ciertos eventos en los componentes.  
Estan nombrados con la palabra _use_ para reconocerlos facilmente, ej  
`useState`, si creo un hook personalizado deberia ponerle la palabra _use_.

La declaración de los hooks nunca deberia estar dentro de un condicional  
o un ciclo, siempre deberia estar en el cuerpo del componente. Si quiero  
dar un valor inicial dependiendo de cierta condición, puedo hacerlo a traves  
de una función y devolver el valor dependiendo de la condición.  
(ver en React/Midudev/02-tic-tac-toe/App.jsx).

### useState

Permite manejar el estado y guardarlo en una variable.  
Se importa `import { useState } from 'react'` y se usa
`const [isFollowing, setIsFollowing] = useState(false)`
donde `isFollowing` contiene el valor del estado y `setIsfollowing`
es la función para actualizar el estado, además el `useState(false)`
permite poner un valor inicial al estado.  
La inicialización de los estados solo ocurre una vez, no cada vez que
se renderiza el componente.  
Este seria un estado interno, solo para el componente.

Cuando use el `setIsFollowing(true)` le paso el nuevo valor para actualizar  
el estado, pero también puedo pasarlo de la siguiente manera para  
tener acceso al estado anterior y aplicar cualquier logica y al final  
retornar el nuevo valor: `setIsFollowing((previousState) => true)`

La actualización de los estados es asincrona, por eso muchas veces debo  
usar una variable auxiliar, y no el estado en si, para hacer la lógica.

Los estados deberían ser inmutables, se podria crear una nueva variable  
a partir del estado, solo se deberian actualizar a traves de su metodo set...

Cada vez que cambiamos el estado se vuelve a renderizar el componente,  
se ejecuta el código pero al DOM solo llegan aquellas partes que han cambiado.  
Otra forma que se vuelve a renderizar un componente es cuando un componente  
padre se vuelve a renderizar y propaga los cambios hacia abajo, no hacia arriba.

Siempre que se utilice una prop para inicializar un estado, se debe recordar que  
solo se inicializa una vez, si esta prop cambia no va a cambiar ese estado.  
El estado del padre no se propaga al componente hijo.  
Dijimos que si cambia el estado del padre, este se vuelve a renderizar y  
haria que el componente hijo se vuelve a renderizar, pero su estado solo  
se inicializa una vez.

### useEffect

Permite ejecutar código arbitrario cuando el componente se monta en el DOM  
y cada vez que cambian las dependencias que nosotros le digamos.  
Se utiliza en el cuerpo de nuestro componente.  
Como mínimo se ejecuta una vez cuando se monta el componente.  
Se pueden tener tantos useEffect como queramos.  
useEffect no se puede usar como una función asincrona, siempre debe ser sincrona.  
Es buena práctica que los efectos tengan solo una responsabilidad.

Se ejecuta en modo desarrollo 2 veces para ayudar a depurar posibles  
problemas, en producción solo se ejecuta una vez, y lo hace cuando se usa  
el `React.StrictMode`, si se quita, solo se ejecuta una vez.

Se importa `import { useEffect } from 'react'` y se usa  
`useEffect(funcionAEjecutar, [listaDeDependencias])`  
ListaDeDependencias es un array y es opcional. Si no se le pasa, el  
_useEffect_ se ejecutará cada vez que se renderiza el componente, y una de  
las razones por las que se vuelve a renderizar el componente es cuando  
cambia el estado. Si quiero que se ejecute solo una vez, le pasaria  
un array vacío como segundo parámetro, así, solo se ejecuta cuando se  
renderiza el componente por primera vez. Quedaria asi:  
[] -> solo se ejecuta una vez cuando se monta el componente.  
[dependencia] -> se ejecuta cuando cambia la dependencia y cuando se monta el componente.  
undefined (no se le pasa nada) -> se ejecuta cada vez que se renderiza el componente.

Para limpiar los efectos se puede usar el return del useEffect (llamada cleanup)  
para devolver una función y en ésta especificar cómo limpiar el efecto. Se ejecuta  
siempre que se desmonta el componente (cuando deja de aparecer el componente) y cada vez  
que cambian las dependencias, antes de ejecutar el efecto de nuevo.  
(ver en React/Midudev/03-mouse-follower/App.jsx).

Se debe tener cuidado cuando actualizamos el estado mediante el _setState_  
dentro de un _useEffect_ y no ponemos dependencias, porque se puede crear  
un loop infinito, cuando actualizamos el estado dentro de un _useEffect_  
normalmente debemos poner las dependencias, como mínimo [].

### useLayoutEffect

Es igual que el _useEffect_ pero se ejecuta de forma síncrona despues de todas las
mutaciones del DOM.  
Se importa `import { useLayoutEffect } from 'react'` y se usa
`useLayoutEffect(funcionAEjecutar, [listaDeDependencias])`  
Se recomienda usar el _useEffect_ hasta donde sea posible.

### useRef

Definición mala: crear referencia a un elemento del dom

Permite crear una referencia mutable que persiste durante todo el ciclo de vida del  
componente, es util para guardar cualquier valor que se quiera mutar y cada vez que  
este cambia no vuelve a renderizar el componente. Eso es lo que lo hace diferente del  
_useState_ que cada vez que cambia el estado vuelve a renderizar el componente, pero  
el _useRef_ cada vez que cambia el valor no vuelve a renderizar el componente.  
Permite crear un valor que persiste entre renderizados.  
Es util para guardar referencia a un elemento del DOM.

Se importa `import { useRef } from 'react'` y se usa `const ref = useRef(valorInicial)`  
donde `ref` es la referencia y `valorInicial` es el valor inicial de la referencia.  
Para acceder al valor de la referencia se usa `ref.current` y para cambiar el valor
de la referencia se usa `ref.current = nuevoValor`.  
Para asignar esa referencia a un elemento del DOM se pone `ref={ref}` como atributo  
del elemento.

### memo - Funcion de React

Permite memorizar un componente, es decir, que solo se vuelva a renderizar
cuando sus props cambian.  
Es recomendado usarlo cuando se tiene una operación costosa que se ejecuta cada vez que
se renderiza el componente, no seria necesario usarlo en todos los casos.  
Se importa `import { memo } from 'react'` ó `import React from 'react'` y se usa
`export memo(Componente)` ó `export React.memo(Componente)` donde `Componente` es
el componente que se va a memorizar.

### useMemo

Permite memorizar un valor que solo se vuelve a calcular cuando cambian sus  
dependencias y no cada vez que se renderiza el componente.  
Si no cambian las dependencias, la función no se ejecuta y el valor se mantiene igual.  
Es recomendado usarlo cuando se tiene un problema de rendimiento o una operación costosa
que se ejecuta cada vez que se renderiza el componente, no seria necesario usarlo en todos los casos.  
Se importa `import { useMemo } from 'react'` y se usa  
`const valorAMemorizar = useMemo(() => funcionAEjecutar, [listaDeDependencias])`  
donde `valorAMemorizar` es el valor que se va a memorizar, `funcionAEjecutar`  
es la función que se va a ejecutar y `listaDeDependencias` es un array con las dependencias.  
Si no se le pasa la lista de dependencias, se ejecuta cada vez que se renderiza el componente.  
Si se le pasa una lista de dependencias vacía, se ejecuta solo una vez cuando se monta el componente.  
Si se le pasa una lista de dependencias, se ejecuta cuando cambia alguna de las dependencias  
y cuando se monta el componente.  
(ver en curso-react-midudev/05-buscador-peliculas/).

### useCallback

Es exactamente lo mismo que el _useMemo_ pero para funciones porque simplifica su sintaxis.  
Se importa `import { useCallback } from 'react'` y se usa  
`const funcionAMemorizar = useCallback(funcionAEjecutar, [listaDeDependencias])`  
Se usa para las funciones, para lo demas se usa el _useMemo_.  
(ver en curso-react-midudev/05-buscador-peliculas/).

### useReducer

**Reducer**: Es una funcion que permite manejar el estado de una manera escalable y
más compleja, recibe el estado actual y la acción que se quiere ejecutar, a partir de
estos 2, devuelve el nuevo estado. Por eso se llama reducer, porque transforma el
estado a partir de la accion y devuelve el nuevo estado.  
Esta totalmente separado del componente, del provider y del custom hook.  
No puede ser una función asincrónica, ni debe realizar tareas asíncronas.  
Debe ser una función pura, no debe tener efectos secundarios en el resto del código.  
Debe retornar un nuevo estado, no debe mutar el estado actual (por eso se usa con
frecuencia el spread operator, ...state).  
No debe llamar al localStorage o sessionStorage, ni a la API, porque estas pueden
fallar y terminaría retornando un error y no un nuevo estado.  
Para modificar el estado no debe requerirse más de una acción.

La lógica seria la siguiente:

- Se crea un reducer que contiene el estado inicial y la lógica para manejar el estado.
- La vista renderiza el estado.
- La vista dispara acciones que se envían al reducer.
- El reducer maneja el estado y devuelve el nuevo estado que se renderiza en la vista.

Se importa `import { useReducer } from 'react'` y se usa
`const [state, dispatch] = useReducer(reducer, estadoInicial, init)`,
donde `init` es la función inicializadora en caso que se tenga un proceso que tome tiempo, es opcional,
`estadoInicial` es el estado inicial del componente, `reducer` es una función que
recibe el estado actual y la acción para determinar el nuevo estado y devuelve el nuevo estado,
`state` es el estado actual, `dispatch` se encarga de enviar las acciones al reducer.  
El type del action es obligatorio y se usa para identificar la accion que se tiene que hacer.  
El payload del action es opcional, es el objeto para actualizar el estado, puede ser un objeto, array, string, etc.  
(ver en curso-react-midudev/06-shopping-cart/).

### Contexto - useContext

Esta separado del arbol de componentes y se puede acceder a él desde
cualquier componente que esté contenido en el contexto. Todo lo que
envuelva el componente Provider, tendrá acceso al contexto.  
Es una forma de inyección de dependencias, puedes inyectar información
en cualquier componente sin tener que pasarla por las props, no solo
es para crear un estado global, puede ser tambien información estática.  
No hace falta envolver toda la aplicación en el contexto, a veces queremos
que solo una parte de la aplicación tenga acceso a ese contexto.  
Se recomienda para usar con estados que cambian pocas veces o no son muy complejos,
para lo demas se deberia usar Redux, Zustand u otra alternativa.

Es una forma de pasar información a los componentes sin tener que pasarla por las props.  
Se usa para evitar el prop drilling, que es pasar props por muchos componentes.  
Todos los componentes hijos tienen acceso al contexto.  
Se puede acceder a él a través de la API Context de React.

Se importa `import { createContext } from 'react'`  
Se crea un contexto: `const TaskContext = createContext()`, este seria el  
nombre del contexto pero el componente en sí se llama Provider.  
Seria recomendable exportar el contexto y el componente Provider.  
Siempre son 3 pasos: crear el contexto, proveer el contexto y consumirlo:

1. Se crea el contexto como un componente:

```jsx
import { createContext } from 'react';
// crear el contexto
// Este es el que tenemos que consumir
export const TaskContext = createContext();
// crear el Provider para proveer el contexto
// Este es el que nos provee de acceso al contexto
export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  return (
    /* el value es la información que quiero proveer y a la cual tienen
    acceso los componentes hijos, puede ser cualquier cosa, un objeto, 
    un array, un string, un estado, etc. */
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {/* el children es donde quiero proveer esa informaciòn */}
      {children}
    </TaskContext.Provider>
  );
}
```

2. Se provee el contexto:

```jsx
import { TaskContextProvider } from './TaskContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
```

3. Consumir el contexto, para usar el contexto en un componente que es hijo del contexto,
   se debe importar el contexto y el hook `useContext` de React:

```jsx
import { useContext } from 'react'
import { TaskContext } from './TaskContext'
export function TaskCard() {
  const { tasks, setTasks } = useContext(TaskContext)
  return (
    <div>
      {
        tasks.map((task) => {
          <div key={task.id}>{task.title}</div>
        })
        <button onClick={setTasks}>add task</button>
      }
    </div>
  )
}
```

### useId

Genera un identificador único que siempre va a ser el mismo. Funciona con SSR.  
No sirve como key en algo que se está iterando, porque la key necesita un id
único para ese elemento y el useId es el orden de llamada dentro del componente.  
Se importa `import { useId } from 'react'` y se usa `const id = useId()`
donde `id` es el id generado.  
Seria ideal para relacionar un label con un input, el label llevaria el atributo
`htmlFor={id}` y el input tendria el atributo `id={id}`.  
(ver en curso-react-midudev/06-shopping-cart/).

### Custom Hooks

- Es una función, sirven para extraer lógica de los componentes y reutilizarla en  
  diferentes componentes.
- Debe empezar con la palabra _use_.
- Debe seguir las reglas de los demás Hooks.
- La diferencia entre un Custom Hook y una función, es que en el Custom Hook si  
  podemos utilizar los Hooks de React, esto es lo que lo diferencia de hacerlo un  
  hook o un helper.
- No deberian ir atados a la implementación, por eso también se le debe dar un  
  nombre que no haga referencia a la implementación.
- No necesariamente se definen en archivos .jsx, pueden ser archivos .js, porque  
  no necesariamente deben estar ligados a React.
- Cuando vea un _useEffect_ en el componente, me podría preguntar si es lógica  
  que se puede abstraer en un Custom Hook, y normalmente es así.

---

## Buenas prácticas

- Para una prop, que se va a usar como inizializadora de un estado, se deberia  
  poner el nombre de **initial**, ej: **initialIsFollowing**

- Lo que no va a cambiar cuando se use el componente, lo puedo poner afuera  
  de la función principal para evitar que se vuelva a ejecutar esa parte que  
  no va a cambiar.

- Leer del localStorage es lento y sincrono, por eso deberiamos hacerlo lo  
  menos posible. Si queremos iniciar un estado en base al localStorage lo  
  deberiamos hacer como valor inicial del _useState_, pasandole una función  
  y devolver el valor según la lógica que queramos.  
  (ver en React/Midudev/02-tic-tac-toe/App.jsx).

- Debemos controlar que ponemos en el cuerpo del componente porque esto se  
  va a ejecutar cada vez que se renderiza el componente. Se deberia poner  
  atención donde ponemos cosas como lectura o escritura del localStorage,  
  agregar addEventListener, llamadas a APIs, fetching de datos y demás,  
  seria recomendable ponerlos dentro de un _useEffect_.

- `{fact && <p>{fact}</p>}`  
  renderizado condicional, es una buena practica cuando se trabaja con  
  código asíncrono como fetching de datos.

- Tener cuidado con lo que se llama _Dos fuentes de la verdad_, es cuando
  tenemos un estado local y un estado global y esto puede generar problemas de
  sincronización al renderizar los cambios.

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

- No usar las defaultProps, porque si se quiere pasar un valor por defecto  
  a una prop, se puede hacer directamente en la definición de la función,  
  ej:

  ```js
  function GifGrid({ category = 'One Punch' }) {
    // ...
  }
  ```

- No es necesario importar React en los archivos .jsx, porque se hace  
  automáticamente.

- Si se tienen muchos componentes dentro de una carpeta, se puede crear un  
  archivo index.js dentro de esta misma carpeta y exportar todos los componentes  
  desde ahi, ej:
  ```js
  export * from './GifGrid';
  export * from './GifItem';
  export * from './GifList';
  ```
  Y en el arhivo que se quiera usar, solo se hace referencia a la carpeta  
  porque por defecto mira el index.js.
  ```js
  import { GifGrid, GifItem, GifList } from './components';
  ```
