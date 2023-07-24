---
id: 'git'
title: 'GIT'
heroImage: '/git.svg'
---

## Conceptos

### Estados en git:

- **modified**: el archivo contiene cambios pero no han sido
  marcados para ser confirmados, se encuentra en el directorio
  de trabajo.
- **staged**: el archivo ha sido marcado como preparado para ser
  confirmado en el repositorio local, se encuentra en el area
  de preparacion (stage area).
  Esta accion recibe el nombre de add.
- **committed**: el archivo ha sido guardado en el repositorio local.
  Esta accion recibe el nombre de commit.

### HEAD

Es el puntero que hace referencia al punto actual del historial de
cambios del repositorio, normalmente es el ultimo commit

### Archivos y carpetas que se deberian ignorar:

- archivos con credenciales o llaves API (deberian inyectarse por
  variable de entorno)
- carpetas de configuracion del editor (/.vscode)
- archivos de registro (log files)
- archivos de sistema como .DS_Store
- carpetas generadas con archivos estaticos compilaciones como
  /dist ó /build
- dependencias que pueden ser descargadas (/node_modules)
- coverage del testing (/coverage)

## General

- `git --version`  
  ver version de git

- `git init`  
  inicializar el repositorio git

- `git config --global user.name "nombreUsuario"`  
  configurar el nombre del usuario de manera global

- `git config --global user.email "emailUsuario"`  
  configurar el email del usuario de manera global

- `git config user.name "nombreUsuario"`  
  configurar el nombre del usuario en un repositorio en concreto
  estando en la carpeta del proyecto

- `git config user.email "emailUsuario"`  
  configurar el email del usuario en un repositorio en concreto
  estando en la carpeta del proyecto

- `git config --global core.editor "nombreEditor"`  
  configurar el editor de texto por defecto.
  Para VSCode se usa "code"

- `git config --list`  
  mirar la configuracion del git.  
  si hay algun valor repetido, el ultimo valor prevalece.  
  puedo usar las banderas --global, --local, --system para ver solo
  la configuracion que me interese.

- `git status`  
  ver el estado del repositorio

- `git help comando`  
  ayuda con el comando nombrado

- `git clone repoOriginal repoClon`  
  clonar un repositorio, debe tener otro nombre

- `rm -rf .git `  
  para remover git del proyecto

- `rm -rf repositorio`  
  eliminar repositorio

- `git rm archivo`  
  borrar archivo del repositorio y del directorio de trabajo
- `git rm --cached archivo`  
  borrar archivo del repositorio pero no del directorio de trabajo

- `touch .gitignore`  
  crear el archivo que va a contener los archivos o carpetas que
  queremos que git ignore

- `--dry-run`  
  al final de los comandos significa que quiero saber que resultado
  tendria una accion sin realizarla

## Commits

- `git add archivo`  
  agrega el archivo o directorio al area de preparacion

- `git add .`  
  agrega todos los archivos al area de preparacion

- `git reset archivo`  
  quitar el archivo del area de preparacion.  
  tambien se puede usar:  
  `git rm --cached archivo`

- `git commit -m "mensaje" `  
  hacer commit con un mensaje

- `git commit -am "mensaje" `  
  hacer commit directamente con un mensaje sin usar git add

- `git commit --amend -m "mensaje del commit"`  
  modificar el mensaje del ultimo commit.  
  Si ademas quiero agregar nuevos archivos al ultimo commit, debo ejecutar
  antes git add

- `git log`  
  me muestra todos los commits hechos

- `git log --grep=palabraClave`  
  buscar commit por palabra clave del commit

- `git log -S 'palabra'`  
  buscar commit por una palabra que esta dentro de un fichero
  que contiene el commit

- `git restore archivo`  
  descarta los cambios hechos en el archivo y lo restaura como estaba
  en el ultimo commit.  
  tambien se puede usar checkout pero ya no es tan recomendable:  
  `git checkout archivo`

- `git restore .`  
  descarta los cambios de todos los archivos y los restaura como estaban
  en el ultimo commit.  
  tambien se puede usar checkout pero ya no es tan recomendable:  
  `git checkout .`

- `git checkout -- .`  
  deshacer los cambios y volver al proyecto como lo tenia hasta el ultimo commit

- `git symbolic-ref HEAD`  
  muestra la referencia del HEAD

- `git rev-parse HEAD`  
  muestra el valor del HEAD

- `git reset HEAD~1`  
  borra el ultimo commit pero deja los cambios disponibles en los
  archivos y mueve HEAD 1 paso desde el ultimo commit (vuelve a
  la version inmediatamente anterior a la que estamos ahora).
  tambien se puede usar con el comando:  
  `git reset --soft HEAD~1 (midu)`

