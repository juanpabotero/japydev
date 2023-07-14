---
id: 'rendimiento-web'
title: 'Rendimiento Web'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 10 2022'
heroImage: '/rendimiento-web.svg'
---

## Conceptos

- **TTFB (time to first byte)**: mide el tiempo desde que el navegador
  hace la peticion de la pagina hasta que el primer byte es recibido.  
  <600ms

- **FCP (First Contentful Paint)**: Señala el tiempo que ha tardado en renderizar
  cualquier texto o imagen (incluido fondos). Le dice al usuario si realmente la
  web funciona y pueda empezar a consumir la web.  
  <1.8s

- **LCP (Largest Contenful Paint)**: El tiempo que tarda en renderizarse la pieza
  de contenido mas grande que esta en el viewport. Es una de las tres Web Vitals
  de Google, visualmente impacta mucho al usuario.  
  <2.5s

- **SI (Speed Index)**: Calcula como de rapido el contenido visual, se ha
  renderizado progresivamente en el viewport. No es lo mismo que una pagina este
  en blanco 3 segundos y se muestre todo de golpe, a hacerlo progresivamente.
  Se percibe distinto.  
  <2.5s

- **FID (First Input Delay)**: Mide el tiempo que tarde en responder la interfaz
  a la primera interaccion del usuario. Es la Web Vitals de interactividad.  
  <100ms

- **TBT (Total Blocking Time)**: Suma la duracion de la tareas largas (mas de 50ms)
  de JS que han bloqueado el hilo principal despues del FCP. Cuanto mas tiempo esta
  bloqueado el hilo, menos usable es la pagina.  
  <200ms

- **mFID (Max Potential First Input Delay)**: Mide el maximo FID posible teniendo
  en cuenta el tiempo que el hilo principal esta bloqueado. Interesante para detectar
  en pruebas posibles valores del FID.  
  <130ms

- **CLS (Cumulative Layout Shift)**: Mide los saltos que ha dado el layout de tu pagina
  mientras cargaba. La Web Vital de estabilidad visual. Suele pasar con imagenes
  y banners de publicidad.  
  <0.1s

- **TTI (Time to Interactive)**: El tiempo que tarde la pagina en haber mostrado todo
  el contenido util, los eventos de los elementos mas visibles han sido registrados y
  la pagina responde a interacciones en 50ms. Inestable, mejor mirar el TBT.  
  <3.8s

## Optimizar el rendimiento

- **Cargar solo el JavaScript y CSS necesario**: Se puede usar la pestaña de cobertura
  en las devTools del navegador. Te dice el % de uso de cada archivo.

- **Carga diferida de dependencias**: Utilizar imports dinámicos para cargar solo lo que
  se necesita en cada momento.  
  Si solo se necesita la librería tras la interacción del usuario, se puede cargar así:

  ```js
  const button = document.getElementById('congrats-button');
  button.addEventListener('click', () => {
    // import dinamico de la libreria
    // solo se carga cuando el usuario hace click en el boton
    import('canvas-confetti').then(({ default: confetti }) => {
      confetti({
        colors: ['#ff0000', '#00ff00', '#0000ff'],
      });
    });
  });
  ```

- **Optimizar las imágenes**:

  - .webp siempre que se pueda
  - Imágenes responsive y cargar segun el dispositivo
  - Usar SVG para iconos e imagenes vectoriales
  - Evitar PNG siempre que se pueda

- **Usar la plataforma web**: Evitar usar dependencias innecesarias, usar las APIs
  nativas del navegador.  
  Ejemplo:

  ```js
  // En vez de usar una libreria para detectar si el usuario esta en un dispositivo movil
  // Usar la API nativa del navegador
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  ```

- **Favorecer CSS en vez de JS**

- **Carga diferida de imágenes**: Usar el atributo `loading="lazy"` en las imágenes
  que no se ven en el viewport.  
  Ejemplo:

  ```html
  <img src="image.png" alt="image" loading="lazy" width="200" height="200" />
  ```

- **Cuantas menos fuentes, mejor**: Usar el minimo de fuentes posibles y siempre en
  formato woff2.  
  No usar Google fonts directamente, lo mejor es hospedar las fuentes en tu sitio web
  (descargarlas, dejarlas en tu repositorio y usarlas desde allí).

- **Ordenar la etiqueta head**: Ademas de precargar scripts y recursos, el orden de lo
  que se carga es importante.

## Ver rendimiento de una página

En las devTools del navegador, en cobertura, miro el código que no se usa y reviso en los  
archivos que es lo que no se usa.  
En red, filtro por imágenes y veo si no hay imágenes optimizadas, también puedo ver otros
recursos como el JS o el CSS.  
En performance insight, veo como cargan los recursos.
