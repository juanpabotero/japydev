---
id: 'node'
title: 'Node.js'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/node.svg'
---

## Herramientas

- Aprender Node:  
  https://aprendenode.dev/  
  https://github.com/midudev/curso-node-js/

## Conceptos

Es un entorno de ejecución de JavaScript, es un entorno donde se puede ejecutar JavaScript,
construido con el motor de JavaScript V8 de Chrome. Esta orientado a eventos, asíncrono y
monohilo, pero los procesos asincronos los saca del hilo principal y los ejecuta en otro hilo,
para que no se bloquee el hilo principal.

Es un entorno de ejecución diferente al navegador, por lo que, el objeto `window` no existe,
pero si existe el objeto `globalThis` que es la variable global tanto del navegador como
de Node, en el navegador apunta a `window` y en Node apunta a `global`.  
Es recomendable usar `globalThis` para que el código sea compatible con Node y el navegador.  
Todo lo que es global sale del objeto `globalThis`, por ejemplo `console.log` es
`globalThis.console.log`.

La extension .js de los archivos en Node, por defecto utilizan CommonJS. Se puede poner
también la extensión .cjs para indicar de manera más explícita que es CommonJS.  
Para utilizar ES Modules, se debe agregar la extensión .mjs a los archivos.  
Para utilizar ES Modules en Node, se debe agregar `"type": "module"` en el package.json.

- `node --version` para ver la versión de node.

- `node` en la terminal para entrar al entorno de node, en modo de ejecución y poner
  cualquier código de Javascript.

  - `.help` en el entorno de node para ver los comandos disponibles.
  - `.exit` para salir del entorno de node.

- `node nombreArchivo.js` para ejecutar un archivo de Javascript.

- `node --watch nombreArchivo.js` para ejecutar un archivo de Javascript y que se
  reinicie cada vez que se haga un cambio en el archivo (desde la versión 18).

Existen paquetes dentro de node que permiten muchas funcionalidades,
por ej, paquetes para trabajar con archivos en un servidor, conectarse
a bases de datos, etc. Babel es uno de los paquetes que esta disponible en node.

Normalmente los modulos de node se dejan por fuera del git porque
se pueden construir fácilmente en base al package.json.

## Paquetes

Para usar los paquetes de Node, es recomendable desde la versión 16, hacerlo
usando `node:nombrePaquete`, ej: `const os = require('node:os')` en vez de `require('os')`.

### Paquete OS

Podemos saber información del sistema operativo.  
Importamos `const os = require('node:os')` ó `import os from 'node:os'`

- `os.platform()` para ver la plataforma en la que se está ejecutando Node (nombre del sistema operativo).
- `os.release()` para ver la versión del sistema operativo.
- `os.arch()` para ver la arquitectura del sistema, si es de 32 o 64 bits.
- `os.cpus()` para ver la información de los procesadores del sistema.
  `os.cpus().length` para ver la cantidad de procesadores del sistema.
- `os.freemem()` para ver la memoria libre del sistema.
- `os.totalmem()` para ver la memoria total del sistema.

### Paquete File System

Para trabajar con archivos y carpetas.  
Importamos `const fs = require('node:fs')` ó `import fs from 'node:fs'`

- `fs.readdirSync('./')` para ver los archivos y carpetas de la carpeta actual.
- `fs.statSync('./nombreArchivo.txt')` para ver la información de un archivo o carpeta.
- `fs.readFileSync('./nombreArchivo.txt', 'utf-8')` para leer un archivo.
- Para leer un archivo de manera asincrona.  
  `fs.readFile('./nombreArchivo.txt', 'utf-8', (error, data) => { console.log(data) })`
- Para ver la información de un archivo o carpeta de manera asincrona.  
  `fs.stat('./nombreArchivo.txt', (error, stats) => { console.log(stats) })`

Tambien se puede usar `fs/promises` para trabajar con promesas.