- `git reset --hard HEAD~1`  
  igual que el de arriba pero los cambios no estan disponibles

- `git checkout hashCommit`  
  ir a ese commit

- `git cherry-pick hashCommit`  
  aplicar el commit indicado, puede estar en otra rama.  
  para poder usar este comando el directorio de trabajo debe estar limpio de
  archivos modificados

- `git cherry-pick hashCommit -e`  
  aplicar el commit indicado y cambiar el mensaje del commit

## Ramas

- `git branch`  
  muestra las ramas.  
  Un asterisco significa la rama en la que me encuentro actualmente.
  igualmente puedo mostrar la rama actual con:  
  `git branch --show-current`

- `git branch ramaNueva`  
  crea una nueva rama.

- `git branch ramaNueva ramaOrigen`  
  opcional se puede poner la rama desde la cual quiero crear la nueva rama

- `git branch -d rama`  
  eliminar una rama que ya ha sido fusionada

- `git branch -D rama`  
  eliminar una rama que no ha sido fusionada

- `git branch -m rama nuevoNombre`  
  renombrar una rama

- `git switch rama`  
  moverse a esa rama.
  tambien se puede usar con checkout pero ya no es recomendable
  `git checkout rama`

- `git switch -c ramaNueva `  
  crea una nueva rama y se mueve a ella.

- `git switch -c ramaNueva ramaOrigen`  
  opcional se puede poner la rama desde la cual quiero crear la nueva rama.  
  tambien se puede usar con checkout pero ya no es recomendable  
  `git checkout -b <rama>`

- `git merge <rama>`  
  unir una rama a otra. Debo estar en la rama a la cual deseo traer
  los cambios y pongo el nombre de la rama que contiene los cambios

- `git rebase <rama>`  
  El rebase es una forma de fusionar cambios de una rama a otra, como el merge,  
  pero esta nos permite reordenar el historial de commits de una rama.  
  `git rebase --continue`  
  Para seguir el rebase después de resolver conflictos.  
  `git rebase --abort`  
  Para abortar el rebase.

  Lo ideal seria usar merge para integrar cambios en una rama principal y  
  usar rebase para integrar cambios en una rama de desarrollo. Dicho de  
  otro modo: nunca usaría rebase en una rama principal, ni tampoco en una  
  rama pública donde más personas están trabajando.

- `git remote prune origin --dry-run`  
  mira que ramas locales han dejado de estar enlazadas con el
  respositorio remoto origin, es decir, me indica que ramas locales ya han
  sido fusionadas en el repositorio remoto y ya no serian necesarias.  
  si quiero ejecutar el comando, doy:
  `git remote prune origin`

## Repo remoto

- `git remote add aliasRepoRemoto rutaRepoRemoto`  
  agrega un repositorio remoto a nuestro repositorio local,
  normalmente se le asigna el alias de origin para indicar que es el
  repositorio remoto principal.  
  es recomendable usar la ruta SSH (se debe haber configurado previamente
  la conexion SSH)

- `git push -u aliasRepoRemoto rama`  
  subir los cambios del repositorio local al repositorio remoto en la
  rama especificada.
  el -u le dice a git que esta es mi configuracion por defecto,
  por lo tanto, despues solo tengo q usar:
  git push

- `git push aliasRepoRemoto rama`  
  subir la rama del repositorio local al repositorio remoto.
  tambien se usa para enviar los cambios a una configuracion que no
  esta por defecto (como el comando de arriba)

- `git push aliasRepoRemoto --delete rama`  
  eliminar una rama del repositorio remoto.

- `git pull aliasRepoRemoto rama`  
  bajar los cambios del repositorio remoto de la rama indicada al
  repositorio local

- `git clone rutaRepoRemoto`  
  hacer una copia del repositorio remoto al entorno local
  incluye ficheros, ramas y commits.  
  la forma preferida de hacerlo deberia ser SSH, para esto, primero
  se debe configurar la conexion SSH.  
  Si quiero clonar el proyecto solo con el ultimo commit, ejecuto:  
  `git clone rutaRepoRemoto --depth=1`  
  Clonaria la ultima version del repositorio pero sin todo el historial.

- `git remote -v`  
  muestra las URLs de los repositorios remotos que estan asociados con
  el repositorio local

- `git remote set-url aliasRepoRemoto rutaRepositorioRemoto`  
  cambiar la ruta del repositorio remoto

- `git remote set-head origin main`  
  actualizar el puntero HEAD para que apunte a la rama main del
  repositorio remoto

