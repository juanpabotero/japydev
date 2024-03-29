---
id: 'css'
title: 'CSS'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/css.svg'
---

## Propiedades

- Es recomendable hacer un reset de los estilos por defecto, usar:

  ```css
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font: inherit;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    min-height: 100vh;
  }
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  ```

- Es recomendable poner los estilos a traves de clases, donde unas controlen  
  el layout y otras los estilos de los elementos.

- la etiqueta "p" sirve para agregar literalmente un parrafo, si tengo 2
  parrafos seguidos, creo 2 etiquetas "p"

- A los elementos in-line no se les puede aplicar las propiedades de width y height.

- Es recomendable usar un max-width y no width, porque permite flexibilidad
  del elemento, con width el tamaño es fijo.  
  En vez de poner un `width: 100%` y `max-width: 1280px`, puedo usar
  `width: min(100%, 1280px)`

- es recomendable usar un min-height y no height, porque permite flexibilidad
  del elemento, con height el tamaño es fijo.

- El body por defecto toma el height de su hijo más alto, por eso cuando doy
  100% a su hijo no ocupa todo el alto de la pantalla, queda limitado por
  su padre (el body). El body toma esta altura porque los elementos en css por
  defecto tienen un height de auto, es decir, el alto de su contenido.

  Para hacer que algo mida toda la pantalla debo usar viewport units, debería usarlas así:  
  height: 100vh;  
  height: 100dvh;  
  Si el navegador soporta dvh lo tomará, sino, tomará vh, se hace así porque
  dvh arregla algunos problemas que vh genera en mobiles.

  Poner un min-height al padre y un height: 100% al hijo, el hijo va a tomar
  el tamaño por defecto del padre que es auto, porque no sabe cual es el height
  del padre, poner un min-height, no define explícitamente el height.

- `margin-block` y `margin-inline` son logical properties.  
  `margin-block` maneja el top y bottom margin.  
  `margin-inline` maneja left y right margin.

- Se puede usar sticky en vez de fixed, porque fixed saca el elemento del
  flow y deja de contar el espacio, debo ajustar el resto de elementos
  para que se vea apropiadamente, con el sticky se mantiene el elemento
  en el flow y hace un efecto similar al fixed.

- Cuando se pone `position: fixed`, implicitamente tiene relative tambien.

- se puede usar los pseudoelementos ::after y ::before para estilar en vez
  crear nuevos elementos HTML.  
  Dentro de los pseudoelementos ::after y ::before, se puede activar el
  atributo attr para cambiar el contenido desde el html, ej:  
  en el html:  
  `<button data-count="8"></button>`  
  en el css:

  ```css
  button::after {
    content: attr(data-count);
  }
  ```

- :has() para buscar elementos que contengan un elemento especifico,
  selecciona el elemento padre:

  ```css
  .container:has(.item) {
    background: red;
  }
  ```

  selecciona los container que contengan el elemento item

- :is() permite agrupar selectores:  
  en vez de escribir:  
  `header a, header p {}`  
  puedo escribir:  
  `header:is(a, p) {}`  
  otras formas:  
  `header:is(p, .greenButton) {}`  
  `:is(header, footer, section) a:hover {}`  
  hay que tener cuidado usandolo porq la especificidad la da el selector
  mas especifico que esté dentro del parentesis.

- :where() tambien permite agrupar selectores al igual que is() pero
  tiene una especificidad constante

- para redondear los bordes, puedo usar:  
  `border-radius: 100vmax;`

- `transform: scale()` y `outline` no modifican el DOM, solo es estetico

- las animaciones se deberian hacer con:  
  `transform: translate3d(10px, 10px, 0)`  
  porque el 3d utiliza la GPU y no la CPU y el movimiento queda mas fluido

