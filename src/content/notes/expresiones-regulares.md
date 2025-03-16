---
id: 'expresiones_regulares'
title: 'Expresiones regulares'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/accessibility.svg'
---

Las expresiones regulares se utilizan para buscar y manipular cadenas de texto
para coincidan con un patron especifico. Pueden ser usadas para validar textos,
buscar y reemplazar cadenas, extraer información de cadenas.

En algunos lenguajes pueden llegar a tener diferentes sintaxis, pero en general
son muy similares. Alguna de las diferencias pueden ser por ejemplo en Javscript 
se utilizan `/ /` para definir una expresion regular, mientras que en Golang se
utilizan ` `` `.

Los metacaracteres son simbolos especiales con significados especificos en las
expresiones regulares. Algunos de los metacaracteres mas comunes son: `.` `\` `^`
`$` `*` `+` `?` `{}` `[]` `()` `|`

- `/expresion/`: expresion regular
- `/expresion/g`: expresion regular global
- `/expresion/i`: expresion regular insensible a mayusculas y minusculas
- `/expresion/m`: expresion regular multilinea
- `\`: es el simbolo de escape, para quitar la relacion y buscar el simbolo
  como tal. Dentro del conjunto de caracteres no es necesario escapar
  los simbolos.

Coincidencias basicas:

- `.`: cualquier caracter, excepto el salto de linea
- `\d`: digito (0-9)
- `\D`: no es digito (0-9)
- `\w`: caracter alfanumerico (a-zA-Z0-9\_)
- `\W`: no es caracter alfanumerico (a-zA-Z0-9\_)
- `\s`: espacio de cualquier tipo (tab, espacio, salto de linea)
- `\S`: no es espacio de cualquier tipo (tab, espacio, salto de linea)

Limites:

- `\b`: limite de palabra
- `\B`: no es limite de palabra
- `^`: inicio de cadena de texto
- `$`: fin de cadena de texto

Cuantificadores:

- \*: 0 o más veces
- +: 1 o más veces
- ?: 0 o 1 vez
- {n}: numero exacto de veces
- {n,m}: rango (minimo, maximo)

Conjunto de caracteres:

- [abc]: cualquier caracter de la lista
- [^abc]: cualquier caracter que no esta en la lista

Grupos:

- (expresion): grupo de expresiones
- (expresion)?: grupo de expresiones opcionales
- |: uno u otro

Ejemplos:

- `/a.b/`: cualquier caracter entre `a` y `b`. Ejemplo: `acb`
- `/^\+\d{2} \d{7}/`: validar un numero de telefono internacional. Ejemplo: `+54 1234567`
- `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`: validar un email. Ejemplo:

Páginas:

- regexr.com: distintas expresiones regulares para validaciones
- https://regex101.com/