- `git remote set-head origin --auto`  
  se puede usar --auto al final para que apunte automaticamente a la
  rama principal del repositorio remoto

- `git fetch --all`  
  baja todas las ramas que tenemos en el repositorio remoto.  
  se debe hacer switch a esa rama para verla

- bajar una rama remota al local y que queden enlazadas:

  - `git fetch repoRemoto`: para bajar los cambios
  - `git switch ramaRepoRemoto`: crea una rama local con el mismo
    nombre y a partir de la rama remota, ademas queda trackendola

- `git config credential.username "userName"`  
  Configurar las credenciales para el proyecto

## Tags

**Tags**: normalmente se usan para hacer versionado del codigo  
ej, v1.2.0, v1.2.1, v1.2.2, etc

- `git tag -a <nombreTag> -m "mensaje"`  
  poner un tag con un mensaje

- `git tag -a <nombreTag> <hashCommit> -m "mensaje"`  
  poner un tag con un mensaje a un commit especifico

- `git tag`  
  mostrar los tags

- `git push --tags`  
  subir los tags al repositorio remoto.  
  en github, para hacer un release a partir del tag, doy click en release,
  click en tags, click en el tag, click en create release from tag,
  pongo el titulo, descripcion (funciona como Markdown), publish release

- `git tag -d <nombreTag>`  
  eliminar tag

## Stash

**Stash** es un almacen temporal para los cambios que aun no queremos confirmar
como commit pero que tampoco queremos perder, para poder moverse a otras
ramas y demas con tranquilidad

- `git stash`  
  guargar los archivos a los que se les hace seguimiento en el stash

- `git stash -u`  
  guardar tanto los archivos que se les hace seguimiento como los que no

- `git stash -m "mensaje"`  
  guardar los archivos a los que se les hace seguimiento con un mensaje

- `git stash list`  
  mostrar los stashs

- `git stash pop`  
  traer y aplicar los ultimos cambios que tenemos en el almacen temporal,
  ademas elimina ese ultimo stash que se trajo. El último stash es el 0.

- `git stash apply`  
  traer y aplicar los ultimos cambios que tenemos en el almacen temporal,
  sin eliminar el ultimo stash que se trajo

- `git stash apply 2`  
  para traer unos cambios especificos

- `git stash drop <indiceStash>`  
  eliminar el stash indicado

- `git stash branch <rama> <indiceStash>`  
  crear una rama a partir de los cambios del stash especificado

- `git stash clear`  
  limpiar el stash

## Buenas prácticas

- Usar el verbo imperativo en los mensajes de commit (Add, Change, Remove, etc)
- No usar puntuacion al final del titulo del mensaje de commit
- Usar un máximo de 50 caracteres en el titulo del mensaje de commit
- Usar el cuerpo del commit si es necesario, separado del titulo por una linea en blanco
- Usar commit semánticos (feat, fix, docs, style, refactor, etc.)
- 

## Errores

- _remote: Permission to 'repositorio' denied to 'username'_  
  Si ya se tienen las credenciales configuradas, se debe cambiar el username:  
  `git config credential.username "new name"`

## Otros

- si se tiene un archivo en conflicto al hacer el merge,
  se debe resolver manualmente, indicando la estructura final
  que deseamos y con un commit confirmamos los cambios

- **Pull Request (PR)**, es sugerirle al dueño del repositorio que
  haga un pull de nuestro repositorio con los cambios.
  merge request funcionaria de la misma manera pero con merge

- **SSH**: es un protocolo de comunicacion segura que permite a los usuarios
  de una red conectarse a un servidor remoto. Esto permite trabajar con
  repositorios remotos sin necesidad de usar usuario y contraseña cada vez
  que se haga una accion.

- **Fork** en Github significa copiar el repositorio de alguien mas
  en nuestra cuenta y evolucionar el codigo de ese repositorio sin
  afectar o tener en cuenta el original

- en el libro de aprendiendo-git en la parte de trucos con Git tengo:
  - aplicar cambios de un commit a otro
  - detectar que commit ha introducido el bug
  - saber quien ha hecho cambios en un archivo
  - saber quien añadió una linea por primera vez
  - recuperar un archivo en concreto de otra rama o commit
  - encontrar el primer commit de un repositorio
  - saber el maximo contribuidor de un repositorio
  - saber todos los commits de un usuario en especifico
  - clonar un repositorio sin descargar todo el historico
  - vuelve a la rama previa en la que estaba trabajando
  - descargar los ficheros de un repositorio remoto sin tener que clonarlo
