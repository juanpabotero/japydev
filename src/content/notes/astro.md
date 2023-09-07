---
id: 'astro'
title: 'Astro'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/astro.svg'
---

## Conceptos

Astro es un framework para construir sitios web modernos con JavaScript, HTML y CSS.
Se puede usar cualquier marco de JavaScript, como React, Vue, Svelte, Preact, etc.
No carga Javascript por defecto.  
El Javascript va entre ---, ej:

```javascript
---
console.log('Hello World');
---
```

Los componentes se deben nombrar siempre con la primera letra en mayuscula
e importar de la misma manera para diferenciarlos de los elementos HTML.

Los estilos van dentro de la etiqueta `style` del componente.  
Los estilos tienen scoope, es decir, son especificos para ese componente.  
También se pueden usar estilos globales, usando el atributo `is:global` en el tag `style`, ej:

```html
<style is:global>
  h1 {
    color: #fff;
  }
</style>
```

Las Props de los componentes se pueden extraer desde el objeto global **Astro**
y se puede definir una interfaz para estas con el nombre de **Props**:

```typescript
interface Props {
  title: string;
  body: string;
  href: string;
}

const { href, title, body } = Astro.props;
```

Si pongo un `console.log` en el componente, no se va a ver en la consola del navegador,
se ve en la terminal porque Astro no ejecuta javascript en la parte del cliente, lo hace
en el servidor o en tiempo de compilación.

Las iteracciones como las funciones **map**, **filter**, etc, que se hacen en el cuerpo
del componente, no necesitan de una propiedad **key**, como pasa en JSX, porque Astro
las agrega por defecto.

El `<slot />` en los componentes, es un elemento que se usa para renderizar el contenido
que envuelve ese componente, seria como el children, ej:

Componente Card:

```html
<article>
  <slot />
</article>
```

Para usarlo:

```html
<Card>
  <h1>Titulo</h1>
  <p>Contenido</p>
</Card>
```

Se pueden usar slots con nombre, ej:

Componente Card:

```html
<article>
  <slot name="title" />
  <slot name="body" />
</article>
```

Para usarlo:

```html
<Card>
  <h1 slot="title">Titulo</h1>
  <p slot="body">Contenido</p>
</Card>
```

Se puede poner contenido por defecto en el slot, en caso que no se pase nada
para ese slot, ej:

Componente Card:

```html
<article>
  <slot name="before" />
  <slot>Contenido por defecto</slot>
  <slot name="after" />
</article>
```

Para usarlo:

```html
<Card>
  <h1 slot="before">Titulo</h1>
  <p slot="after">Contenido</p>
</Card>
```

En los elementos hay una propiedad llamada `class:list` que se usa para agregar
clases como una lista y permite agregar clases condicionales de una manera más
declarativa, en caso que la condición sea true, la clase se va a aplicar, ej:

```astro
<div class:list={[
    "text-xs font-bold text-white",
    {
      "bg-green-500 text-green-900": success,
      "bg-red-500 text-red-900": !success
    }
  ]}
>
  <p>Contenido</p>
</div>
```

Astro no carga javascript por defecto, si hay un componente que necesita javascript
se debe poner el atributo `client:visible`, ej:

```html
<Counter client:visible />
```

Otro atributo que se puede poner es `transition:persist`, que permite que el componente
no se vuelva a renderizar cuando cambia la ruta, persiste su estado entre páginas, ej:

```html
<Counter transition:persist />
```

Las páginas se crean dentro de la carpeta `src/pages` donde cada archivo es una página,
e `index.astro` es la página por defecto. También se pueden crear carpetas para agruparlas.
El nombre de la carpeta se usa como prefijo en la url, ej:  
`src/pages/blog/index.astro` -> `/blog`  
`src/pages/blog/astro.astro` -> `/blog/astro`.

Para usar un layout en los archivos markdown se debe usar el atributo `layout` en el frontmatter, ej:

```yaml
---
layout: 'layouts/post.astro'
---
```