```javascript
import fs from 'node:fs/promises';
fs.readFile('./nombreArchivo.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

Igualmente se puede usar async/await.

```javascript
import fs from 'node:fs/promises';
async function leerArchivo() {
  try {
    const data = await fs.readFile('./nombreArchivo.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
leerArchivo();
```

### Paquete Path

Para trabajar con rutas de archivos y carpetas.  
Importamos `const path = require('node:path')` ó `import path from 'node:path'`

- `path.basename('/carpeta/nombreArchivo.txt')` para ver el nombre del archivo.  
  `path.basename('/carpeta/nombreArchivo.txt', '.txt')` para ver el nombre del archivo sin la extensión.
- `path.extname('/carpeta/nombreArchivo.txt')` para ver la extensión del archivo.
- `path.join('carpeta', 'subcarpeta', 'nombreArchivo.txt')` para unir rutas de archivos y carpetas.  
  Solo pondria las carpetas o archivos y Node pondria el separador de rutas según el sistema operativo.  
  `__dirname` es una variable global de Node que contiene la ruta absoluta del archivo actual.
- `path.sep` para ver el separador de rutas de archivos y carpetas según el sistema operativo.
- Mostrar los archivos de una carpeta
  ```javascript
  fs.readdir('.', (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    files.forEach((file) => {
      console.log(file);
    });
  });
  ```

### Paquete Process

Es un objeto global que proporciona información y control sobre el proceso actual de ejecución.
Tiene propiedades y métodos que permiten interactuar con el entorno de ejecución de Node y
da información sobre el proceso actual de ejecución.  
Importamos `const process = require('node:process')` ó `import process from 'node:process'`

- `process.argv` para ver los argumentos que se le pasan en la linea de comandos.  
  `process.argv[0]` para ver la ruta de Node.  
  `process.argv[1]` para ver la ruta del archivo que se está ejecutando.  
  `process.argv[2]` para ver el primer argumento que se le pasa a Node al ejecutar un archivo.
- `process.cwd()` para ver la ruta absoluta de la carpeta actual en la que estamos trabajando.
- `process.exit(0)` para salir del proceso de Node, el 0 es para indicar que salió bien.
- `process.exit(1)` para salir del proceso de Node, el 1 es para indicar que salió mal.
- Se puede controlar eventos del proceso
  ```javascript
  process.on('exit', () => {
    // limpiar recursos y demás
  });
  ```
- `process.env` para ver las variables de entorno del sistema operativo.

## NVM

Node version manager, manejar la instalación de versiones de node.

- `nvm version` => version de NVM
- `nvm install versionNode` => instalar una version de node  
  `nvm install lts` => instalar la ultima version lts de node
- `nvm use versionNode` => usar una version de node (si sale error,
  ejecutar terminal como administrador)
- `nvm current` => ver la version actual de node
- `nvm list` => listar las versiones de node disponibles
- `nvm uninstall versionNode` => desinstalar una version de node

## NPM

Node Package Manager, es el gestor de paquetes de Node, es un software que se instala
en el sistema operativo y permite instalar paquetes de Node.

Npm tiene 2 partes, uno es el registro donde estan todos los paquetes y el otro es la
linea de comandos, porque se pueden utilizar alternativas a la linea de comandos,
puedes usar yarn o pnpm y seguir utilizando el registro de npm.

- `npm --version` ver la versión de npm.
- `npm init` crear el package.json. (Descripción del proyecto, autor, licencia, etc)  
  `npm init -y` crear el package.json con la configuración por defecto.
- `npm start` lanzar el servidor local
- `npm install` instalar los modulos de node y los paquetes que estan en el package.json
- `npm install nombrePaquete` ó `npm i nombrePaquete` instalar un paquete como dependencia de producción.  
  `--save-dev` ó `-D` para instalar como dependencia de desarrollo.  
  `--save` ó `-s` para instalar de forma local en el proyecto.  
  `--global` ó `-g` para instalar de manera global.  
  `--save-exact` ó `-E` para que instale la versión exacta.
- `npm install nombrePaquete@version` instalar una versión especifica de un paquete.
- `npm install nombrePaquete@latest` instalar la última versión de un paquete.
- `npm uninstall nombrePaquete` desinstalar un paquete.

**npx** es lo mismo que ejecutar ./node_modules/.bin/  
Permite ejecutar el comando de una libreria que no ha sido instalada.  
Permite ejecutar comandos arbitrarios que estan en el npm package.  
Permite instalar paquetes de forma global en una carpeta temporal y ejecutar el binario al vuelo  
ej, `./node_modules/.bin/eslint --init` seria lo mismo que ejecutar `npx eslint --init`

Es recomendable instalar las dependencias siempre de manera local y no global. De manera
global solo se puede usar una versión de una dependencia y si se tienen varios proyectos
con distintas versiones de las dependencias, se puede tener problemas.

Se puede crear un archivo `.npmrc` para configurar npm de manera local, esto sobreescribe
la configuracion global.

## package.json

Le dice a node y a nosotros como funciona la aplicacion, que dependencias son
necesarias para pasar a produccion, que puedo descartar para pasar a produccion, etc.
devDependencies del package.json son dependencias de desarrollo y estas no llegan
a la versión de producción.

La semantica de versiones se maneja asi, X.Y.Z donde:  
X es la versión mayor, es cuando rompe la compatibilidad hacia atrás.  
Y es la versión menor, es cuando se añaden nuevas funcionalidades.  
Z es la versión de parche, es cuando se arreglan errores.

Dentro del package.json y las dependencias:

- ^ aceptara versiones dentro del rango de versiones menores, ej: ^3.4.4 acepta 3.x.x
- ~ aceptara versiones dentro del rango de versiones de parche, ej: ~3.4.4 acepta 3.4.x
- si no tiene nungun simbolo antes, solo acepta esa version exacta, ej: 3.4.4.  
  Seria recomendable dejarlo de esta manera para que no se instalen versiones
  que no se han probado y que puedan tener errores y realizar las actualizaciones
  de manera manual.

Dentro de los scripts puedo poner el comando:  
`"phoenix": "rm -f package-lock.json && rm -rf ./node_modules && npm install --no-fund --no-audit"`  
Lo que hace es eliminar el _package-lock.json_ y el _node_modules_ para
reinstalar los paquetes, normalmente se usa cuando se actualizan los paquetes.  
El _--no-fund_ es para que no muestre los mensajes de paquetes que piden donaciones
y el _--no-audit_ es para que no muestre los mensajes de paquetes que piden auditar,
ambos se usan para hacer una pequeña optimizacion que puede ahorrar unos
segundos en las instalaciones.

**peerDependencies** significa que no lo vamos a instalar nosotros, sino que vamos
a depender de que el proyecto donde lo vamos a utilizar ya tenga instalada esa utilidad.
El paquete necesita una dependencia de produccion que debe ser instalada por el usuario.

## Nodemon

Es un paquete que permite reiniciar el servidor cada vez que se hace un cambio en el código.  
Se instala en el proyecto como dependencia de desarrollo con `npm install nodemon -D`.  
No es recomendable instalarlo de manera global.

Puedo crear un script en el package.json para ejecutar nodemon, por ejemplo:  
`"dev": "nodemon nombreArchivo.js"`

## Express

Es un framework de Node para crear servidores web.  
Se instala en el proyecto como dependencia de producción con `npm install express`.

## Rest API

Acrónimo de Representational State Transfer, es una arquitectura de software.  
Los prinipios de REST son la escalabilidad, fiabilidad, simplicidad, portabilidad,
visibilidad, fácil de mantener.

Las APIs deben ser como un embudo, pueden llegar a recibir mucha información pero solo
procesar y devolver la información que se necesita.

Los fundamentos de REST son:

**Recursos:**  
En REST todo es considerado un recurso, por ejemplo, un usuario, un producto, etc.
Cada recurso se identifica con una URL.

**Verbos:**  
Los verbos HTTP sirven para definir las operaciones que se pueden hacer con los recursos:

- GET: obtener un recurso
- POST: crear un recurso, NO es idempotente, porque siempre se crea un nuevo recurso
- PUT: actualizar totalmente un recurso ya existente o crearlo si no existe, SI es idempotente,
  porque si se hace varias veces, siempre se obtiene el mismo resultado. Con un PUT se
  enviaria todo el objeto.
- PATCH: actualizar parcialmente un recurso, normalmente es idempotente pero depende, porque si
  se hace varias veces, puede que se obtenga un resultado diferente como por ejemplo, si se
  tiene una propiedad updatedAt, cada vez que se actualiza, cambia el valor de esa propiedad.
  Con un PATCH se enviaria solo la o las propiedades que se quieren actualizar.
- DELETE: eliminar un recurso
- HEAD: obtener los encabezados de un recurso
- OPTIONS: obtener los metodos HTTP que soporta un recurso

**Representaciones:**  
Lo recursos pueden tener múltiples representaciones: JSON, XML, HTML, Imagenes,
Videos, PDF, etc. El cliente deberia poder elegir la representación del recurso pero
no es muy común.

**Stateless**  
Cada petición que se hace al servidor debe contener toda la información necesaria
para que el servidor pueda entenderla, no debe depender de ninguna petición anterior.
El cliente debe enviar toda la información necesaria para procesar la request.

**Interfaz uniforme**  
Las peticiones deben ser consistentes, deben tener una interfaz uniforme,
deben tener una estructura definida.  
Las urls siempre deben hacer lo mismo, los verbos siempre deben hacer lo mismo,
las respuestas siempre deben tener la misma estructura, etc.

**Separación de conceptos**  
Los componentes del cliente y del servidor estan separados entre sí, permite que
cliente y servidor evolucionen de forma separada.

### CORS

Cross Origin Resource Sharing.

Es una politica de seguridad que se aplica en el navegador, que permite o no que
un recurso sea consumido desde un dominio diferente al que lo sirve.

El error de CORS se debe arreglar desde el backend.  
Se puede resolver agregando la cabecera `Access-Control-Allow-Origin: *` en el backend,
pero esto no es seguro, porque le permite a cualquiera consumir el recurso.  
Lo que se debe hacer es agregar la cabecera `Access-Control-Allow-Origin: https://midominio.com`
en el backend, para que solo ese dominio pueda consumir el recurso.

Para solucionarlo se puede instalar `npm install cors` (ver curso-nodejs-midudev, clase-3, app.js)

Metodos normales: GET, HEAD, POST  
Metodos complejos: PUT, PATCH, DELETE

Los metodos complejos primero hacen una peticion OPTIONS para preguntarle al servidor
que metodos soporta, y si el servidor responde que soporta el metodo que se quiere usar,
se hace la peticion normal.

## Utilidades

Script para mostrar un puerto disponibe

```javascript
// paquete para hacer conexión con el protocolo tcp, es mas rápido que http
import net from 'node:net';

export function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    // crear el servidor
    const server = net.createServer();

    // escuchar el servidor en el puerto deseado
    server.listen(desiredPort, () => {
      // server.address().port nos permite saber el puerto
      const { port } = server.address();
      // cerrar el servidor
      server.close(() => {
        resolve(port);
      });
    });

    // si hay un error al escuchar el puerto
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        // el puerto 0 indica que el sistema operativo elija un puerto disponible
        /* no es recomendable en producción, siempre va a ser un puerto que este disponible y
          normalmente se redirecciona al puerto 80. */
        findAvailablePort(0).then((port) => resolve(port));
      } else {
        reject(error);
      }
    });
  });
}
```

Script para crear un servidor web (utilizando la utilidad anterior para encontrar un puerto disponible)

```javascript
import http from 'node:http';
import { findAvailablePort } from './free-port.js';

// si quiero utilizar las variables de entorno
// antes de ejecutar el script, ejecutar en la terminal: export PORT=1234
const desiredPort = process.env.PORT ?? 3000;

// crear el servidor
const server = http.createServer((request, response) => {
  // este console.log se ve en la consola del servidor, no la del navegador
  console.log('request recibido');
  response.end('Hola mundo');
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
  });
});
```
