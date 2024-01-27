---
id: 'html'
title: 'HTML'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/html.svg'
---

## Conceptos

Es un lenaguaje cuyo objetivo es definir o describir el contenido de una pagina web.

Los navegadores tienen unos estilos por defecto para cada elemento.

Los elementos reemplazables son aquellos que se reemplazan por un elemento externo,
por ejemplo, una imagen, un video, un input, un iframe, etc. Estos elementos no tienen
etiqueta de cierre.

Los atributos permiten darle información al elemento.

**Metadatos**:

- La etiqueta `charset` define el tipo de codificación de caracteres
  que se va a usar en la pagina web.

- La etiqueta `name="viewport"` define el tamaño de la ventana del navegador en la que se
  va a mostrar la pagina web. `content="width=device-width, initial-scale=1.0"` indica
  que el ancho de la pagina web va a ser el ancho del dispositivo y que el zoom inicial
  va a ser de 1.

- La etiqueta `name="description"` define la descripción de la página y aparece en la
  búsqueda de Google.

- La etiqueta `name="keywords"` define las palabras clave de la página y aparece en la
  búsqueda de Google.

- La etiqueta `name="author"` define el autor de la página.

- La etiqueta `name="robots"` define si la página se puede indexar o no, si se puede
  seguir o no, y si se puede mostrar en los resultados de búsqueda o no.

- Las etiquetas de Open Graph permiten definir como se va a mostrar la página en las
  redes sociales.

- La etiqueta `rel="alternate"` define la versión alternativa de la página, por ejemplo,
  si la página está en español, la versión alternativa puede estar en inglés.
  Es buena para SEO. Ej:

  ```html
  <link rel="alternate" href="https://www.example.com/en" hreflang="en" />
  ```

- La etiqueta `rel="canonical"` define la url canónica de la página, es decir, la url
  principal de la página (la mayoria de veces es la misma página). Es buena para SEO. Ej:

  ```html
  <link rel="canonical" href="https://www.example.com" />
  ```

**Node vs Element**:  
Node y NodeList representan cualquier "cosa" del DOM, un elemento html,
texto, un comentario. Puede usarse forEach con NodeList.
Element y HTMLCollection representa un elemento html. No puede usarse
ningun metodo de array con HTMLCollection

- Solo debe haber un h1 por pagina

- hr se deberia usar mas semanticamente que para estilar, éste separa
  dos elementos

- div para agrupar elementos en bloque y span para agrupar elementos en linea.

- Se puede tener mas de una etiqueta header y footer por pagina,
  siempre que tenga sentido

- Si quiero poner la forma en que se cargan las imagenes en el HTML, pongo la
  propiedad `loading="eager"` para las imagenes que ya estan en la vista del
  usuario, y la propiedad `loading="lazy"` para las imagenes que no estan en la
  vista del usuario. El navegador decide cuando cargar las imagenes lazy en base
  a la conexión.

- Las navegaciones de las paginas se hacen con etiquetas a, no con botones,
  un boton es para hacer una accion, un anchor es para la navegacion, se pueden
  estilar los anchor para que parezcan botones.  
  Ademas, nunca se debe poner etiquetas a dentro de botones o viceversa.

- Poner los input semánticos, por ejemplo, si es un input para un email, ponerle
  el atributo `type="email"`, si es un input para un numero, ponerle el atributo
  `type="number"`, etc.

- Atributo `title` dentro de la etiqueta p para que se vea como tooltip.

- El elemento `iframe` sirve para incrustar una pagina web dentro de otra.

- El elemento `canvas` sirve para dibujar.

- `data-*` como atributo de un elemento, normalmente se usa como identificador  
  para después usar ese elemento en el JS, ej:

  ```html
  `<button data-id="button-1"></button>`
  ```

  En el JS:

  ```js
  const button = document.querySelector('[data-id="button-1"]');
  ```

- El atributo `aria` se usa para darle mas informacion a los lectores de
  pantalla, por ejemplo, si quiero que un elemento sea leido como un boton,
  puedo ponerle el atributo `role="button"`

- Cargar una imagen con _preload_, puede ser recomendado para imagenes muy pesadas.  
  `<link rel="preload" href="img/imagen.webp" as="image" type="image/webp" fetchpriority="high">`

- Poner el atributo `fetchpriority="high"` a un elmento le dice al navegador
  que tiene alta prioridad para que se haga su carga, esto se puede usar por ej
  en el LCP (Largest Contentful Paint) para que se cargue lo más rapido posible.

- Poner alto y ancho a las imágenes como atributos de la etiqueta img,
  ayuda a que el navegador sepa el tamaño de la imagen antes de cargarla,
  y asi no se vea el efecto de carga de la imagen y no haya movimiento del  
  layout. Despues se puede usar CSS para formatear mejor la imagen.

- `setCustomValidity` es un metodo de los inputs que permite poner un mensaje
  de error personalizado, por ejemplo, si el input es de tipo email, y el usuario
  pone un texto que no es un email, se puede poner un mensaje de error personalizado.

- Cada vez que se añade una id a un elemento, se crea una propiedad en el objeto
  global window con el nombre de la id y el valor del elemento. Por ejemplo, si
  tengo un elemento con la id "button", se crea la propiedad window.button con el
  valor del elemento. Otro ejemplo, `<dialog id="dialog"></dialog>` y puedo acceder
  a él con `window.dialog.showModal()`.  
  Hay que tener cuidado al usar ids porque por cada id se crea una propiedad y tiene
  un coste de memoria.

---

## Semántica

