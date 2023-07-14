---
id: 'paginas'
title: 'Páginas'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 12 2022'
heroImage: '/page.svg'
---

## Documentación:

- Documentacion HTML, CSS, Javascript (midu)  
  [developer.mozilla.org](https://developer.mozilla.org/)

- Página de documentación (midu)  
  [devdocs.io](https://devdocs.io/)

- Documentación de varios lenguajes  
  [overapi.com](https://overapi.com/)

---

## Hosting:

- **Github pages**  
  Hosting gratuito para paginas web estaticas (HTML, CSS y JS)  
  La carpeta que debo subir al repositorio es la carpeta docs con mis
  archivos de produccion adentro y esta es la que usa Github pages.  
  Entro al repositorio y doy en settings, pages, en sources
  selecciono la rama main, la carpeta que subí y doy en save. espero
  que este lista la pagina. si realizo algun cambio puede tardar
  varios minutos en verse reflejados.

  - **Github Pages con Vite**:  
    En el archivo `vite.config.js` configuro la base de la pagina y la carpeta de salida
    cuando se hace el build si asi lo deseo:

    ```js
    export default defineConfig({
      base: '/nombre-repositorio/',
      build: {
        outDir: 'docs',
      },
    });
    ```

    Otra forma puede ser:

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

  - **Failed to load resource: the server responded with a status of 404**  
    si tengo el error anterior debo poner lo siguiente en el index.html de produccion:  
    `<base href="/nombre-repositorio/">`  
    O revisar si solo se debe agregar `./` para los links que estan en el index.html de produccion.  
    O ambas cosas.

- **Netlify**  
  Hosting gratuito para paginas web estaticas (HTML, CSS y JS)  
  Simplemente subo la carpeta de produccion que genere

  - error: Si me encuentro con el problema de Page Not Found en mi sitio
    web, debo agregar el archivo netlify.toml a la carpeta que voy a
    subir a produccion, éste lo encuentro en la carpeta de Angular

- **vercel.com (gratis)** => paginas estaticas (HTML, CSS, JS)
- **surge.sh (gratis)** => paginas estaticas (HTML, CSS, JS)
- **digitalocean.com** => gratis par paginas estaticas y tiene plan de pago
  para aplicaciones con backend
- **railway.app (gratis)** => aplicaciones con backend
- **render.com (gratis)** => aplicaciones con backend
- **fly.io (gratis)** => aplicaciones con backend
- **heroku.com (de pago)** => aplicaciones con backend
- **dev.new (gratis)** => despliegue de aplicaciones y bases de datos
- **workers.cloudflare.com (cloudflare pages) (gratis)**
- **Gitlab Pages**
- **Firebase**
- **AWS (es gratis para estudiantes)**
- **Google Cloud**
- **Microsoft Azure**

---

## API:

- API de la NASA  
  [api.nasa.gov](https://api.nasa.gov/)

- Informacion de superheroes de Marvel  
  [developer.marvel.com](https://developer.marvel.com/)

- Gifs  
  [developers.giphy.com](https://developers.giphy.com/)

- Fakestore  
  [fakestoreapi.com](https://fakestoreapi.com/)  
  [fakeapi.platzi.com](https://fakeapi.platzi.com/)

- Cambio de divisas  
  [fixer.io](https://fixer.io/)

- Usuarios, comentarios, fotos, posts  
  [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)

- Noticias  
  [newsapi.org](https://newsapi.org/)

- Informacion del clima  
  [openweathermap.org/api](https://openweathermap.org/api)

- Imagenes  
  [pexels.com/es-es/api](https://www.pexels.com/es-es/api)

- Informacion sobre pokemons  
  [pokeapi.co](https://pokeapi.co/)

- Generar datos aleatorios  
  [random-data-api.com](https://random-data-api.com/)

- Generar usuarios aleatorios  
  [randomuser.me](https://randomuser.me/)

- Usuarios  
  [reqres.in](https://reqres.in/)  
  [dummyapi.io](https://dummyapi.io/)

- Paises  
  [restcountries.com](https://restcountries.com/)

- Comidas  
  [spoonacular.com/food-api](spoonacular.com/food-api)

- Informacion de peliculas  
  [themoviedb.org](https://www.themoviedb.org/)

- Imagenes  
  [unsplash.com/developers](https://unsplash.com/developers)

- Mapas  
  [developers.arcgis.com/javascript/latest](https://developers.arcgis.com/javascript/latest/)

- Pagina con muchas APIs (midu)  
  [rapidapi.com](https://rapidapi.com/)

- Apis publicas  
  [github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

- API para musica  
  [developer.spotify.com/documentation/web-api/](https://developer.spotify.com/documentation/web-api/)

## Páginas frontend:

- Aprender programacion  
  [30secondsofcode.org](https://www.30secondsofcode.org/)  
  [codingame.com/start](https://www.codingame.com/start)  
  [freecodecamp.org](https://www.freecodecamp.org/)

- Aprender Javascript  
  [aprendejavascript.dev](https://aprendejavascript.dev/) (midu)  
  [aprendejavascript.org](https://aprendejavascript.org/)  
  [javascript.info](https://javascript.info/) (midu)

- Retos de programacion  
  [adventjs.dev](https://adventjs.dev/) (midu)  
  [codechef.com](https://www.codechef.com/)  
  [codesignal.com](https://codesignal.com/) (midu)  
  [codewars.com](https://www.codewars.com/)  
  [codewell.cc](https://www.codewell.cc/)  
  [cssbattle.dev](https://cssbattle.dev/)  
  https://devchallenges.io/  
  [exercism.org](https://exercism.org/) (midu)  
  [hackerrank.com](https://www.hackerrank.com/)  
  [leetcode.com](https://leetcode.com/)  
  https://pruebastecnicas.com/ (midu)  
  [retos.dev](https://retos.dev/) (midu)  
  [retosdeprogramacion.com](https://retosdeprogramacion.com/)

- Proyectos Frontend  
  [codewithrandom.com](https://www.codewithrandom.com/)  
  [devchallenges.io](https://devchallenges.io/) (midu)  
  [frontendmentor.io](https://www.frontendmentor.io/) (midu)  
  [frontendpractice.com](https://www.frontendpractice.com/)

- Proyectos open source para contribuir  
  [firsttimersonly.com](https://www.firsttimersonly.com/)

- React  
  [reactjs.wiki](https://www.reactjs.wiki/)

- Practicar css  
  [stylestage.dev](https://stylestage.dev/)

- Cheat sheets de distintos programas  
  [cheatography.com](https://cheatography.com/)
- Todo sobre entrevistas  
  [techinterviewhandbook.org](https://www.techinterviewhandbook.org/) (midu)

- Otros  
  [dailyui.co](https://www.dailyui.co/)  
  [dev.to](https://dev.to/)  
  [geeksforgeeks.org](https://www.geeksforgeeks.org/)  
  [hackerearth.com](https://www.hackerearth.com/)  
  [hiredintech.com](https://www.hiredintech.com/)  
  [html5up.net](https://html5up.net/)  
  [interviewbit.com](https://www.interviewbit.com/)  
  [interviewcake.com](https://www.interviewcake.com/)  
  [javascript30.com](https://javascript30.com/)  
  [onepagelove.com](https://onepagelove.com/)  
  [simpleprogrammer.com](https://simpleprogrammer.com/)  
  [teamtreehouse.com](https://teamtreehouse.com/)  
  [theodinproject.com](https://www.theodinproject.com/)  
  [topcoder.com](https://www.topcoder.com/)  
  [webcode.tools](https://webcode.tools/)

## Repositorios Github:

- Aprender Javascript  
  [30-Days-Of-JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)

- Aprender React  
  [30-Days-Of-React](https://github.com/Asabeneh/30-Days-Of-React)  
  [preguntas-entrevista-react](https://github.com/midudev/preguntas-entrevista-react)  
  [reactjs-interview-questions](https://github.com/sudheerj/reactjs-interview-questions)

- [30-seconds-of-interviews](https://github.com/30-seconds/30-seconds-of-interviews)
- Algoritmos y estructuras de datos en Javascript  
  [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

- Ideas de proyectos  
  [app-ideas](https://github.com/florinpop17/app-ideas)

- preguntas y soluciones de distintos lenguajes de programacion (midu):  
  [awesome-interview-questions](https://github.com/DopplerHQ/awesome-interview-questions)

- [awesome-javascript-interviews](https://github.com/rohan-paul/Awesome-JavaScript-Interviews)
- plan de estudios para pasar cualquier proceso de entrevista (midu):  
  [codung-interview-university](https://github.com/jwasham/coding-interview-university)

- Clean code para Javascript  
  [clean-code-Javascript](https://github.com/ryanmcdermott/clean-code-javascript)

- Recursos para desarrolladores  
  [design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers)

- [developer-roadmaps](https://github.com/kamranahmedse/developer-roadmap)
- Libros gratis de programacion  
  [free-programming-books](https://github.com/EbookFoundation/free-programming-books)

- Notas para frontend  
  [frontendCollection](https://github.com/cheatsheet1999/FrontEndCollection)

- Preparacion para entrevista frontend  
  [front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook)

- libreria de aprendizaje de programacion (midu):  
  [awesome-learning](https://github.com/afontcu/awesome-learning)

- Proyectos javascript (midu)  
  [50projects50days](https://github.com/bradtraversy/50projects50days)  
  [vanillawebprojects](https://github.com/bradtraversy/vanillawebprojects)

- repositorio que te enseña a construir cualquier cosa (midu):  
  [build-your-own-x](https://github.com/codecrafters-io/build-your-own-x)

- Conceptos que deberias saber como programador (midu):  
  [every-programmer-should-know](https://github.com/mtdvio/every-programmer-should-know)

- plan de estudios para pasar cualquier proceso de entrevista (midu):  
  [coding-interview-university](https://github.com/jwasham/coding-interview-university)

- libros gratuitos de programacion (midu):  
  [free-programming-books](https://github.com/EbookFoundation/free-programming-books)

- ideas para portafolios  
  [github.com/Evavic44/portfolio-ideas](https://github.com/Evavic44/portfolio-ideas)

- guia de pruebas de javascript (midu):  
  [javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

- roadmap para cualquier tecnologia (midu):  
  [developer-roadmap](https://github.com/kamranahmedse/developer-roadmap)

- curso de frontend de microsoft (midu):  
  [Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)

- recursos (midu):  
  [frontend-developer-resources](https://github.com/mrcodedev/frontend-developer-resources)

- algoritmos y estructuras de datos (midu):  
  [TheAlgorithms](https://github.com/TheAlgorithms)

- algoritmos y estructuras de datos en Javascript (midu):  
  [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/blob/master/README.es-ES.md)

- Patrones de diseño  
  [awesome-design-patterns](https://github.com/DovAmir/awesome-design-patterns)

- proyectos y tutoriales para javascript (midu):  
  [JavaScript30](https://github.com/wesbos/JavaScript30)

- Un clon de medium fullstack para ver un ejemplo real de buenas practicas (midu):  
  [realworld](https://github.com/gothinkster/realworld)

- como funciona la web (midu):  
  [how-web-works](https://github.com/vasanthk/how-web-works)

- Templates HTML  
  [html5-boilerplate](https://github.com/h5bp/html5-boilerplate)

- Preguntas de Javascript y su respuesta  
  [javascript-questions](https://github.com/lydiahallie/javascript-questions)

- [nodejs-interview-questions](https://github.com/learning-zone/nodejs-interview-questions)
- [node.js best practices](https://github.com/goldbergyoni/nodebestpractices)
- aprender a programar con proyectos (midu):  
  [project-based-learning](https://github.com/practical-tutorials/project-based-learning)

- [public-apis](https://github.com/public-apis/public-apis)
- Explica como funciona la web  
  [spellbook-of-modern-webdev](https://github.com/dexteryy/spellbook-of-modern-webdev)

- Explica el diseño de sistemas  
  [system-design-primer](https://github.com/donnemartin/system-design-primer)

- preparar para una entrevista (midu)  
  [tech-interview-handbook](https://github.com/yangshun/tech-interview-handbook)

- [you-dont-know-js](https://github.com/getify/You-Dont-Know-JS)
- Explica como hacer todo sin JQuery  
  [you-dont-need-jquery](https://github.com/camsong/You-Dont-Need-jQuery)

- Buenas practicas de testing  
  [github.com/goldbergyoni/javascript-testing-best-practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

- [gist.github.com/paulirish/5d52fb081b3570c81e3a](https://gist.github.com/paulirish/5d52fb081b3570c81e3a) (midu):  
  explica el problema que hay con las API HTML que son sincronas como
  element.clientWidth y element.clientHeight y comopuede ser un problema
  segun el evento en el que usen porq se estan recalculando muchas veces
  de manera sincrona.  
  una mejor alternativa a element.clientWidth y element.clientHeight seria
  element.getBoundingClientRect() que viene con mas informacion, entre
  ellas el width y el height

- (GIA): [Buenas practicas y la estructura de un proyecto de angular](https://github.com/Wolox/tech-guides/blob/master/frontend/angular/style-guide.md)

---

## Librerías JAVASCRIPT:

Para buscar cualquier libreria con vanilla javascript:  
[vanillalist.top](https://vanillalist.top/)

- Animaciones:  
  [animejs.com](https://animejs.com/)  
  [greensock.com/gsap](https://greensock.com/gsap/)  
  [theatrejs.com](https://www.theatrejs.com/)

- Anotaciones animadas:  
  [roughnotation.com](https://roughnotation.com/)

- Efectos parallex 3d:  
  [atroposjs.com](https://atroposjs.com/)

- Sliders:  
  [embla-carousel.com](https://www.embla-carousel.com/)  
  [swiperjs.com](https://swiperjs.com/)  
  [kenwheeler.github.io/slick](https://kenwheeler.github.io/slick/)

- Libreria para generar informacion falsa  
  [fakerjs.dev](https://fakerjs.dev/)

- Poner unidades de la mejor manera segun el tamaño de un archivo  
  [filesizejs.com](https://filesizejs.com/)

- Tooltips  
  [floating-ui.com](https://floating-ui.com/)

- Funciones de JS  
  [lodash.com](https://lodash.com/)  
  [github.com/angus-c/just](https://github.com/angus-c/just)  
  [underscore.js](https://underscorejs.org/)

- Funciones matemáticas:  
  [mathjs.org](https://mathjs.org/)

- Manejar fechas y tiempos (no usar momentjs)  
  [Luxon](https://moment.github.io/luxon/#/)

- Efectos de confeti y demas  
  [party.js.org](https://party.js.org/)  
  [kirilv.com/canvas-confetti](https://www.kirilv.com/canvas-confetti/)

- Manejar estados de la aplicacion  
  [superstate.dev](https://superstate.dev/)

- Dialogos  
  [sweetalert2.github.io](https://sweetalert2.github.io/)

- Validar formularios de forma declarativa  
  [vestjs.dev](https://vestjs.dev/)

- Loaders  
  [spin.js.org](https://spin.js.org/)  
  [whirl.netlify.app](https://whirl.netlify.app/)

- Poner formato a los inputs  
  [nosir.github.io/cleave.js](https://nosir.github.io/cleave.js/)

- Notificaciones  
  [apvarun.github.io/toastify-js](https://apvarun.github.io/toastify-js/#)

- Libreria para crear un buscador:  
  [fusejs.io](https://fusejs.io/)

- Fondos personalizados (particulas)  
  [vincentgarreau.com/particles.js](https://vincentgarreau.com/particles.js/)

- Gráficas (charts)  
  https://d3-graph-gallery.com/  

- Mapas:  
  [leafletjs.com](https://leafletjs.com/)

- Fullscreen scrolling websites:
  [alvarotrigo.com/fullPage](https://alvarotrigo.com/fullPage/)

- Add touch gestures to your webapp:  
  [hammerjs.github.io](https://hammerjs.github.io/)

- Convertir de Markdown a HTML y viceversa:  
  [github.com/showdownjs/showdown](https://github.com/showdownjs/showdown)

- Fetching de datos con React:  
  [tanstack.com/query/latest](https://tanstack.com/query/latest)

- Regex:  
  [regexp.dev](https://regexp.dev/)

- Validaciones:  
  [zod.dev](https://zod.dev/)

- Generar IDs:  
  [uuid npm package](https://www.npmjs.com/package/uuid)

- Dropzone (subir archivos):
  https://pqina.nl/filepond/?ref=pqina

## Otras utilidades JAVASCRIPT:

- Javascript Minifier => pagina para minificar archivos JS

---

## Frameworks CSS:

- Minimal css framework  
  [picocss.com](https://picocss.com/)

- Frameworks classless, que estilan un poco la página, tienen dark mode y son responsive  
  pero no tienen clases predefinidas. Permite que sin poner nosotros los estilos, ya se  
  vea bien la página.  
  [watercss.kognise.dev](https://watercss.kognise.dev/)  
  [boltcss.com](https://boltcss.com/)  
  [simplecss.org](https://simplecss.org/)

## Librerías CSS:

- Animaciones  
  [animate.style](https://animate.style/)  
  [animatiss](https://xsgames.co/animatiss/)  
  [animxyz.com](https://animxyz.com/)  
  [keyframes.app/animate](https://keyframes.app/animate)  
  [sarthology.github.io/Animatopy/](https://sarthology.github.io/Animatopy/)  
  [all-animation.github.io](https://all-animation.github.io/)  
  https://www.tailwindcss-animated.com/ (Animaciones con Tailwind)

- Graficos  
  [chartscss.org](https://chartscss.org/)

- Varias utilidades y componentes  
  [tachyons.io](https://tachyons.io/)

- Elementos UI  
  [uiverse.io](https://uiverse.io/)

- Componentes UI  
  [storybook.js.org](https://storybook.js.org/)

- Componentes Tailwind  
  [headlessui.com](https://headlessui.com/)  
  [tailwindui.com](https://tailwindui.com/)  
  [flowbite.com ](https://flowbite.com/)  
  [hyperui.dev](https://www.hyperui.dev/)

## Generadores CSS:

- [fancy-border-radius](https://9elements.github.io/fancy-border-radius/)
- Formas  
  [bennettfeely.com/clippy](https://bennettfeely.com/clippy/)

- Distintos Elementos  
  [uiverse.io](https://uiverse.io/)

- [cssgrid-generator.netlify.app](https://cssgrid-generator.netlify.app/)
- Gradientes  
  [csshero.org/mesher ](https://csshero.org/mesher/)  
  [designgradients.com](https://www.designgradients.com/)  
  [larsenwork.com/easing-gradients](https://larsenwork.com/easing-gradients/)

- [csslayout.io](https://csslayout.io/)

- Hovers  
  [ianlunn.github.io/Hover/](http://ianlunn.github.io/Hover/)
- Loaders  
  [cssloaders.github.io](https://cssloaders.github.io/)  
  [getwaves.io](https://getwaves.io/)  
  [loading.io](https://loading.io/)

- Sombras  
  [joshwcomeau.com/shadow-palette ](https://www.joshwcomeau.com/shadow-palette/)  
  [shadows.brumm.af](https://shadows.brumm.af/)

- Transiciones CSS  
  https://www.transition.style/

- [neumorphism.io](https://neumorphism.io/#e0e0e0)
- Diferentes utilidades  
  [omatsuri.app](https://omatsuri.app/)  
  [purecss.io](https://purecss.io/)  
  [keyframes.app](https://keyframes.app/)

## Otras utilidades CSS:

- Trucos para css  
  [css-tricks.com](https://css-tricks.com/)

- Selectores en css  
  [css-speedrun.netlify.app](https://css-speedrun.netlify.app/)

- Ejemplos visuales de todas las propiedades CSS (midu)  
  [cssreference.io](https://cssreference.io/)

- Reset CSS  
  [joshwcomeau.com/css/custom-css-reset](https://www.joshwcomeau.com/css/custom-css-reset/)

---

## Imágenes libres:

- [burst.shopify.com](https://burst.shopify.com/)
- [cleanpng.com](https://www.cleanpng.com/)
- [favpng.com](https://favpng.com/)
- [freeimages.com](https://www.freeimages.com/)
- [freepik.com](https://www.freepik.com/)
- [kaboompics.com](https://kaboompics.com/)
- [pexels.com](https://www.pexels.com/es-es/)
- [pixabay.com](https://pixabay.com/)
- [pngimg.com](https://pngimg.com/)
- [pngpix.com](https://www.pngpix.com/)
- [pngtree.com](https://pngtree.com/)
- [pngwing.com](https://www.pngwing.com/)
- [purepng.com](https://purepng.com/)
- [stickpng.com](https://stickpng.com/)
- [stockvault.com](https://www.stockvault.com/)
- [stockvault.net](https://www.stockvault.net/)
- [unsplash.com](https://unsplash.com/es)
- [vecteezy.com](https://www.vecteezy.com/)

## Iconos:

- [3dicons.com](https://www.3dicons.com/) (midu)
- [boxicons.com](https://boxicons.com/) (midu)
- [css.gg](https://css.gg/) (midu)
- [devicon.dev](https://devicon.dev/)
- [feathericons.com](https://feathericons.com/) (midu)
- [flaticon.com](https://www.flaticon.com/) (midu)
- [fontawesome.com](https://fontawesome.com/)
- [fonts.google.com/icons](https://fonts.google.com/icons) (midu)
- [heroicons.com](https://heroicons.com/) (midu)
- [iconer.app](https://iconer.app/)
- [icones.netlify.app](https://icones.netlify.app/) (midu)
- [iconfinder.com](https://www.iconfinder.com/)
- [iconhub.io](https://iconhub.io/)
- [iconmonstr.com](https://iconmonstr.com/) (midu)
- [icons8.com](https://icons8.com/) (midu)
- [iconsax.io](https://iconsax.io/)
- [iconoir.com](https://iconoir.com/) (midu)
- [iconscout.com](https://iconscout.com/) (midu)
- [icons.radix-ui.com](https://icons.radix-ui.com/)
- [lineicons.com](https://lineicons.com/) (midu)
- [lordicon.com](https://lordicon.com/) (iconos animados)
- [manypixels.co/free-icons](https://www.manypixels.co/free-icons)
- [simpleicons.org](https://simpleicons.org/) (midu)
- [svgl.vercel.app](https://svgl.vercel.app/) => logos de distintas tecnologias
- [svgrepo.com](https://www.svgrepo.com/) (midu)
- [tablericons.com](https://tablericons.com/) (midu)
- [thenounproject.com](https://thenounproject.com/)
- [useanimations.com](https://useanimations.com/) (iconos animados)

## Ilustraciones:

- [blush.design](https://blush.design/es)
- [craftwork.design/freebies](https://craftwork.design/freebies/)
- [drawkit.com](https://drawkit.com/)
- [humaaans.com](https://www.humaaans.com/)
- [icons8.com/illustrations](https://icons8.com/illustrations)
- [manypixels.co/gallery](https://www.manypixels.co/gallery)
- [opendoodles.com](https://www.opendoodles.com/)
- [openpeeps.com](https://www.openpeeps.com/)
- [peeps.ui8.net](https://peeps.ui8.net/)
- [sapiens.ui8.net](https://sapiens.ui8.net/6f3c3c2)
- [uistore.design/categories/illustrations](https://www.uistore.design/categories/illustrations/)
- [undraw.co](https://undraw.co/)

## Colores:

- [color.adobe.com](https://color.adobe.com/es/create/color-wheel)
- [colorhunt.co](https://colorhunt.co/)
- [colors.muz.li](https://colors.muz.li/)
- [colorsandfonts.com](https://www.colorsandfonts.com/)
- [coolors.co](https://coolors.co/)
- [flatuicolors.com](https://flatuicolors.com/)
- [happyhues.co](https://www.happyhues.co/)
- [hue.tools](https://hue.tools/?format=hex) (midu)
- [hypercolor.dev](https://hypercolor.dev/): Gradientes de colores para usar con tailwind y sus clases
- [instagram.com/interface.colour](https://www.instagram.com/interface.colour/)
- [khroma.co](http://khroma.co/)
- [mycolor.space](https://mycolor.space/)
- [paletton.com](https://paletton.com/)
- [UIgradientes](https://uigradients.com/) (degradados)

## Fuentes:

- [cufonfonts.com](https://www.cufonfonts.com/)
- [dafont.com/es](https://www.dafont.com/es/)
- [fontbundles.net](https://fontbundles.net/)
- [fontfabric.com](https://www.fontfabric.com/)
- [fonts.google.com](https://fonts.google.com/)
- [fontshare.com](https://www.fontshare.com/)
- [fontspace.com](https://www.fontspace.com/)
- [fontsquirrel.com](https://www.fontsquirrel.com/)
- [urbanfonts.com](https://www.urbanfonts.com/)
- [fontsquirrel.com](https://www.fontsquirrel.com/tools/webfont-generator)  
  Generador de fuentes web, subo la fuente en un formato y la convierte a otro.

## Mockups:

- [carbon.now.sh](https://carbon.now.sh/) => Mockups de codigo
- [freepik.com](https://www.freepik.com/)
- [ls-graphics](https://www.ls.graphics/)
- [mockups-design.com](https://mockups-design.com/)
- [mockupworld.co](https://www.mockupworld.co/)
- [pixeden.com](https://www.pixeden.com/)
- [preview.app](https://preview.app/login) => Mockups con diferentes dispositivos
- [unblast.com](https://unblast.com/)

## Emojis:

- [openmoji.org](https://openmoji.org/)
- [github.com/microsoft/fluentui-emoji](https://github.com/microsoft/fluentui-emoji)

## Optimizador de imágenes:

- [squoosh.app](https://squoosh.app/) (midu)  
  Ademas se tienen mas opciones como comprimirlo, quitarle atributos y demas.
- [Tinypng](https://tinypng.com/)
- [Shortpixel](https://shortpixel.com/)
- [svgomg](https://jakearchibald.github.io/svgomg/) (midu)  
  se pega el svg y en la parte de abajo a la derecha se copia el código HTML del svg.

## Otras utilidades:

- Colección de recursos (Iconos, ilustraciones, herramientas, diseños)  
  https://uigoodies.com/
  https://www.toools.design/

- Imagenes para fondos  
  [app.haikei.app](https://app.haikei.app/)  
  [tabbied.com](https://tabbied.com/)

- Editor de fotos  
  [pixlr.com](https://pixlr.com/)

- Diseños de paginas web  
  [awwwards.com](https://www.awwwards.com/)

- Diseños  
  [dribbble.com](https://dribbble.com/)  
  [behance.net](https://www.behance.net/)  
  https://collectui.com/

- Patrones de diseño  
  [ui-patterns.com](https://ui-patterns.com/)

- Atajos para los programas de diseño  
  [shortcuts.design](https://shortcuts.design/)

- Tips de diseño UI  
  https://www.adhamdannaway.com/blog/ui-design/16-ui-design-rules

---

## Trabajo

- [angel.co](https://angel.co/) => trabajo remoto

- [arc.dev](https://arc.dev/) (midu) => trabajo remoto

- [getmanfred.com](https://www.getmanfred.com/) (midu) => trabajo remoto y se puede crear hoja de vida

- [getonbrd.com](https://www.getonbrd.com/)

- [lemon.io](https://lemon.io/) => trabajo remoto

- [remoteok.com](https://remoteok.com/) => trabajo remoto

- [showwcase.com](https://www.showwcase.com/) => trabajo remoto

- [talenteca.com](https://www.talenteca.com/)

- [linkedin.com](https://www.linkedin.com/)

- [indeed.com](https://co.indeed.com/)

- [co.computrabajo.com](https://co.computrabajo.com/)

- [resume.io](https://resume.io/) => crear la hoja de vida
- [between.tech](https://between.tech/) => empresa de España que ofrece vacantes

- [Guia para crear hoja de vida](https://delacruzdev.notion.site/Apply-to-tech-companies-with-this-CV-template-fd977e7e715d4445a6ba1878a500e327)

---

## Otros

- [caniuse.com](https://caniuse.com/) (midu)  
  para saber si algo es soportado por los navegadores

- [node.green](https://node.green/) (midu)  
  para saber si algo es soportado por node

- [bundlephobia.com](https://bundlephobia.com/) (midu)  
  para saber cuanto pesa un paquete en el navegador, en el lado del usuario,
  muestra lo que ocupa cuando un usuario lo descarga para ver la web y cuano
  tiempo tarda en descargarse en el navegador, por ej Vite no lo muestra bundlephobia
  porq no se utliza en el lado del cliente, en cambio packagephobia si lo muestra

- [packagephobia.com](https://packagephobia.com/) (midu)  
  para saber cuanto pesa un paquete al instalarlo,
  es de lo que tu harias el npm install

- [gradejs.com](https://gradejs.com/) (midu)  
  Ver las dependencias que usa una pagina web

- [quicktype.io](https://quicktype.io/)  
  Crear interfaces, metodos y demas a partir de un json en cualquier lenguaje.  
  Pego el json en la parte izquierda, en la parte de arriba pongo el
  nombre, el source type es json, en la parte derecha en options,
  selecciono typescript, activo Interaces only y Verify JSON.parse

- [transform.tools](https://transform.tools/)  
  Para hacer transformaciones de cualquier tipo.  
  Tambien incluye una transformacion que permite crear una interfaz
  a partir de un json como quicktype.io

- [gitexplorer.com](https://gitexplorer.com/)  
  cheatsheet para GIT

- Bases de datos  
  [mongodb.com/atlas/database](https://www.mongodb.com/atlas/database) (midu)  
  https://jsonbin.io/ para guardar jsons.

- [lucia-auth.vercel.app](https://lucia-auth.vercel.app/) (midu)  
  Servicio de Autenticacion

- [ngrok.com](https://ngrok.com/) (midu)  
  localhost accesible desde Internet

- [checklyhq.com](https://www.checklyhq.com/) (midu)  
  Monitoriza tus webs y APIs

- [responsively.app](https://responsively.app/) (midu)  
  probar diseño responsive

- [mobile friendly test](https://search.google.com/test/mobile-friendly)  
  comprobar compatibilidad con responsive

- Analizar la velocidad de la pagina  
  [Page speed insights](https://pagespeed.web.dev/)  
  [Pingdom](https://tools.pingdom.com/)  
  [GTMetrix](https://gtmetrix.com/)

- [regexr.com](https://regexr.com/)  
  expresiones regulares para validaciones

- [autoregex.xyz](https://www.autoregex.xyz/)  
  Toma las palabras y las convierte a regex

- [regex101.com](https://regex101.com/)  
  Probar expresiones regulares

- [pravatar.cc](https://pravatar.cc/)  
  para obtener una imagen de perfil aleatoria

- [unavatar.io](https://unavatar.io/)  
  Consigue la imagen desde varios proveedores, se podria poner como src de la etiqueta img, por ej:  
  `<img src="https://unavatar.io/github/midudev"/>`

- [downforeveryoneorjustme.com](https://downforeveryoneorjustme.com/)  
  para saber si una pagina esta disponible

- [tinywow.com](https://tinywow.com/)  
  resolver cualquier problema con un archivo

- [npm trend](https://npmtrends.com/)  
  ver tendencias

- [grep.app](https://grep.app/)  
  buscador de repositorios de Github

- [dropzone.dev](https://www.dropzone.dev/)  
  Subir archivos arrastrando y soltando. Hay un componente de React
  que se llama Dropzone

- [devhints.io](https://devhints.io/)  
  Cheatsheet de varias tecnologias (midu)
- [qrcode-monkey.com](https://www.qrcode-monkey.com/)  
  generador de codigo QR

- [10minutemail.com](https://10minutemail.com/)  
  crear un email por 10 minutos

- [excalidraw.com](https://excalidraw.com/)  
  permite crear dibujos y podemos hacer diagramas o lo que queramos

- [epochconverter.com](https://www.epochconverter.com/)  
  Convierte una fecha a timestamp y viceversa.

- [haveibeenpwned.com](https://haveibeenpwned.com/)  
  comprobar si se ha filtrado mi informacion

- [embed.im/snow](https://embed.im/snow/)  
  Poner efecto de nieve a la pagina

- https://imagekit.io/
  Subir y guardar imagenes y videos en la nube, se pueden optimizar y
  transformar para optimizarlas. Se puede poner el src de la imagen
  apuntando a este servicio para cargarla optimizada desde aqui.

- Patrones de diseño en Javascript.
  https://www.patterns.dev/  
  Refactoring gurú.

- https://jsonbin.io/
  Puedes tener una API y el archivo json como base de datos

- https://mui.com/
  Componentes basados en el diseño de material

- Curso FullStack  
  https://fullstackopen.com/es/

---

## Libros de programación

- Impacient programmers (Javascript para programadores impacientes)
- JavaScript: The Good Parts
- Elocuent Javascript
- You Don't Know Javascript

## Libros que ayudan a subir el nivel de la programación pero que no son de programación (midu):

- Como ganar amigos e influir sobre las personas - Dale Carnegie
- El arte de presentar - Gonzalo Alvarez Marañon
- Running lean - Eric Ries
- Radical candor - KimScott
- El metodo Ikigai - Hector Garcia
- English is not easy - Luci Gutierrez
- Good to great - Jim Collins
