---
id: 'vscode'
title: 'Visual Studio Code'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/vscode.svg'
---

## Atajos

### Navegacion

- F5  
  ejecutar el debug

- ctrl + shift + p ò F1  
  abrir paleta de comandos

- ctrl + p  
  ir al archivo

  - agrego > para que funcione como paleta de comandos
  - agrego @ para que me muestre las definiciones de las variable,
    clases, metodos, etc que estan en el archivo
  - agrego : para ir a la linea que indique

- ctrl + ,  
  abrir settings

- ctrl + n  
  Nuevo archivo

- ctrl + o  
  Abrir archivo

- ctrl + g  
  ir a la linea

- ctrl + tab  
  mover entre archivos abiertos

- ctrl + b  
  abrir o cerrar panel izquierdo

- ctrl + shift + e  
  cambiar el foco entre el explorador y el editor

- ctrl + ñ  
  abrir terminal

- ctrl + shift + m  
  abrir el panel de problemas

- ctrl + w  
  cerrar pestaña actual

- ctrl + k, ctrl + w  
  cerrar todas las pestañas

- ctrl + shift + T  
  reabrir la ultima pestaña cerrada

- ctrl + s  
  guardar el archivo

- ctrl + k, s  
  guardar todo

- ctrl + shift + n  
  abrir nueva ventana

- ctrl + k, ctrl + s  
  mostar shortcuts

- ctrl + k, ctrl + t  
  mostrar los temas

- ctrl + numero  
  mover entre pestañas "mayores"

### Editor

- ctrl + a  
  seleccionar todo

- ctrl + }  
  comentar linea donde esta el cursor o si tengo una seleccion

- shift + alt + a  
  crear comentario a partir de donde esta el cursor o de la seleccion

- ctrl + f  
  buscar en el archivo

- ctrl + shift + f  
  buscar en todos los archivos del proyecto

- ctrl + h  
  buscar y reemplazar en el archivo

- ctrl + shift + h  
  buscar y reemplazar en todos los archivos del proyecto

- ctrl + d  
  seleccionar la palabra, si lo sigo oprimiendo selecciona las
  siguientes coincidencias

- ctrl + k, ctrl + d  
  para saltar la seleccion actual

- ctrl + L  
  seleccionar la linea

- ctrl + shift + L  
  selecciona todas las coincidencias con la palabra donde esta el cursor

- ctrl + shift + k  
  borrar linea actual

- ctrl + z:  
  deshacer

- ctrl + y ó ctrl + shift + z:  
  rehacer

- ctrl + backspace  
  para borrar la palabra entera

- ctrl + flecha derecha o izquierda  
  moverse de palabra en palabra

- ctrl + '  
  borra una tabulacion a la linea

- ctrl + ¿  
  agrega una tabulacion a la linea

- ctrl + espacio  
  muestra los metodos o propiedades disponibles para
  un objeto o variable

- ctrl + shift + enter  
  Inserta una nueva linea pero deja el cursor en la misma linea

- ctrl + click  
  sobre una interfaz, propiedad, objeto o demas y me lleva
  a donde esta definida

- ctrl + .  
  abrir sugerencias del editor (sobre un error para ver las opciones)

- ctrl + shift + alt + flecha arriba o abajo  
  agregar cursor arriba o abajo

- alt + click  
  para agregar varios cursores y se quedan donde se hace click

- shift + alt + click  
  para agregar varios cursores y se mueven para quedar alineados
  con el ultimo click que dì

- alt + flecha arriba o abajo  
  para mover la linea en la que esta el cursor

- shift + alt + flecha arriba o abajo  
  para duplicar la linea en la que esta el cursor

- shift + alt + flecha derecha  
  para expandir la seleccion hasta algun separador, puede
  ser una letra mayuscula, un punto, una coma y demas

- shift + alt + flecha izquierda  
  para reducir la seleccion

- shift + alt + f  
  alinear documento

- shift + click  
  para seleccionar desde donde esta el cursor hasta donde se hace click

- shift + alt + o  
  Organizar los imports

- ! y tab  
  en los ficheros .html para crear la estructura html

- lorem y tab  
  genera texto aleatorio