- `color: currentColor;`  
  Quiere decir que el elemento hereda el color de su padre. Se puede usar
  por ejemplo para poner el color a un texto del menu con su icono, tanto
  el texto como el icono se ponen con el currentColor y la etiqueta "a"
  que los envuelve a los 2, es decir, el padre, es quien va a tener el color

- Cuando se utilice border-radius, no usar el mismo para el elemento externo
  y el interno, poner un poco mas pronunciado el redondeo del externo.

- La propiedad **@font-face** permite guardar las fuentes q vamos a usar en
  nuestro proyecto y no que estén proveidas desde terceros.  
  Fuentes ttf (trueType font) son compatibles con navegadores más antiguos pero son más pesada.  
  **fontsquirrel.com** un generador de fuentes web, subo las fuentes ttf y
  genera las fuentes woff y woff2 que son más ligeras (woff2 es mas ligera que woff).

- Poner una animacion al input cuando sea invalido:

  ```css
  input:invalid {
    animation: invalidInput 0.3s;
  }
  ```

- Esconder texto muy largo. Indica que si el desbordamiento es por un texto,
  ponga 3 puntos al final. Por defecto text-overflow es clip, es decir, corta
  el texto, pero no lo esconde:

  ```css
  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ```

- Poner puntos suspensivos despues de n numero de lineas,
  en este caso, en 2 lineas:

  ```css
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  ```

- Remover outline cuando se hace click en los controles pero no para usuarios  
  que usan el teclado:

  ```css
  button:focus:not(:focus-visible) {
    outline: none;
  }
  button:focus-visible {
    outline: 2px solid blue;
  }
  ```

- Para invertir los colores de una página (pasar de modo claro a modo oscuro
  o viceversa) puedo seleccionar el HTML y agregarle el css:

  ```css
  html {
    filter: invert(1);
  }
  ```

- Controlar scroll. Puedo poner `overflow: auto` para que el contenedor pueda hacer scroll.  
  `scroll-snap` para hacer scroll y controlar su funcionamiento (buscar midudev snap en
  Google para ver ejemplos). Los elementos de adentro tambien tienen una propiedad paa que
  se posicionen donde yo quiera.

  ```css
  .container {
    overflow: auto;
    scroll-snap-type: y mandatory;
  }
  .container > * {
    scroll-snap-align: start;
  }
  ```

  Puedo usar `scroll-behavior: smooth` para que el scroll sea suave.

- Soportar modo oscuro en tu web.  
  Canvas y CanvasText se adaptan al modo claro/oscuro automaticamente.  
  `color-scheme: light dark;` le dice a la página que se debe renderizar
  automaticamente en estos dos modos.

  ```css
  body {
    background-color: Canvas;
    color: CanvasText;
    color-scheme: light dark;
  }
  ```

- Cuadricula con CSS:

  ```css
  .body {
    background: conic-gradient(from 90deg at 1px 1px, black 25%, #09f 0);
    background-size: 10px 10px;
  }
  ```

- Scroll snap:
  ```css
  .container {
    overflow: auto;
    scroll-snap-type: y mandatory;
  }
  .container > * {
    scroll-snap-align: start;
  }
  ```

---

## Responsive

- para los textos puedo poner un max-width en caracteres, por ej 70ch

- Usar media queries para agregar complejidad, es recomendable hacer mobile
  first, es decir, hacer el diseño para mobile y luego agregarle complejidad
  para desktop, ya que normalmente en mobile los elementos van unos debajo de otros,
  que es el comportamiento por defecto, y para desktop se agrega la complejidad.  
  (ver youtube, lista css, video
  **5 simple tips to making responsive layouts the easy way**)

- Un `width` recomendado para usar en los media queries es 40rem (640px).

- Poner espaciado entre elementos de un container flex:

  ```css
  .container {
    display: flex;
  }
  .container:first-child {
    margin-right: auto;
  }
  .container:last-child {
    margin-left: auto;
  }
  ```