- main: Contenido principal de una página web. Es recomndable utilizarlo una
  sola vez por página.

- section: Agrupa contenido relacionado en una sección lógica. Es especialmente
  útil para estructurar el contenido de un artículo o de una página web.

- article: Una pieza de contenido independiente en una página web, como un artículo
  o un elemento con información propia.

- header: Representa la cabecera de una sección o de una página web. Puede contener
  elementos como el título, el logo, el menú de navegación, etc.

- footer: Representa el pie de una sección o de una página web. Puede contener
  información como el autor, enlaces relacionados, derechos de autor, etc.

- nav: Menú de navegación de una página web. Puede contener enlaces a otras
  secciones de la página o a páginas externas.

- aside: Contenido relacionado pero que no forma parte del flujo principal de la
  página web. Puede contener enlaces relacionados, anuncios, etc.

- figure: Representa una figura, imagen, gráfica en una página web, con una
  descripción opcional utilizando la etiqueta figcaption.

- fieldset: Agrupa elementos de un formulario relacionados en un conjunto
  visualmente coherente.

---

## Utilidades

- Para cargar diferentes tamaños de imagenes:

  ```html
  <img
    src="image-800w.jpg"
    srcset="images/image-480w.jpg 480w, images/image-800w.jpg 800w"
    sizes="(max-width: 600px) 480px, 800px"
  />
  ```

  otra forma:

  ```html
  <picture>
    <source media="(max-width: 799px)" srcset="perro-480w.jpg" />
    <source media="(min-width: 800px)" srcset="perro-800w.jpg" />
    <img src="perro-800w.jpg" alt="perro" />
  </picture>
  ```

- Cargar diferentes formatos de imagenes, etiqueta picture, dentro poner el source
  con el formato webp y como fallback poner la etiqueta img con la imagen en jpg

  ```html
  <picture>
    <source srcset="perro.webp" type="image/webp" />
    <img src="perro.jpg" alt="perro" />
  </picture>
  ```

- Crear un autocomplete:

  ```html
  <label>
    Elige el mejor framework:
    <input list="frameworks" name="frameworks" />
  </label>
  <datalist id="frameworks">
    <option value="Angular"></option>
    <option value="React"></option>
    <option value="Vue"></option>
    <option value="Svelte"></option>
  </datalist>
  ```

- Crear una lista para seleccionar:

  ```html
  <select>
    <option value="Angular">Angular</option>
    <option value="React">React</option>
    <option value="Vue">Vue</option>
    <option value="Svelte">Svelte</option>
  </select>
  ```

- Puedo cargar un gif de la siguiente manera para ahorrar el peso del gif,
  se pone el **autoplay** con el **muted** (los navegadores no permiten autoplay sino se tiene muted) y
  **loop** para que se repita infinitamente: `<video muted autoplay loop src="rutaVideo" />`

- Cargar un archivo abriendo la camara trasera o delantera del celular:  
  `capture` me dice si abre la camara delantera o trasera y `accept` me dice
  si acepta un video o una foto

  ```html
  <label>
    Video trasero
    <input type="file" capture="environment" accept="video/*" />
  </label>

  <label>
    Foto delantera
    <input type="file" capture="user" accept="image/*" />
  </label>
  ```

- Crear una galeria de imagenes:

  ```html
  <section>
    <img src="perro-1.jpg" alt="perro" />
    <img src="perro-2.jpg" alt="perro" />
    <img src="perro-3.jpg" alt="perro" />
    <img src="perro-4.jpg" alt="perro" />
  </section>
  ```

  ```css
  section {
    display: flex;
    width: 600px;
    height: 400px;
  }
  section img {
    width: 0;
    flex-grow: 1;
    object-fit: cover;
    opacity: 0.8;
    transition: 0.5s ease;
  }
  section img:hover {
    widht: 300px;
    opacity: 1;
    filter: contrast(120%);
  }
  ```

- Crear una modal

  ```html
  <dialog>
    <h1>Esta es una modal</h1>
    <p>El párrafo de la modal</p>
    <button id="cancel">Salir</button>
  </dialog>
  <button id="show">Abrir modal</button>
  ```

  ```js
  const dialog = document.querySelector('dialog');
  const show = document.querySelector('#show');
  const cancel = document.querySelector('#cancel');
  show.addEventListener('click', () => dialog.showModal());
  cancel.addEventListener('click', () => dialog.close());
  ```

  ```css
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }
  ```

- Crear un calendario, con fechas y horas. Filtro de minimo y maximo con bloques de horas:

  ```html
  <label>
    Selecciona fecha para tu reserva:
    <input type="datetime-local" value="2023-03-03T19:00" min="2023-01-01T00:00" max="2023-12-31T23:59" />
  </label>
  ```

- Crear una sección expandible. El atributo `open` hace que la sección se abra
  por defecto:

  ```html
  <details open>
    <summary>Este es el titulo</summary>
    <p>Este es el contenido</p>
  </details>

  <details>
    <summary>Este es el titulo</summary>
    <p>Este es el contenido</p>
  </details>
  ```

- Evitar que el navegador traduzca el texto de la pagina:

  ```html
  <p translate="no">Este texto no se traduce</p>
  ```

- Solo precargar los metadatos del video, hace que de entrada sea mucho más ligero y una vez se le de play cargará el resto.  
  El src del source tiene un # y el tiempo donde queremos que esté el vídeo, este va a servir de poster para el vídeo.

  ```html
  <video preload="metadata" muted loop>
    <source
      src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4#t=10.1"
      type="video/mp4"
    />
  </video>
  ```