---

## Otros

- envolver texto en etiqueta:  
  selecciono el texto, `ctrl + shift + p` para abrir paleta de comandos,
  busco **wrap with abbreviation** y pongo la etiqueta que quiero.  
  `ctrl + k, ctrl + m` (atajo personalizado)

- poner en mayusculas: selecciono el texto y doy  
  `ctrl + k, ctrl + y` (atajo personalizado)

- poner en minusculas: selecciono el texto y doy  
  `ctrl + k, ctrl + h` (atajo personalizado)

- seleccionar varias lineas, `ctrl + shift + p` para abrir paleta
  de comandos, busco sort lines para ordenar las lineas.  
  `ctrl + k, ctrl + g` : ordenar ascendente (atajo personalizado)  
  `ctrl + k, ctrl + v` : ordenar descendente (atajo personalizado)

- crear archivo: pongo la ruta en el src del elemento y doy
  ctrl + click sobre la ruta y le digo a VSCode que cree el archivo

- en la paleta de comandos estan disponibles varios comandos para
  archivos README.md.  
  para visualizar el archivo README.md, busco markdown y selecciono  
  Markdown: open preview para ver la previsualizacion del archivo

- Cambiar el nombre de la variable, clase, metodo, etc, solo en su
  definicion y referencia, de manera estricta, diferenciando entre
  mayusculas y minusculas dejo el puntero en la palabra, doy F2 y
  pongo el nuevo nombre.  
  Esto es distinto a usar el buscar y reemplazar porque esto cambiaria
  cada coincidencia en el archivo o en el proyecto.

- SNIPPETS:  
  ver en la extension JavaScript (ES6) code snippets.  
  puedo crear snippets personailzados, doy en file, preferences,
  configure user snippets, selecciono el lenguaje y creo el snippet
  (ver video snippets basicos, en el curso visual studio code de
  fernando herrera de udemy)

  - clg: console.log()
  - todo: /_ TODO: _/
  - fixme: /_ FIXME: _/

- los metodos donde su figura es un cuadrado morado necesitan parentesis
  para ejecutarse, los que son rectangulares azul no necesitan
  parentesis para ejecutarse

- code . (en la terminal)  
  abrir visual studio code en el directorio actual

## Extensiones

- quicktype.io:  
  selecciono el archivo donde va a ir el resultado del proceso,
  doy F1 para abrir la paleta de comandos, busco Paste JSON as code y,
  teniendo el JSON copiado, pongo el nombre de la interfaz que se
  va a crear a partir del JSON, doy enter

- GitHub Copilot:

  - `tab`: aceptar sugerencia
  - `esc`: rechazar sugerencia
  - `alt + ¿`: mostrar siguiente sugerencia
  - `ctrl + enter`: abrir mas sugerencias

- Todo Highlight:  
  `ctrl + shift + p`: para abrir la paleta de comandos y puedo ejecutar:

  - Toggle highlight: para activar o desactivar el highlight
  - List highlighted annotations: para ver las anotaciones

- Todo tree:  
  para quitar el resaltado predeterminado, ctrl + , para abrir
  las user settings, busco todo tree highlights enable y
  deshabilito la opcion

- Image preview de Kiss Tamas:  
  muestra una previsualizacion de las imagenes dentro del HMTL

- Inline Fold de Mohammed Alamri:  
  para ocultar las clases de tailwind en el HMTL, pero se puede configurar
  para que oculte mas cosas

- Angular Essentials (Version 13) y Angular Extension Pack:  
  para las extensiones relacionadas a Angular

- Angular File Changer:  
  cambiar a los archivos relacionados del componente

  - `alt + h` => .html
  - `alt + c` => .css
  - `alt + t` => .ts
  - `alt + s` => .spec.ts

- Tailwind CSS IntelliSense de Tailwind Labs:  
  Autocompletado para tailwind.

- GitHub Pull Requests and Issues:  
  Permite manejar las pull requests e issues de GitHub

- Template string converter:  
  Permite convertir un string a template string

- Code runner  
  para ejecutar codigo en varios lenguajes

- live sass compiler de Glenn  
  para compilar sass

- Pretty TypeScript Errors