- para hacer una layout responsive:

  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  }
  ```

  otra opcion:

  ```css
  @media (min-width: 40em) {
    .container {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }
  ```

- para poner un texto centrado y una imagen de fondo:

  ```css
  .container {
    display: grid;
    place-items: center;
  }
  .container > * {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .container > img {
    aspect-ratio: 16/9;
    object-fit: cover;
    z-index: -1;
  }
  ```

- tipografia para una layout responsive:  
  usando clamp():  
  se suma el valor en rem para que la fuente se modifique cuando el
  usuario hace zoom, la medida en vw no se modifica con el zoom.  
  `font-size: clamp(2rem, 10vw + 1 rem, 10rem);`  
  usando custom properties:

  ```css
  :root {
    --fs-600: 2rem;
    --fs-400: 1rem;
  }
  @media (min-width: 40em) {
    :root {
      --fs-600: 3rem;
      --fs-400: 1.25rem;
    }
  }
  ```

- padding o margin en una layout responsive:

  ```css
  padding: clamp(2rem, 20vh, 10rem) 0;
  padding: min(20vh, 10rem) 0;
  ```

  es una logical property, solo maneja el top and bottom padding:  
  `padding-block: min(20vh, 10rem);`

- Crear un menu responsive:  
  Ver curso-react-midudev/06-shopping-cart/components/Cart.css y Cart.jsx

---

## Colores

- rgb, a parte de escribirlo de 0 a 255, lo puedo esrcibir en porcentajes:  
  `rgb(100%, 50%, 100%);`

---

## Imágenes

- Poner las imagenes de una mejor manera:

  ```css
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
  ```

- Poner imagenes o logos de la misma altura:
  ```css
  img {
    width: 50px;
    aspect-ratio: 3/2;
    object-fit: contain;
    mix-blend-mode: color-burn;
  }
  ```

---

## GRID

Cuando defino el contenedor como grid, los hijos serán grid-items y dejarán
de tener el comportamiento por defecto de block o de inline.  
El comportamiento por defecto de grid es crear una columna, por lo que sus
hijos seran filas. Para crear columnas, puedo usar la propiedad
`grid-auto-flow: column;`.

**Propiedades container**

```css
.container{
	display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
	grid-auto-flow: row;
	grid-auto-flow: column;
	grid-auto-columns: 1fr;
	grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
  "header header header"
  "main . sidebar"
  "footer footer footer"
  row-gap: 10px;
  column-gap: 20px;
  gap: 10px 20px;
  gap: 10px;
}
```

- Alinear el contenido horizontalmente: `justify-content: start`
- Alinear el contenido verticalmente: `align-content: end`
- Se puede simplificar con la propiedad: `place-content: posicionVertical posicionHorizontal`  
  Si ambas posiciones son iguales, se puede simplificar con: `place-content: posicion`
- Alinear los items horizontalmente: `justify-items: start`  
  El valor por defecto es stretch y toma todo el ancho disponible para el elemento,
  si lo cambio, solo va a tomar el tamaño de su contenido
- Alinear los items verticalmente: `align-items: end`  
  El valor por defecto es stretch y toma todo el alto disponible para el elemento,
  si lo cambio, solo va a tomar el tamaño de su contenido
- Se puede simplificar con la propiedad: `place-items: posicionVertical posicionHorizontal`  
  Si ambas posiciones son iguales, se puede simplificar con: `place-items: posicion`

**Propiedades items**

```css
.item {
  grid-column: 1 / 3;
  grid-column: 1 / -1; // -1 es la ultima linea
  grid-row: 1 / span 2;
  grid-area: header;
}
```

- Alinear el item horizontalmente: `justify-self: start`  
  El valor por defecto es stretch y toma todo el ancho disponible para el elemento,
  si lo cambio, solo va a tomar el tamaño de su contenido.
- Alinear el item verticalmente: `align-self: end`  
  El valor por defecto es stretch y toma todo el alto disponible para el elemento,
  si lo cambio, solo va a tomar el tamaño de su contenido.
- Se puede simplificar con la propiedad: `place-self: posicionVertical posicionHorizontal`  
  Si ambas posiciones son iguales, se puede simplificar con: `place-self: posicion`

---

## FLEX

Cuando defino el contenedor como flex, los hijos serán flex-items y dejarán
de tener el comportamiento por defecto de block o de inline.  
El comportamiento por defecto de flex es crear una fila, por lo que sus hijos  
seran columnas.

Lo primero que hace flex, es poner el ancho de los elementos a su content size,
y de ser necesario se encogen para que quepan en la fila, porque por defecto
`flex-shrink: 1`. Lo que hace es que toma el espacio que hace falta para que quepan
todos los elementos en la fila y lo divide por igual para cada elemento, por lo que
si hay un elemento mas grande que el resto, va a seguir siendo mas grande.  
Flexbox no tiene en cuenta el padding, margin o border de los elementos, solo mira
el content size.

`flex` es el diminutivo de las propiedades `flex-grow, flex-shrink y flex-basis` y sus  
valores por defecto son 0 1 auto, respectivamente.
Cuando se usa `flex: 1` los valores son 1 1 0, lo que hace que el elemento ponga su  
`width: min-content` pero despues se expande hasta ocupar todo el espacio disponible.  
`flex-basis: 100%` hace que el elemento tenga el tamaño de su content size, pero  
se expande o encoge hasta ocupar todo el espacio disponible.  
Cuando se usa `flex-grow: 1`, se toma todo el espacio disponible y se divide entre
los elementos que tienen `flex-grow: 1`.

`flex-flow` es el diminutivo de las propiedades `flex-direction y flex-wrap` y sus
valores por defecto son row nowrap, respectivamente.  
Una vez `flex-wrap: wrap` se activa (por defecto es nowrap) y el contenido es
multilinea, la propiedad `align-content` funciona.

**Propiedades container**

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-end;
  justify-items: flex-start;
  align-items: flex-end;
  row-gap: 10px;
  column-gap: 20px;
  gap: 10px 20px;
  gap: 10px;
}
```

**Propiedades items**

```css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  flex: 1 1 100%;
  order: 1;
  justify-self: flex-start;
  align-self: flex-end;
}
```

---

## SASS

Declarar variables al inicio del archivo: `$color-primary: red;`  
Se usa: `color: $color-primary`  
Si quiero usar las variables como selectores, se debe interpolar:

```css
$selector: '.nav';
#{$selector} {
  color: red;
}
```

**Partials** definir un archivo sin que sea compilado, para después usarlos
en un archivo SASS que referencie a esos archivos, para definir un archivo
partial se pone un _ al inicio.  
Para usar el partial en un archivo principal se usa: `@use 'nombrePartial';`. Sin poner el _  
Puedo poner un alias al partial: `@use 'nombrePartial' as nombreAlias;`  
Para usar una variable del archivo partial se hace referencia al nombre del
partial y después el nombre de la variable: `color: nombrePartial.$nombreVariable`

Puedo crear un archivo \_index.scss dentro de una carpeta para exportar los demás
archivos de esa carpeta, y luego importarlos desde un solo lugar.  
En el archivo \_index.scss: `@forward 'nombreArchivo';`  
Para usarlo en otro archivo: `@use 'nombreCarpeta';`, y por defecto mirará el
archivo \_index.scss.  
Para usar una variable de uno de los archivos partials:
`color: nombreCarpeta.$nombreVariable;`

Cuando se hace **nesting**, se usa el & para hacer referencia al elemento padre:

```css
a {
  color: red;
  &:hover {
    color: blue;
  }
}
```

**Ciclo for y condicional if**

```css
@for $iterador from 1 through 5 {
  .circle-#{$iterador} {
    color: red;
  }
  @if $iterador == 5 {
    color: blue;
  }
}
```

**Mixins** definen estilos que pueden ser reutilizados, pueden recibir parámetros
y un valor por defecto, para definirlo:

```css
@mixin alinear-contenido($justify: center) {
  display: flex;
  align-items: center;
  justify-content: $justify;
}
```

Usar el mixin:  
`@include alinear-contenido(center)`  
Si no recibe parámetros, no se pone paréntesis.  
Para usar un mixin de un partial, se importa el partial y se usa:  
`@include nombrePartial.nombreMixin`

Las **funciones** son parecidas a los mixins pero los mixins se usan para estilos
y las funciones para otra lógica. Para definirla:

```css
@function pixels-rem($pixeles) {
  $rem: $pixeles * 2rem;
  @return $rem;
}
```

Para usarla: `font-size: pixels-rem(10);`

---

## Metodología BEM

BEM significa Bloque, Elemento, Modificador.

Un bloque es un contenedor donde se encontrarán los diferentes elementos. El bloque
corresponde a la raíz de la clase y deberá ir siempre primero. Cuando ya está definido
es posible nombrar los elementos que compondrán la estructura final y su contenido.  
Algunas restricciones a la hora de nombrar un bloque:  
No puedes usar mayúsculas. No puedes usar dos guiones bajos seguidos, porque está
reservado para los elementos. Y tampoco puedes usar dos guiones seguidos, porque
está reservado para los modificadores.

Un elemento es una de las piezas que compondrán la estructura de un bloque.

Un modificador sirve para modificar algunas propiedades de un bloque o elemento.

Para atacar los estilos del bloque en CSS, tienes que utilizar solo el selector de
clase con el nombre del bloque.

Ejemplo:

```html
<!-- EJEMPLO 1 -->
<div class="block">
  <div class="block__element">Elem 1</div>
  <div class="block__element">Elem 2</div>
  <div class="block__element block__element--modifier">Elem 3</div>
</div>
<!-- EJEMPLO 2 -->
<div class="item item--modifier">
  <div class="item__element">Elem 1</div>
  <div class="item__element">
    <div class="item__another-element">Elem 2</div>
    <div class="item__another-element">Elem 3</div>
  </div>
  <div class="item__element item__element--modifier">Elem 4</div>
</div>
```

Los estilos usando un preprocesador de css:

```css
// EJEMPLO 1
.block {
  color: inherit;
  &__element {
    color: inherit;
    &--modifier {
      color: inherit;
    }
  }
}
// EJEMPLO 2
.item {
  color: inherit;
  &--modifier {
    color: inherit;
  }
  &__element {
    color: inherit;
    &--modifier {
      color: inherit;
    }
  }
  &__another-element {
    color: inherit;
  }
}
```

---

## Otros

- Medidas

  - **rem**: es una medida relativa, relativa al root o el html,
    normalmente **1rem = 16px**.  
    Es preferible que trabajar con pixeles porq respeta la configuracion
    de otros navegadores o del usuario, pero si quiero consistencia por
    ejemplo usando media-queries, puedo usar pixeles o em.  
    Es preferible que trabajar con em porq solo hace referencia a un
    elemento, el root, y no a distintos elementos, aunque puede haber
    situaciones donde se pueda usar.
  - **em**: es una medida relativa, relativa al elemento que lo contiene,
    normalmente **1em = 16px**

- no es necesario usar metodologia BEM cuando se trabaja a traves de
  modulos porq normalmente el framework le pone hash a las clases

- El css de una pagina es critico porque bloquea la carga de la pagina,
  es mejor cargar el critical css (el css minimo para que la pagina se
  vea bien) en line, es decir, en el HTML para que la pagina cargue mas
  rapido porque la descarga del css bloquea mucho, entonces es mejor dejar
  el resto del css para descargar despues.

- Las fuentes son un rescurso crítico para la página, por eso si se está cargando
  una fuente en el CSS, podriamos hacer un _preload_ de las fuentes para que no
  tangan que esperar hasta que se descargue el CSS.
  `<link rel="preload" href="fonts/Archivo-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">`

---

# MIDUDEV

CSS (Cascading Style Sheets) es un lenguaje de estilos que nos permite darle
estilo a nuestros documentos HTML.

Hay algunas propiedades que se heredan de su contenedor padre, por ejemplo,
la fuente, pero hay otras que no como el borde.

El valor `initial` de una propiedad, es el valor por defecto de esa propiedad.  
El valor `inherit` de una propiedad, hereda el valor de su contenedor padre.  
El valor `unset` de una propiedad, resetea la propiedad, le quita las propiedades
heredadas.

`outline` es el contorno del elemento, este se pone sobre el contenido del elemento,
no afecta el layout.  
`border` es el borde del elemento, este se pone alrededor del contenido del elemento,
afecta el layout.

Pseudoclase `:hover` es cuando el mouse está sobre el elemento.
Pseudoclase `:active` es cuando se hace click en el elemento.  
Pseudoclase `:focus` es cuando el elemento tiene el foco.

Operador `>` es para seleccionar el hijo directo de un elemento.  
Operador `+` es para seleccionar el hermano que sigue justo despues del elemento.  
Operador `~` es para seleccionar todos los hermanos que vienen despues del elemento.

La especificidad de un selector es la suma de los valores de cada uno de sus selectores.  
`id` tiene un valor de 1,0,0.
`clase, atributo y pseudo-clase` tienen un valor de 0,1,0.
`elemento y pseudo-elemento` tienen un valor de 0,0,1.

Usar Normalize CSS es mejor que usar Reset CSS porque no resetea todo, solo lo necesario.
Tailwind ya hace este normalize por defecto.

El modelo de caja `content-box` es el modelo por defecto, el ancho y alto que se le
da al elemento es el ancho y alto del contenido, no toma en cuenta el padding ni el
border, estos 2 se van agregando a su tamaño.  
En el modelo de caja `border-box`, el ancho y alto que se le da al elemento es el ancho
y alto del contenido, padding y border.

El overflow por defecto es `visible`, es decir, el contenido que se sale del elemento
se muestra. Es recomendable usar `auto` en vez de `scroll` porque el navegador va a
saber gestionar mejor si poner el scroll o no.

Los elementos se posicionan por defecto de forma estática: `position: static`.

`position: relative` crea un punto relativo para uqe cualquier hijo pueda tomarlo
como referencia para posicionarse.

`position: absolute` podemos definir su posición absoluta respecto al punto de
referencia más cercano, es decir, si alguno de sus contenedores padre tiene
`position: relative`, se posicionará respecto a este, sino, se posicionará
respecto al documento.

`position: fixed` posiciona el elemento relativo a la pantalla, es decir,
si hago scroll, el elemento se va a mantener en la misma posición. No le afecta
`position: relative` de sus contenedores padre.

`position: sticky` se posiciona relativo a su contenedor padre y se mueve hasta donde
su contenedor lo permita. Tiene en cuenta el `position: relative` de sus contenedores
padre. Se debe acompañar de top, bottom, left o right para que se posicione.

Los elementos HTML vienen en 3D, hay un apilamiento o capas y de allí sale la
propiedad z-index para darle la profundidad a los elementos.  
Algunas propiedades crean el contexto de apilamiento, por ejemplo, `position: fixed`
o `opacity` menor a 1.  
Cuando existe este apilamiento, por derfecto, los elementos hijos se posicionan por
encima de sus padres pero por debajo de otros elementos en otros nodos. Los elementos
hermanos que estan más abajo en el documento quedan por encima de los otros.  
En algunos casos se debe usar `position: relative` para que el `z-index` funcione,
porque el contexto de apilamiento debe tener alguna referencia.

`display: flex` establece como tiene que funcionar el contenedor respecto a sus hijos.
Permite alinear los elementos hijos. Es unidereccional, en un solo eje, es la
diferencia con grid que funciona en 2 ejes.

Por defecto usa `flex-wrap: nowrap` y lo que hace es intentar que el contenido quepa
en una sola linea, si no cabe, le cambia su tamaño para que quepa.  
`flex-wrap: wrap` le dice que si no cabe el contenido en una linea, entonces puede
hacer un salto de linea.

`flex-flow` es una forma abreviada de `flex-direction` y `flex-wrap`.

Los valores por defecto son:

- `flex-grow: 0` los elementos no crecen
- `flex-shrink: 1` los elementos pueden reducir su tamaño a un tamaño más pequeño
  que su flex-basis.
- `flex-basis: auto` los elementos tienen un tamaño base de auto, es decir, el tamaño
  de su contenido. Si el elemento tiene un width definido, toma éste como flex-basis.

Si pongo `flex: 1` es lo mismo que poner `flex: 1 1 0`, es decir, `flex-grow: 1`,
`flex-shrink: 1` y `flex-basis: 0`. Los elementos empiezan desde el mismo tamaño base y
crecen hasta tener el mismo tamaño para ocupar todo el espacio disponible.

- `justify-content` alinea el contenido en el eje principal
- `align-content` alinea el contenido en el eje secundario
- `justify-items` alinea los elementos en el eje principal
- `align-items` alinea los elementos en el eje secundario
- `justify-self` alinea el elemento en el eje principal
- `align-self` alinea el elemento en el eje secundario

GRID

Permite poner elementos encima de otros.

La principal diferencia con `flex` es que este trabaja en un solo eje, mientras que
`grid` trabaja en 2 ejes.

El valor de auto para definir el tamaño de los elementos hace que se ajuste segun su contenido,
si una columna tiene mas contenido va a tomar más espacio.

Con `auto-fill`, si no hay más elementos que cubran el espacio va a respetar el tamaño
del elemento asi sobre espacio a los lados. Con `auto-fit`, si no hay más elementos que
cubran el espacio, va a hacer crecer los elementos para cubrir todo el espacio disponible.

Se puede sobreponer unos elementos sobre otros con grid posicionandolos en el mismo lugar,
quedaria por encima el elemento que esta más abajo en el DOM:

```css
.container div:nth-child(1) {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
}
.container div:nth-child(2) {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
}
```

ANIMACIONES

`scale` cambia el tamaño del elemento solo visualmente porque sigue ocupando lo mismo.

Hay 2 formas de hacer animaciones, con transiciones y animaciones.

Con las transiciones tener cuidado al usar el `all` porque anima todas las propiedades
y en el caso de las sombraas son muy costosas de animar. Es mejor especificar las
propiedades que se van a animar.

Podemos hacer que las propiedades tengan diferentes transiciones. ej:

```css
div {
  transition: background-color 0.3s ease-in, color 0.5s ease-out;
}
```

Para saber que se puede animar, podemos penasr en las propiedades que tienen un estado
intermedio, por ejemmplo, cambiar de un color a otro o el tamaño de un elemento. Pero
propiedades como `background-image` o `font-family` no tienen estado intermedio y no
se pueden animar.

Se podria cambiar la transicion de entrada y salida de un elemento al poner distintas
propiedades en los distintos estados:

```css
div {
  transition: all 300ms ease-in; // estado final
}
div:hover {
  transition: all 1s ease-out; // la primera animación
}
```

Por temas de accesibilidad se puede poner una media query para los usuarios que prefieren
no tener animaciones:

```css
@media (prefers-reduced-motion: reduce) {
  div {
    transition: none;
  }
}
```

### Utilidades

- Posicionar modales o dialogos en el centro de la pantalla. Posicionado respecto al
  documento:

  ```css
  .modal {
    position: absolute;
    inset: 0;
    margin: auto;
  }
  ```
