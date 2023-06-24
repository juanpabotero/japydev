---
title: 'Angular'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 02 2022'
heroImage: '/angular.svg'
---

# ANGULAR

## Comandos

- Instalar Angular CLI  
  `npm install -g @angular/cli`

- Para comandos de angular en la terminal  
  `ng`

- Ayuda para los comandos de angular  
  `ng help`
- Ver version de angular  
  `ng version`

- Actualizar angular  
  Página [update.angular.io](https://update.angular.io/)  
  A la última versión estable `ng update`  
  A una verión en específico `ng update @angular/cli@14 @angular/core@14`  
  Si se usa el CDK o Angular Material `ng update @angular/cdk@14 @angular/material@14`  
  Tener en cuenta que se necesita hacer de forma gradual. Es decir, si se esta trabajando en  
  un proyecto en Angular 12, primero se debe actualizar a la versión 13 y luego a la versión 14.

- Crear un nuevo proyecto de angular  
  `ng new nombre-proyecto`

- Correr la aplicacion, por defecto corre en el puerto 4200  
  `ng serve -o`  
  -o indica que lo abra cuando este listo

- Crear un modulo  
  `ng g m carpeta/nombre-modulo`  
  no hay que poner .module.ts  
  ng g m es diminutivo de ng generate module  
  ng g m --help para ayuda referente al comando

  Crear un modulo con su routing:  
  `ng g m nombre-modulo --routing`

  Generar el routing para un modulo en especifico:  
  `ng g m nombre-modulo-routing --flat --module=nombreModulo`

- Crear un componente  
  `ng g c carpeta/nombre-componente`  
  no hay que poner .component.ts  
  ng g c es diminutivo de ng generate component.  
  ng g c --help para ayuda referente al comando.

  Al final del comando para que no genere el archivo de pruebas:  
  `--skip-tests`

  Al final del comando para que no genere el archivo de estilos:  
  `-s`

- Crear un servicio  
  `ng g s carpeta/nombre-servicio`  
  no hay que poner .service.ts  
  ng g s es diminutivo de ng generate service  
  ng g s --help para ayuda referente al comando  
  viene con el decorador para que este disponible de manera global

- Crear una directiva  
  `ng g d carpeta/nombre-directiva`
  no hay que poner .directive.ts  
  ng g d es diminutivo de ng generate directive

- Crear un pipe  
  `ng g pipe carpeta/nombre-pipe`  
  no hay que poner .pipe.ts

- Crear un guard
  `ng g guard carpeta/nombre-guard`
  No hay que poner .guard.ts  
  Viene con el decorador para que este disponible de manera global  
  Selecciono CanActivate y CanLoad con la barra espaciadora y doy enter

- Crear un interceptor  
  `ng g interceptor carpeta/nombre-interceptor`

- Tambien puedo generar una clase o interface:  
  `ng g class carpeta/nombre-clase`  
  `ng g interface carpeta/nombre-interface`  
  `ng g interface carpeta/nombre-interface type`  
   type es opcional y crea el archivo en formato: _nombre-interface.type.ts_

- Generar archivo de produccion  
  `ng build`  
  Se genera una carpeta llamada dist y la carpeta con el nombre del proyecto
  es la que subiriamos al hosting.  
  El numero largo que tienen los archivos de produccion es el hash, evita
  que el navegador mantenga archivos viejos en cache, ya que se crea un nuevo
  hash cuando se actualiza la aplicacion

- Al final de cualquiera de los comandos anteriores para ver la ayuda:  
  `--help`

- Al final de cualquiera de los comandos anteriores para crear el elemento:
  al nivel de la ruta que se le indica  
  `--flat`

- Al final de cualquiera de los comandos anteriores para agregar el
  elemento en el modulo que se le indica:  
  `--module=nombreModulo`

- Los nombres de los componentes los deberia crear usando kebab-case, es decir,
  separando las palabras con guiones

- Para instalar o reconstruir los modulos de node en base a los
  paquetes que estan en el package.json:  
  `npm install`

---

## Documentación

- Angular es un framework y su punto mas fuerte es la creacion de SPA
  (Single Page Aplication), aplicaciones web de una sola pagina.  
  Actualiza cada 6 meses, soportado por Google, corre en el puerto
  **localhost:4200**

- [Página oficial](https://angular.io/)

- [Página Angular CLI](https://angular.io/cli)

- [Github Angular CLI](github.com/angular/angular-cli)

- Bloques fundamentales de angular:

  - **Componentes**: es un bloque de codigo, controla una
    funcionalidad o elemento
  - **Servicios**: lugares centralizados de informacion con
    diferentes funcionalidades
  - **Directivas**: Es una funcionalidad que modifica algunas propiedades
    de la vista o archivos html.
    directivas de componentes, estructurales y de atributos.
  - **Rutas**: mostrar diferentes componentes basados en el url
    del navegador
  - **Modulos**: permiten agrupar lo anterior que tengan relacion
    entre si

- Archivos del proyecto

  - tsconfig.json: configuracion de typescript
  - tsconfig.spec.json: archivo de pruebas
  - tsconfig.app.json: archivo de aplicacion
  - angular.json: configuracion de angular
  - package.json: configuracion de node
  - package-lock.json: como se crearon los archivos de node
  - karma.config.js: configuracion de pruebas
  - .gitignore: lo que quiero que git ignore
  - .editorconfig: reglas para algunos arhcivos
  - .browserslistrc: compatibilidades

- Archivos de la carpeta src en un proyecyo de angular

  - app: estan los archivos y componentes de la aplicacion
  - app.component.ts: es el componente principal
  - app.module.ts: es el modulo principal
  - assets: estan los recursos estaticos de la aplicacion
  - environment: archivos de ambiente de desarrollo o
    produccion
  - favicon.ico: icono de la pagina
  - index.html: archivo html
  - main.ts: le ayuda a angular a saber el ambiente
    en el que esta corriendo
  - polyfills.ts: compatibilidad con otros navegadores
  - styles.css: archivo css global
  - test.ts: configuracion del ambiente de pruebas

- Nombres de archivos y carpetas separados por -

- Cuando se crea un componente tiene que estar importado
  en un modulo

- Se recomienda trabajar a traves de modulos, separar por carpetas para cada
  modulo. Los modulos cuando se crean quedan aislados de los demas, si se
  requieren funcionalidades de un modulo en otro lado, se debe importar.
  los modulos sirven para encapsular los archivos y ayudan al lazy load.
  Si un modulo como FormsModule, etc esta importado en mas de un
  modulo, angular solo lo cargara una vez y lo usa en los demas sitios
  que lo requieran.

- El **constructor** se carga incluso antes de que se llame al componente.  
  El **ngOnInit** se carga cuando se llama al componente

- Las paginas en angular se trabajan como componentes

- Los eventos son definidos con () y []  
  () emite el valor entre ""  
  [] recibe el valor entre ""

- {{}} en el html, para usar expresiones de javascript en su
  interior

- En angular los servicios son singletons, es decir, se hace
  referencia al mismo servicio asi se llame o se cargue en varias
  partes de la aplicacion.

- Revisar en el index.html principal que la linea
  `<base href="/">` esta presente pues asegura el buen
  funcionamiento del routing

- La carpeta assets pasa a produccion tal cual como esta, pasa como
  archivos estaticos, como archivos a los que hago referencia dentro
  de mi aplicacion pero no van a ser parte del bundle de la
  aplicacion final.

- Un $ al final de una propiedad indica que es un observable (stream),
  es una convencion en angular

- Una promesa siempre se resuelve y lo hace solo una vez, solo funcionan
  hasta que esta se cumple, esta se ejecuta inmediatamente.  
  Un observable puede resolverse o no y puede hacerlo varias veces, mantienen
  un flujo de informacion, no empieza hasta que se haga la suscripcion.

  `subscribe()` se usa para suscribirse al evento y poder escuchar cuando pasa.
  Cada vez que se use, se deberia implementar tambien el metodo `unsubscribe()`
  en el `ngOnDestroy()` para desuscribirse del evento y que no queden fugas
  de memoria.  
  Es facil desuscribirse de un observable con el metodo `unsuscribe()`,
  pero no es facil hacerlo de una promesa por lo que ésta seguirá
  escuchando asi ya no la necesitemos y no se haya cumplido.

  Las llamadas http del httpModule son observables que una vez reciben la
  informacion hacen el .complete() que completa el observable y desuscribe
  toda suscripcion para evitar fugas de memoria.  
  Para hacer peticiones http es recomendable usar el paquete http de Angular,
  ya que trabaja a traves de observables, que son un poco mejor que trabajar
  con fetch y promesas.  
  Debo importar en el modulo HttpClientModule de `@angular/common/http` y en
  el componente o servicio HttpClient de `@angular/common/http`.

- **ONE WAY DATA BINDING**: enlazado en una sola via, el cambio solo
  se hace en una parte, la vista o el componente, pero se puede
  ver reflejado en ambas

- **TWO WAY DATA BINDING**: se pueden hacer cambios en ambos, la vista
  y el componente y se ven reflejados en ambos, para usarlo
  se debe importar FormsModule de @angular/forms, ej:  
  `<span [(ngModel)]="marca"> En oferta </span>`

- **PIPE**: funciones que transforman la informacion visualmente,
  estan en el paquete commonModule de angular, ej:  
  `variable | pipe`  
  Pueden ser puro o impuros, por defecto son puros, angular ejecuta el Pipe
  solo cuando detecta un cambio en el valor de entrada. Los impuros ejecutan
  el Pipe cuando se ejecuta el ciclo de deteccion de cambios.  
  Se pueden crear pipes personalizados.  
  Se deben importar en un modulo.

- **GUARD**: es una clase con un metodo para validar y hacer proteccion de rutas

- **DIRECTIVAS**: Es una funcionalidad que modifica algunas propiedades
  del template, se debe importar el CommonModule de `@angular/common`.
  Existen directivas de componentes, estructurales y de atributos.  
  Directivas estructurales son:

  - `*ngIf`, remueve el elemento del DOM, lo destruye, por lo que ejecutaria el `ngOnDestroy`
  - `*ngFor`
  - `*ngSwitch`

  Directivas de atributos son los atributos que se ponen entre [] o ():  
   `[ngStyle], [ngClass], (click), [(ngModel)]`  
  Tambien se pueden crear directivas personalizadas.
  **(ver carpeta 11-directivasApp)**

- **ngContainer**: nos permite usar directivas estructurales sin añadir ningun
  elemento extra en el DOM, solo se añadirá cuando la directiva lo dictamine.

  ```html
  <ng-container *ngIf="condicion">
    <p>Hola</p>
  </ng-container>
  ```

- **ngTemplate**: nos permite definir un template que solo se va renderizar
  cuando nosotros se lo especifiquemos usando las directivas estructurales.

  ```html
  <ng-container *ngIf="condicion" ; else miTemplate>
    <p>Hola</p>
  </ng-container>
  <ng-template #miTemplate>
    <p>Adios</p>
  </ng-template>
  ```

- **ngContent**: para renderizar elementos en los componentes hijos:  
  en el html del componente hijo:  
  `<ng-content></ng-content>`  
  en el html del componente padre:  
   `<app-hijo>
		<div> {{ user.name }} </div>
	</app-hijo>`  
  se renderizara el div donde este el ngContent del componente hijo.

- **FORMULARIOS** (ver carpeta 06-formulariosApp)  
  hay 2 formas de trabajar con ellos:

  - **Formularios Template** son mas simples y angular se encarga de
    manejar la mayor parte del formulario de manera automatica,
    igualmente la mayor parte de la logica esta en el html.
    Para algo sencillo seria una mejor opcion.
  - **Formularios Reactivos** dan mas control y permiten una mejor
    validacion, procura que el html sea lo mas basico posible y
    la mayor parte de la logica esta en el componente de Typescript,
    angular no hace todo de manera automatica sino que yo debo
    indicarle como trabaja

- **HOOKS** (eventos del ciclo de vida): son metodos que se ejecutan
  durante el ciclo de vida de un componente.
  (ver carpeta 08-lifecycles-hooks)

  - **ngOnChanges**: se ejecuta antes del ngOnInit y cuando una o mas
    de sus propiedades que estan enlazadas, cambian.
    Se debe usar en conjunto con el @Input.

  - **ngOnInit**: es el metodo que se ejecuta al cargar el componente y
    despues del primer ngOnChanges.
    Primero se ejecuta el constructor y luego el ngOnInit.
    Usualmente se usa para hacer peticiones http.

  - **ngDoCheck**: se ejecuta cuando se produce algun cambio en
    el componente o en la aplicacion de angular en general

  - **ngAfterContentInit**: se ejecuta despues de que el contenido del
    componente se ha inicializado.

  - **ngAfterContentChecked**: se ejecuta despues de que el contenido del
    componente se ha chequeado.

  - **ngAfterViewInit**: se ejecuta despues de que se ha cargado el template.
    Se usa para inicializar elementos que se encuentran en el DOM.
    Normalmente se usa en conjunto con el @ViewChild.

  - **ngAfterViewChecked**: se ejecuta despues de que el template del
    componente se ha chequeado.

  - **ngOnDestroy**: se ejecuta justo antes de que el componente sea
    destruido. Es util para hacer limpieza de informacion.
    Cuando se oculta un componente usando el \*ngIf, esto destruye
    el componente, lo que hace que el ngOnDestroy se dispare.

- `@Input` y `@Output` permiten la comunicacion entre componentes

  - `@Input`: permite recibir informacion en el componente hijo desde
    el componente padre.

    En el componente padre:

    ```html
    <app-incrementador [valor]="progreso1"> </app-incrementador>
    ```

    la propiedad entre [] recibe el valor entre "",
    le paso la propiedad progreso1 del componente padre
    a la propiedad valor del componente hijo.

    En el componente hijo:

    ```typescript
    	@Input('valor') progreso: number = 40;
    	@Input() progreso: number = 40;
    ```

    Recibo un valor desde el componente padre, puede tener un valor por defecto.  
    Si quiero usar la propiedad con otro nombre, debo poner la referencia
    que espero entre los parentesis y pongo el nuevo nombre de la propiedad.  
    Si la referencia y la propiedad van a tener el mismo nombre,
    puedo dejar sin nombrar la referencia

  - `@Output`: permite emitir informacion desde el componente hijo hacia
    el componente padre.

    En el componente padre:

    ```html
    <app-incrementador (asignarValor)="progreso1 = $event"> </app-incrementador>
    ```

    la propiedad entre () emite el valor entre "",
    cuando se emite el evento asignarValor desde el componente hijo,
    asigna el valor del evento ($event) a la propiedad
    progreso1 del componente padre.

    En el componente hijo:

    ```typescript
    @Output('asignarValor') valorSalida: EventEmitter<number> = new EventEmitt();
    @Output() valorSalida: EventEmitter<number> = new EventEmitter();
    this.valorSalida.emit(20);
    ```

    emitir un valor desde el componente hijo hacia el componente padre.
    normalmente se emiten eventos que puedo escuchar desde el componente padre.
    si quiero usar la referencia con un nombre distinto al de la propiedad,
    debo poner el nuevo nombre de la referencia entre los parentesis.
    si la referencia y la propiedad van a tener el mismo nombre,
    puedo dejar sin nombrar la referencia.

- **CONTENT PROJECTION**: Proyeccion de contenido, es un patron que nos ayuda a
  insertar contenido en otros componentes, puedo enviar informacion desde el
  componente padre hacia el componente hijo y la renderiza donde esta la
  etiqueta `<ng-content>` segun el selector, la mejor forma de hacerlo es
  mediante atributos.  
  en el componente padre:

  ```html
  <app-card>
    <p selector1>Hola, soy el texto 1 de prueba</p>
    <p selector2>Hola, soy el texto 2 de prueba</p>
  </app-card>
  ```

  en el componente hijo:

  ```html
  <div>
    <ng-content select="[selector1]"></ng-content>
    <ng-content select="[selector2]"></ng-content>
  </div>
  ```

- Otra manera de transferir informacion entre componentes, puede ser mediante
  observables, por ej, un componente padre puede transferir informacion al
  observable y el observable se la comunica al hijo que va a estar suscrito
  y vicerversa.

- `@ViewChild`: busca el primer elemento del DOM que coincida con el selector,
  podemos seleccionar componentes, directivas, referencias locales, atributos,
  etiquetas. Similar al document.querySelector('selector').
  Se declara como propiedad pero se hace la asignacion en el ngAfterViewInit
  que es cuando el template ya esta cargado.  
  Se puede acceder a la instancia del componente hijo y se pueden llamar sus  
  propiedades y metodos para pasar datos al componente padre.  
  También puede ser usado para acceder al native element.  
  Ver más info [aquí](https://medium.com/@deepanshumehta003/transfer-data-from-child-to-parent-in-angular-16cb31837be6)

- `@ContentChild`: busca dentro del ngContent, es decir, busca el componente
  que se carga dinamicamente, puede ser un componente hijo.

- **CHANGE DETECTION**: es las estrategia que utiliza angular para saber cuando
  debe actualizar un componente o el template en caso de que los datos
  hayan cambiado. Este ciclo de deteccion es sincrono y en modo de desarrollo
  hace el chequeo 2 veces, en modo de produccion lo hace una vez.
  Lo que produce cambios en angular son: los eventos, peticiones http,
  setInterval, setTimeOut.
  Las estrategias son 2: - Default: establece la estrategia en CheckAlways (revisa todo el arbol) - OnPush: establece la estrategia en CheckOne (bajo demanda), saca al
  componente del ciclo de deteccion de cambios, angular no chequea este
  componente. Solo va a cambiar cuando una propiedad o @Input cambien,
  cuando el componente o uno de sus hijos ejecuta un evento, cuando
  un observable ligado a un async pipe emite un nuevo valor.
  Tener cuidado con los objetos y arrays porq se comparan por referencia, si
  cambia una propiedad no dectectara el cambio, por eso se debe crear
  una copia sobreescribiendo la propiedad.

- **HTTP INTERCEPTORS**: es un servicio que intercepta las peticiones http,
  funciona como un middleware de peticiones, se pone en el medio de cualquier
  llamada http que se realiza a traves de la aplicacion para implementar algo
  en concreto. Por ej, se puede usar para mostrar el loading, o para agregar
  atributos en las cabeceras.

- **RESOLVER**: Es un mecanismo que se encarga de que los datos esten listos cuando
  la navegacion llega a un componente, el ciclo de vida de este componente no
  empezara hasta que los datos esten listos. Es una interface que las clases
  pueden implementar para ser un proveedor de datos. Se debe usar con el
  router para resolver datos durante la navegacion. Se debe implementar un
  metodo resolve() que se invoca cuando comienza la navegacion. El router
  espera a que se resuelvan los datos antes de que finalmente active la ruta.

- `ng build`: realiza diferentes acciones:

  - Tree shaking: elimina los componentes que no se usan.
  - Uglify: hace el codigo dificil de leer.
  - Minification: minifica el codigo.
  - Bundling: junta todos los archivos en un solo archivo.
  - Production mode: deja solo lo necesario para produccion, todo aquello
    orientado al desarrollo se elimina.

- **Signals**: una nueva forma de definir propiedades y manejar su estado,
  detectan el cambio de manera granular y solo cambian esa propiedad en toda
  la aplicación.  
  Se debe importar `import { signal } from '@angular/core';` y
  `import { computed } from '@angular/core';` para definir una señal computada.
  ```typescript
  /* para obtener el valor de la señal debo poner los parentesis
  al final, ej: this.counter() */
  counter = signal(0);
  /* crear una señal computada, es decir, basada en otras señales,
  si las otras señales cambian, esta señal se actualiza tambien.
  Esta propiedad seria de SOLO lectura */
  squareCounter = computed(() => this.counter() ** 2);
  /* Se ejecuta cada vez que una de las señales, a la cual se
  hace referencia, cambia.
  Se ejecuta una vez cuando se monta el componente.
  Tiene una limpieza automatica de los efectos */
  counterChangedEffect = effect(() => {
    console.log('effect', this.counter());
  });
  add() {
    // actualizar el valor de la señal, teniendo disponible el valor actual
    this.counter.update((value) => value + 1);
  }
  reset() {
    // asignar directamente un valor a la señal
    this.counter.set(0);
  }
  ```
  ```html
  <!-- para obtener el valor de la señal debo poner los parentesis
  al final, ej: counter() -->
  <h1>Counter: {{ counter() }}</h1>
  <h2>Square counter: {{ squareCounter() }}</h2>
  <button (click)="reset()">Reset</button>
  <button (click)="add()">+1</button>
  ```

---

## Pruebas

- Angular usa Jasmine como framework de pruebas

- Tipos de tests:

  - **Unitarias:** probar segmentos independientes de la aplicacion
  - **Integracion**: probar 2 o mas componentes
  - **End to end (e2e)**: probar todo el proceso para realizar una tarea

- `ng test`: levanta el servidor de pruebas, abre chrome y muestra el
  resultado de todas las pruebas de la aplicacion

- `ng test --code-coverage`: levanta el servidor de pruebas, abre chrome y
  muestra el resultado de todas las pruebas de la aplicacion,
  tambien muestra cuanto de nuestro codigo esta cubierto con pruebas.  
  cCrea una carpeta llamada coverage y en el index.html se muestra la covertura

- para evitar que se ejecute algun test, puedo poner una x antes de la
  prueba que no quiero ejecutar, ej:  
  `xdescribe()` ò `xit()`

---

## Buenas practicas

### Usar `trackBy` en el `*ngFor`

Me permite renderizar solo los elementos nuevos o que hayan cambiado,
y no todos los elementos.  
En el archihvo HTML:

```html
<div *ngFor="let item of items; trackBy: trackByFn">
  {{item.id}} - {{item.name}}
</div>
```

en el archivo TS:

```typescript
trackByFn(index: number, item: any) {
	return index; // or item.id for objects
}
```

En la funcion debo devolver un identificador unico para que pueda
reconocer el nuevo elemento o el que cambió.

### Desuscribirse de los observables

Siempre que usemos el metodo `subscribe` deberiamos usar el metodo `unsubscribe`,
normalmente en el `ngOnDestroy()`, ej:

```typescript
  data$: Observable<any> = this.usersService.getData();
  dataSubscription: Subscription | undefined;
  ngOnInit(): void {
    this.dataSubscription = this.data$.subscribe((data) => {
      console.log(data);
    });
  }
  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
```

Otra forma seria usando el _takeUntil_, seria la manera recomendada ya que nos
permite desuscribirnos de varios observables cuando se destruye el componente, ej:

```typescript
  data$: Observable<any> = this.usersService.getData();
  users$: Observable<any> = this.usersService.getUsers();
  unsubscribe$ = new Subject<void>();
  ngOnInit(): void {
    this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      console.log(data);
    });
    this.users$.pipe(takeUntil(this.unsubscribe$)).subscribe((users) => {
      console.log(users);
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
```

Podria crear una clase para manejar las desuscripciones.  
[Ver aquí](https://www.youtube.com/watch?v=wDAmfqnIrck&t=1s)

### Usar el pipe async

Usar el pipe async porq permite suscribirse a un observable o promesa y retorna el
ultimo valor que ha emitido, usa el valor del resultado en el template, ademas,
permite desuscribirse automaticamente del observable cuando se destruye el componente.  
La desventaja es que es un poco mas complejo hacer los tests. Ej:  
En el template:

```html
<div *ngFor="let user of users$ | async">
  <div>Name: {{ user.name }}</div>
  <div>Username: {{ user.username }}</div>
</div>
```

En el archivo TS:

```typescript
users$: Observable<string[]>;
constructor( private usersService: UsersService ) {
	this.users$ = this.usersService.getUsers();
}
```

otro ejemplo:

```html
<ng-container *ngIf="user$ | async as user; else loading">
  {{ user.name }} {{ user.lastName }}
</ng-container>
<ng-template #loading> Loading... </ng-template>
```

### Conocer el ciclo de deteccion de cambios de Angular

Para algunos componentes podria usar `onPush`, en vez del default.  
Para cambiarlo voy al componente y en el decorador `@Component()`, agrego
la propiedad:  
`changeDetection: ChangeDetectionStrategy.OnPush`

### Usar `ngSrc` en las imágenes

Cambiar el src de las imágenes por el ngSrc desde Angular 15 para optimización
de imágenes y lazy load por defecto.  
Recomendado poner el ancho y el alto para que deje el espacio para la imagen y
no dé saltos la página.

```html
<img [ngSrc]="product.image" width="640" height="480" />
```

### Usar los archivos environment

Para declarar las variables en ambiente de desarrollo y de produccion,
Angular hara el cambio por mi cuando se haga el build de produccion.

### Para la optimizacion de angular puedo hacer:

- Lazy loading
- Optimizacion de imagenes
- Minizar bundles
- Production mode
- Strict mode

Usar el cdk de angular para distintas funcionalidades o componentes.

---

## Errores

- Si tengo un error con el tamaño del bugdet de la aplicacion al correr
  ng build, me indica que la aplicacion esta muy pesada, si igual quiero
  continuar y solucionar el error, puedo ir al archivo **angular.json**, dentro
  de **"budgets"**, puedo ponerle un valor mas alto a **"maximumError"**

- `Property 'x' has no initializer and is not definitely assigned in the constructor`  
  Para este error, la mejor solución es dar un valor por defecto a la propiedad.

---

## Angular material:

libreria de componentes, ya estan estilizados y funcionales.  
En la [página](https://material.angular.io/) se ve la documentacion, para su uso:  
`ng add @angular/material`

- seleccionar un tema, se puede cambiar despues.
- dar si en la tipografia global
- dar si en las animaciones

Ver en el package.json en "dependencies" que este "@angular/material".  
 Se trabaja a traves de la importacion de modulos, por ej:  
`import { MatSliderModule } from '@angular/material/slider';`  
 Se declara en los imports y si se requiere en los exports.

**CDK (Component Dev Kit)**: es un conjunto de funcionalidades para construir
componentes UI.

**Angularflex**: trabajar con el flex de Angular, ejecuto:  
`npm i -s @angular/flex-layout @angular/cdk`

## Primeng:

libreria de componentes, ya estan estilizados y funcionales.
En la [pagina](https://primefaces.org/primeng/) se ve la documentacion, para su uso.  
Para instalarlo en nuestro proyecto:  
`npm install primeng --save`  
`npm install primeicons --save`  
Revisar en el package.json dentro de "dependencies" que estan "primeicons" y "primeng".  
Dentro del **angular.json** en **"styles"** pongo las siguientes lineas:

    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/saga-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css"

El tema puede cambiar dependiendo del que yo quiera usar.  
Se importa el componente que se quiere utilizar en un modulo, ej:  
`import { ButtonModule } from 'primeng/button'`  
y se usa segun la documentacion, ej:  
`<button pButton type="button" label="Click" ></button>`
Para usar los colores o variables que usa el tema de primeNg
en mi CSS, voy a la ruta:  
`"node_modules/primeng/resources/themes/saga-blue/theme.css"`

Si quiero usar el flex de primeNg que me permite tener clases
disponibles en el HTML para usar como flexbox, entonces ejecuto:  
`npm install primeflex --save`  
Revisar en el package.json dentro de "dependencies" que esta "primeflex".  
Dentro del **angular.json** en **"styles"** pongo la siguiente linea:  
`"node_modules/primeflex/primeflex.css"`

## Rxjs:

libreria de Javascript para crear programas asincronos y basados en
eventos usando secuencias de observables, proporciona operadores para el
manejo de los observables. Nos permite implementar programacion
reactiva en Angular. La programacion reactiva esta orientada al manejo
de datos asincronos y la propagacion de los cambios. Se trabaja a traves de
eventos y suscribirse a ellos, para escuchar cuando se emitan los datos
y ejecutar algo.  
Los operadores RxJS nos permiten transformar los datos que se emiten y  
trabajan sobre el flujo de datos, no con el valor final emitido.

### Operadores rxjs

Se deben utilizar bajo el operador pipe.
Se trabajan sobre el observable.

- **map** funciona similar al map de JS, para transformar la información.

- **filter** funciona similar al filter de JS, para filtrar la información.

- **tap** dispara un efecto secundario, pero devuelve el mismo valor del observable,
  es decir, no lo modifica.

- **delay**, permite hacer un retardo del observable.

- **merge**, agrupa el resultado de 2 o más observables, independiente de
  cual observable termine primero y ese será el orden del resultado.

- **concat**, agrupa el resultado de 2 o más observables, esperando que
  el primer observable se complete, para continuar con el segundo y así
  sucesivamente y ese será el orden del resultado.

- **switchMap**, permite cambiar a un nuevo observable cada vez que se
  emite un valor de un observable, se puede usar el valor del observable
  dentro del switchMap y así tenerlo disponible para el nuevo observable.

- **takeUntil**, permite tomar un número específico de valores emitidos
  por un observable, o tomar valores hasta que se emita un valor específico
  de otro observable. Es útil para cancelar una suscripción a un observable
  cuando ocurre un evento específico.

- **single**, permite tomar un solo valor que cumpla una condición y
  luego completa el observable. Es útil para recuperar un solo valor o
  para detectar un valor específico en un flujo de datos.Emite un error
  si no se cumple la condición.

- **startWith**, permite emitir un valor o conjunto de valores antes que
  se empiecen a emitir los valores del observable. Es útil para establecer
  un valor inicial o proporcionar un contexto para los valores emitidos posteriormente.

- **fromEvent**, permite crear un observable a partir de un evento de un
  elemento del DOM. Util para transformar los eventos en un flujo de datos observable.

- **combineLatest** (está deprecado y en la versión 8 de rxjs será sustituido
  por combineLatestWith), combina el último valor de cada observable en un único valor.

- **concatWith**, permite concatenar 2 o más observables, devuelve un
  nuevo observable de manera secuencial, es decir, espera a que el
  observable anterior se complete antes de empezar a emitir los valores
  del siguiente observable.

- **share**, para cachear los datos del observable.  
  [Ver aqui](https://www.youtube.com/watch?v=uBaec1OcsZI&list=PL_9MDdjVuFjEscTzZSLo6upnX1AbHj-dl&index=25)
- **Subject** es un observable y un observer porq permite suscribirse
  a él y también permite emitir valores a través del método next.

- **BehaviorSubject** a diferencia del subject normal, éste siempre tiene
  un valor inicial.

## Eslint y prettier:

agregar linter y formateador a Angular.  
(ver youtube, lista reproduccion angular),  
(ver https://github.com/jimyhdolores/config-eslint-prettier-husky-angular)

## Mapbox:

API para el uso de mapas.  
Pagina y documentacion: [mapbox.com](https://www.mapbox.com/)  
(ver carpeta 09-mapasApp)

- Para instalarlo en mi proyecto:  
  `npm install mapbox-gl --save`
- Poner el link en el head del HTMl (como Bootstrap)
- Para tener el tipado de typescript, cuando uso los elementos del Mapbox:  
  `npm i --save-dev @types/mapbox-gl`

## ng2charts:

Libreria para usar graficas en Angular.  
Pagina y documentacion: [valor-software.com/ng2-charts](https://valor-software.com/ng2-charts/)  
(ver carpeta 10-graficasApp)

- Para instalarlo en el proyecto  
  `npm install --save ng2-charts`
- Ejecutar  
  `npm install --save chart.js`
- Para usarlo hay que importarlo en el modulo en el que lo vamos a utilizar:
  ```typescript
  import { NgChartsModule } from 'ng2-charts';
  imports: [NgChartsModule];
  ```
- Para resolver el warning que sale en la compilacion, si lo tenemos,
  abro el angular.json, en "architect", en "build", en "options",
  escribo:  
  `"allowedCommonJsDependencies": ["chart.js"]`

## ngx-charts:

Libreria para usar graficas en Angular.  
Pagina y documentacion: swimlane.gitbook.io/ngx-charts/  
Github: github.com/swimlane/ngx-charts

---

## Victor

- puedo agregar estilos, clases y demas:

  ```html
  <div [style.background]="marca.precio < 80 ? 'green' : 'red'"></div>
  <div [class.precioAlto]="marca.precio >= 80"></div>
  ```

- Poner estilo a un elemento, ej:

  ```html
  <p [ngStyle]="{background: white}">Hola</p>
  <p [ngStyle]="{ background: !marca.nombre ? 'white' : 'black'}">Hola</p>
  ```

- Poner clases a un elemento, ej:
  ```html
  <p [ngClass]="{'precioAlto': marca.precio > 80}">Hola</p>
  ```

## Directivas:

Es una funcionalidad disponible para las vistas o archivos html, se debe
importar el CommonModule de `@angular/common`

- \*ngIf: condicional if, cuando quita el elemento, lo destruye, por
  lo que ejecutaria el ngOnDestroy ej:

  ```html
  <div *ngIf=" heroeBorrado; else noBorrado ">
    <h3>Héroe Borrado: {{heroeBorrado}}</h3>
  </div>
  <ng-template #noBorrado> No ha borrado nada </ng-template>
  ```

- \*ngFor: bucle for, ej:

  ```html
  <span *ngFor="let marca of marcas; let i = index"> {{marca.nombre}} </span>
  ```

- \*ngSwitch: condicional switch, ej:
  ```html
  <ul [ngSwitch]="marca">
    <li *ngSwitchCase="mercedes">Mercedes</li>
    <li *ngSwitchCase="bmw">BMW</li>
    <li *ngSwitchCase="audi">Audi</li>
  </ul>
  ```

## Formularios:

```html
<form #formContact="ngForm" (ngSubmit)="onSubmit()">
  <input
    type="text"
    name="nombre"
    #nombre="ngModel"
    [(ngModel)]="usuario.nombre"
    required
  />
  <span [hidden]="nombre.valid || nombre.pristine"
    >Este campo es requerido</span
  >
  <input
    type="text"
    name="apellido "
    #apellido="ngModel"
    [(ngModel)]="usuario.apellido"
    required
  />
  <span [hidden]="apellido.valid || apellido.pristine"
    >Este campo es requerido</span
  >
  <input type="submit" value="Enviar" [disabled]="formContact.form.invalid" />
</form>
```

La funcion `onSubmit` estaria en el archivo .component.ts
cargar FormsModule de `@angular/forms`

## @Input:

recibir datos desde el componente padre en el componente hijo,
se debe importar donde se va a utilizar  
desde la vista del componente padre:  
(app-header seria el componte hijo, pasa un string)  
`<app-header [nombreEnHijo]="'Juan Pablo'"></app-header>`  
(pasa una propiedad del componente padre que esta en la logica)  
`<app-header [nombreEnHijo]="nombreEnPadre"></app-header>`  
Desde la logica del componente hijo:  
`@Input() nombreEnHijo: string = ''`  
Si lo quiero recibir con un nombre distinto debo poner:  
`@Input('nombreEnHijo') otroNombre: string = ''`

## @Output:

Pasar datos desde el componente hijo al componente padre,
se debe importar donde se va a utilizar.  
desde la vista del componente hijo:  
`<button (click)="seleccionar(nombre)"></button>`  
desde la logica del componente hijo:  
(emito el evento cuando se pulsa el boton y se envia al padre)

```typescript
@Output() eventoEnHijo = new EventEmitter()
seleccionar(nombre){
	this.eventoEnHijo.emit({nombre})
}
```

desde la vista del componente padre:  
(app-header seria el componte hijo, escucha el evento en el componente hijo
eventoEnHijo y lanza el metodo en el componente padre metodoEnPadre)  
`<app-header (eventoEnHijo)="metodoEnPadre($event)"></app-header>`  
desde la logica del componente padre:

```typescript
nombre: string;
metodoEnPadre(event){
	this.nombre = event.nombre
}
```

- eventos:

  - click: cuando se da click
  - blur: cuando se deja de hacer foco sobre un input
  - keyup: cuando suelto una tecla
  - keyup.enter: cuando suelto la tecla enter

- angular2-moment: libreria para formatear fechas a traves de pipes  
  `npm install --save angular2-moment`  
  importar MomentModule de angular2-moment para usarlo

- angular-file-uploader: libreria para subir archivos  
  (ver documentacion en la pagina)

- sweetalert2.github.io: libreria para alertas de dialogo  
  (ver documentacion en la pagina)

---

## Backend mean fernando

## Nodemon:

lanzar el servidor de node en modo de desarrollo  
(ver documentacion en la pagina)  
`npm install -g nodemon` => para instalar de manera global  
`npm install --save-dev nodemon` => para instalar como dependencia de desarrollo  
`nodemon index.js` => estando en la carpeta del proyecto para lanzar el servidor

puedo poner el siguiente script dentro del **package.json** `"dev": "nodemon index.js"`
para lanzar el servidor en modo desarrollo  
`npm run dev` => para ejecutar el script

puedo poner el siguiente script dentro del **package.json** `"start": "node index.js"`
para lanzar el servidor en modo produccion. Este script es el que ejecutaria el
hosting para saber su punto de partida  
`npm start` => para ejecutar el script

- en el package.json:

  - "bcryptjs": hacer encriptaciones de datos
  - "cors": aceptar peticiones que vengan de otros dominios
  - "dotenv": crear variables de entorno
  - "express": framework de node
  - "express-validator": validaciones
  - "jsonwebtoken": generar tokens, una forma de autenticacion pasiva
  - "mongoose": gestor que ayuda a hacer todas las interacciones con la base de datos de mongo
  - "express-fileupload": ayuda a subir archivos
  - "uuid": generar un id unico

- en el archivo .env:

  - PORT: el puerto donde se levanta el servidor
  - BD_CNN: la conexion a la base de datos
  - SECRET_JWT_SEED: la llave secreta para generar los tokens de JWT

- www.mongodb.com/atlas/database: MongoDB Atlas es una base de datos Mongo
  en la nube, se crea el cluster (grupo de servidores) y se configura
  la base de datos

- MongoDB Compass: aplicacion de escritorio para visualizar la base de datos

- creo el build de produccion en angular y copio los archivos que estan dentro
  de la carpeta dist y la carpeta con el nombre de la aplicacion y los pego en
  la carpeta public de mi backend, antes borro los archivos que estaban alli.
  debo hacer algunos cambios (ver udemy curso angular de fernando herrera)

- un token es usado para mantener de forma pasiva el estado del usuario
  en nuestra aplicacion

- para resolver el problema cuando se refresca la pagina, ver el archivo
  index.js de la carpeta 14-admin-server de 05-angular (ver video
  Backend - servir una SPA en la seccion 19: optimizaciones, lazyload y
  despliegues del curso angular avanzado de fernando herrera)
