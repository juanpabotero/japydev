---
id: 'php'
title: 'PHP'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/php.svg'
---

Es un lenguaje de programación interpretado, de propósito general de alto nivel,
que se puede utilizar para desarrollar aplicaciones web, aplicaciones de escritorio,
aplicaciones móviles, etc. Es open source y multiplataforma.
Puede o no ser orientado a objetos. Tiene funciones para conectarse a bases de datos
ya definidas, sin importar librerias.

`php -v` para ver la versión de PHP instalada.

`php -S localhost:3000` para lanzar el servidor de PHP en el puerto 3000.
Se lanza desde la raiz del proyecto que me interesa.

## Herramientas

### AMP

AMP Stack: Apache, MySQL, PHP.

Los archivos PHP que se van a levantar con el servidor de apache deben estar en la
carpeta `C:/apache/htdocs`.

Reiniciar el servicio cuando se hacen cambios en los archivos de configuración.

### Composer

Es un gestor de dependencias para PHP. Es equivalente a NPM en JavaScript.

- `composer -v` ver la versión de composer.
- `composer init` crear un archivo composer.json.
- `composer install` instalar las dependencias de un proyecto.
- `composer require package` instalar una dependencia.
- `composer remove package` eliminar una dependencia.
- `composer update` actualizar las dependencias de un proyecto.
- `composer dump-autoload` actualizar el archivo autoload.php.
- `composer show` ver las dependencias instaladas.

### Intervention Image

Es una libreria para manipular imágenes.  
`composer require intervention/image` instalar la libreria.

### Packagist

Es un repositorio de paquetes de PHP. Para buscar paquetes de PHP que necesitemos.

## Conceptos

Para escribir código PHP se debe usar la etiqueta `<?php ?>`. En scripts que solo tengan código PHP
se puede omitir la etiqueta de cierre `?>`, porque existe una vulnerabilidad que permitiria
inyectar código malicioso en el código PHP.  
Cada instrucción debe terminar con `;`.  
Los comentarios se hacen con `//` o `/* */`.

- `echo "Hola Mundo";` imprimir en pantalla.
- `echo "<h1>Hola</h1>";` imprimir en pantalla etiquetas HTML.
- `print "Hola Mundo";` imprimir en pantalla.
- `print_r($variable);` imprimir en pantalla el contenido de una variable.
- `include` para importar un archivo. Si el archivo no existe, se muestra un warning
  y se sigue ejecutando el código. Se usa para importar algo que no es tan necesario
  para que el código funcione. `include_once` evita que se importe el archivo mas
  de una vez.
- `require` para importar un archivo. Si el archivo no existe, se muestra un error
  y se detiene la ejecución del código. Se usa para importar algo que es necesario
  para que el código funcione. `require_once` evita que se importe el archivo mas
  de una vez.
- `exit` para detener la ejecución del código.
- `die()` para detener la ejecución del código.
- `declare(strict_types=1);` se usa para habilitar el tipado estricto
- `header('Location: /pagina')` para redireccionar a otra página. Se puede agregar
  un query string `header('Location: /pagina?name=Juan')`.
- `__DIR__` -> devuelve la ruta absoluta de la carpeta donde se encuentra el archivo que lo llama.
- `__FILE__` -> devuelve la ruta absoluta del archivo que lo llama.
- `__LINE__` -> devuelve el número de línea donde se encuentra.
- `__FUNCTION__` -> devuelve el nombre de la función donde se encuentra.
- `__CLASS__` -> devuelve el nombre de la clase donde se encuentra.
- `__METHOD__` -> devuelve el nombre del método donde se encuentra.
- `__NAMESPACE__` -> devuelve el nombre del namespace donde se encuentra.

### Superglobales

Son variables que están disponibles en todo el script.

- `$_GET` acceder a los datos enviados por el método GET. También sirve para leer
  los query strings de la URL.
- `$_POST` acceder a los datos enviados por el método POST.
- `$_SERVER` acceder a los datos del servidor.
- `$_SESSION` acceder a los datos de la sesión.
- `$_COOKIE` acceder a los datos de las cookies.
- `$_FILES` acceder a los datos de los archivos.
- `$_ENV` acceder a los datos del entorno.
- `$_REQUEST` acceder a los datos de las peticiones.
- `$_GLOBALS` acceder a todas las variables globales.

```php
<?php
  // $_GET
  echo $_GET['name'];
  // $_POST
  echo $_POST['name'];
  // $_SERVER
  echo $_SERVER['SERVER_NAME'];
  // $_SESSION
  session_start();
  $_SESSION['name'] = 'Juan';
  echo $_SESSION['name'];
  // $_COOKIE
  echo $_COOKIE['font-size'];
  // $_FILES
  echo $_FILES['file']['name'];
  // $_ENV
  echo $_ENV['USER'];
  // $_REQUEST
  echo $_REQUEST['name'];
  // $_GLOBALS
  echo $GLOBALS['name'];
?>
```

### Variables

Se definen con el signo `$` y el nombre de la variable.  
No se puede empezar con un número, se usa camelCase o snake_case.  
Se puede reasignar el valor de una variable.

Para definir una constante o variable que no se puede reasignar se usa `define('NAME', 'value');`.
Tambien se puede usar `const NAME = 'value';` a partir de PHP 5.3 pero no es tan común.
Es buena práctica usar mayúsculas y snake_case para el nombre de las constantes.

- `gettype($variable);` imprimir el tipo de dato de una variable.
- `var_dump($variable);` imprimir el tipo de dato y el valor de la variable.
- `isset($variable);` saber si una variable está definida.
- `is_null($variable);` saber si una variable es null.

```php
<?php
  // string
  $name = 'Juan';
  $name = 'Pablo';
  define('NAME', 'Juan');
  const NAME = 'Juan';
  // int
  $age = 25;
  // float
  $height = 1.85;
  // boolean
  $isMale = true;
  // null
  $salary = null;
  // array
  $people = ['Juan', 'Pablo', 'Pedro'];

  echo $name;
  var_dump($name);
  echo NAME;
?>
```

### Tipos de datos

PHP es un lenguaje de tipado dinámico, no se especifica el tipo de dato de la variable.
PHP se encarga de asignar el tipo de dato a la variable.

#### String

Se puede usar comilla doble o simple para definir un string.

```php
<?php
  $name = 'Juan';
  $name = "Juan";
?>
```

Se puede concatenar con `.` o interpolación con o sin `{}`. Si se quiere usar interpolación
se debe usar comilla doble. Es más común usar el punto porque en ciertos casos la
interpolación puede llevar a una vulnerabilidad.

```php
<?php
  $name = 'Juan';
  echo 'Hola ' . $name;
  echo "Hola $name";
  echo "Hola {$name}";
?>
```

- `strlen($name)` para saber la longitud de un string.
- `trim($name)` para eliminar los espacios en blanco al inicio y al final de un string.
- `strtoupper($name)` para convertir un string a mayúsculas.
- `strtolower($name)` para convertir un string a minúsculas.
- `substr($name, 0, 2)` para obtener una parte de un string.
  (string, posición inicial, cantidad de caracteres)
- `str_replace('o', 'a', $name)` para reemplazar una parte de un string.
  (valor a reemplazar, valor de reemplazo, string)
- `strpos($name, 'o')` para obtener la posición de una parte de un string.

#### Números

Se pueden usar números enteros o decimales.

```php
<?php
  $age = 25;
  $height = 1.85;
?>
```

- `var_dump($age)` para saber el tipo de dato de una variable.
- `is_int($age)` para saber si una variable es de tipo entero.
- `is_float($height)` para saber si una variable es de tipo decimal.
- `is_numeric($age)` para saber si una variable es de tipo numérico.
- `round($height, 1)` para redondear un número decimal.
  (valor, cantidad de decimales).
- `ceil($height)` para redondear un número decimal hacia arriba.
- `floor($height)` para redondear un número decimal hacia abajo.
- `rand(1, 10)` para generar un número aleatorio entre 1 y 10.
- `intval($variable)` para convertir a un entero.
- `M_PI` para obtener el valor de PI.

#### Boolean

Los valores true se representan con 1 y false y null se representan como vacio,
no devuelven ningun valor.

```php
<?php
  $isMale = true;
?>
```

#### Null

Null en mayúscula o minúscula es lo mismo.  
`is_null($variable)` para saber si una variable es null.

```php
<?php
  $salary = null;
  $isActive = is_null($salary);
?>
```

#### Array

Existen 2 tipos de arreglos, los indexados y los asociativos. Los indexados son
los que tienen solo valor. Los asociativos son los que tienen clave y valor y son
equivalentes a los objetos de JavaScript.  
Los arrays pueden contener cualquier tipo de dato.
Los arrays pueden tener claves alfanuméricas.

```php
<?php
  // indexados
  $people = ['Juan', 'Pablo', 'Pedro'];
  $people = array('Juan', 'Pablo', 'Pedro');
  $people = array('Juan', 25, true);
  // asociativos
  $people = [
    'name' => 'Juan',
    'age' => 25,
    'informacion' => [
        'tipo' => 'premium',
        'disponible' => 100
    ]
  ];
  // Util para ver el contenido de un array
  echo "<pre>";
  var_dump($people);
  echo "</pre>";
?>
```

- `$people[] = 'Pablo'` añadir un elemento al final de un array.
- `$people[0]` obtener un elemento de un array indexado.
- `$people[3] = "Pepito"` añadir un elemento a un array indexado.
- `$people['name']` obtener un elemento de un array asociativo.
- `$people['informacion']['tipo']` obtener un elemento de un array asociativo.
- `$people['name'] = 'Pablo'` reasignar el valor o añadir un elemento a un array asociativo.
- `is_array($people)` revisa si una variable es de tipo array.
- `empty($people)` revisa si un array está vacío.
- `isset($people)` revisa si un array esta creado o una propiedad esta definida.
- `isset($people['age'])` revisa si un array esta creado o una propiedad esta definida.
- `count($people)` muestra la cantidad de elementos de un array.
- `array_push($people, 'Pedro')` agregar un elemento al final de un array.
- `array_pop($people)` eliminar el último elemento de un array y lo devuelve.
- `array_unshift($people, 'Pedro')` agregar un elemento al inicio de un array.
- `array_shift($people)` eliminar el primer elemento de un array y lo devuelve.
- `sort($people)` ordenar un array de forma ascendente.
- `rsort($people)` ordenar un array de forma descendente.
- `asort($people)` ordenar un array asociativo por valor de forma ascendente.
- `arsort($people)` ordenar un array asociativo por valor de forma descendente.
- `ksort($people)` ordenar un array asociativo por clave de forma ascendente.
- `krsort($people)` ordenar un array asociativo por clave de forma descendente.
- `extract($people)` convertir un array asociativo en variables.
- `join(separador, $array)` unir los elementos de un array en un string.
- `in_array('Juan', $people)` buscar un elemento en un array.
- `array_search('Juan', $people)` buscar un elemento en un array.
- `array_slice($people, 1, 2)` obtener una parte de un array.
- `array_splice($people, 1, 2)` eliminar una parte de un array.
- `array_merge($people, $people2)` unir dos arrays.
- `array_reverse($people)` invertir el orden de un array.
- `array_column($people, 'name')` obtener una columna de un array asociativo.
- `array_chunk($people, 2)` dividir un array en trozos.
- `array_key_exists('name', $people)` saber si existe una clave en un array asociativo.
- `array_keys($people)` obtener las claves de un array asociativo.
- `array_values($people)` obtener los valores de un array asociativo.
- `array_flip($people)` intercambiar las claves y los valores de un array asociativo.
- `array_unique($people)` eliminar los elementos duplicados de un array.
- `array_diff($people, $people2)` obtener la diferencia entre dos arrays.
- `array_intersect($people, $people2)` obtener la intersección entre dos arrays.
- `array_sum($people)` obtener la suma de los elementos de un array.
- `array_product($people)` obtener el producto de los elementos de un array.
- `array_reduce($people, fn($carry, $item) => $carry + $item)` reducir un array a un solo valor.
- `array_map(fn($item) => $item * 2, $people)` aplicar una función a cada elemento de un array.
- `array_filter($people, fn($item) => $item > 2)` filtrar los elementos de un array.
- `array_walk($people, fn($item) => $item * 2)` aplicar una función a cada elemento de un array.
- `array_fill(0, 10, 'Juan')` rellenar un array con un valor.
- `array_fill_keys(['name', 'age'], 'Juan')` rellenar un array asociativo con un valor.
- `array_pad($people, 10, 'Juan')` rellenar un array con un valor.
- `array_rand($people, 2)` obtener elementos aleatorios de un array.
- `array_rand($people)` obtener un elemento aleatorio de un array.
- `array_rand(array_flip($people), 2)` obtener elementos aleatorios de un array asociativo.
- `array_rand(array_flip($people))` obtener un elemento aleatorio de un array asociativo.

### Fechas

- `date('d-m-Y')` obtener la fecha actual.
- `date('y')` obtener el año actual en formato de 2 dígitos.
- `date('Y')` obtener el año actual en formato de 4 dígitos.
- `date('d-m-Y', strtotime('2021-01-01'))` obtener la fecha de una cadena.
- `date('d-m-Y', strtotime('+1 day'))` obtener la fecha actual más un día.
- `date('d-m-Y', strtotime('+1 week'))` obtener la fecha actual más una semana.
- `date('d-m-Y', strtotime('+1 month'))` obtener la fecha actual más un mes.
- `date('d-m-Y', strtotime('+1 year'))` obtener la fecha actual más un año.
- `date('d-m-Y', strtotime('next Monday'))` obtener el próximo lunes.
- `date('d-m-Y', strtotime('next Monday +1 week'))` obtener el próximo lunes más una semana.
- `date('d-m-Y', strtotime('next Monday +1 month'))` obtener el próximo lunes más un mes.
- `date('d-m-Y', strtotime('next Monday +1 year'))` obtener el próximo lunes más un año.
- `date('d-m-Y', strtotime('last Monday'))` obtener el lunes pasado.
- `date('d-m-Y', strtotime('last Monday -1 week'))` obtener el lunes pasado menos una semana.
- `date('d-m-Y', strtotime('last Monday -1 month'))` obtener el lunes pasado menos un mes.
- `date('d-m-Y', strtotime('last Monday -1 year'))` obtener el lunes pasado menos un año.
- `date('d-m-Y', strtotime('first day of this month'))` obtener el primer día del mes actual.
- `date('d-m-Y', strtotime('last day of this month'))` obtener el último día del mes actual.
- `date('d-m-Y', strtotime('first day of next month'))` obtener el primer día del mes siguiente.
- `date('d-m-Y', strtotime('last day of next month'))` obtener el último día del mes siguiente.
- `date('d-m-Y', strtotime('first day of last month'))` obtener el primer día del mes anterior.
- `date('d-m-Y', strtotime('last day of last month'))` obtener el último día del mes anterior.

### Operadores de incremento y decremento

- `$age++` incrementa en 1 el valor de la variable despues de ser utilizada.
- `++$age` incrementa en 1 el valor de la variable antes de ser utilizada..
- `$age--` decrementa en 1 el valor de la variable despues de ser utilizada.
- `--$age` decrementa en 1 el valor de la variable antes de ser utilizada.

```php
<?php
  $age = 25;
  echo $age++; // 25
  echo $age; // 26
  echo ++$age; // 27
?>
```

### Operadores de comparación

- `==` igual.
- `===` compara por valor y tipo de dato.
- `!=` diferente.
- `!==` compara por valor y tipo de dato.
- `<=>` spaceship. Devuelve -1 si el primer valor es menor, 0 si son iguales y 1 si el primer valor es mayor.
- `??` null coalescing. Devuelve el primer valor si existe, de lo contrario
  devuelve el segundo valor. Disponible desde la versión 7 de PHP.

```php
<?php
  $age = 25;
  $age2 = '25';
  var_dump($age == $age2); // true
  var_dump($age === $age2); // false
  var_dump($age != $age2); // false
  var_dump($age !== $age2); // true
  var_dump($age <=> $age2); // 0
  var_dump($age ?? $age2); // 25
?>
```

### Operadores lógicos

- `&&` and.
- `||` or.
- `!` not.

```php
<?php
  $age = 25;
  $name = 'Juan';
  if ($age >= 18 && $name === 'Juan') {
    echo 'Eres mayor de edad';
  }
?>
```

### Condicionales

- `if` para evaluar una condición.
- `else` para evaluar una condición en caso de que la condición del if no se cumpla.
- `elseif` para evaluar una condición en caso de que la condición del if no se cumpla.
- `switch` para evaluar una condición.
- Operador ternario: `condition ? true : false`.

Si se usa la sintaxis de `:` y `endif` se debe usar `elseif` en lugar de `else if`.

```php
<?php
  $age = 25;
  // if elseif
  if ($age >= 18) {
    echo 'Eres mayor de edad';
  } elseif ($age >= 16) {
    echo 'Eres adolescente';
  } else {
    echo 'Eres menor de edad';
  }
  // if elseif con otra sintaxis
  if ($age >= 18):
    echo 'Eres mayor de edad';
  elseif ($age >= 16):
    echo 'Eres adolescente';
  else:
    echo 'Eres menor de edad';
  endif;
  // switch
  switch ($age) {
    case 18:
      echo 'Eres mayor de edad';
      break;
    case 16:
      echo 'Eres adolescente';
      break;
    default:
      echo 'Eres menor de edad';
      break;
  }
  // operador ternario
  echo ($age >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
?>
```

### Ciclos

- `for` para ejecutar un bloque de código un número específico de veces.
- `while` para ejecutar un bloque de código mientras se cumpla una condición.
- `do while` para ejecutar un bloque de código al menos una vez y mientras se cumpla una condición.
- `foreach` para recorrer un array. Cuando se usa un foreach en un arreglo asociativo,
  la iteración es sobre los valores del arreglo, no sobre las llaves. Si se quiere
  iterar sobre las llaves se debe usar `foreach ($array as $key => $value)`.
- `break` para detener la ejecución de un ciclo.
- `continue` para saltar una iteración de un ciclo.

```php
<?php
  // for
  for ($i = 0; $i < 10; $i++) {
    echo $i;
  }
  // for con otra sintaxis
  for ($i = 0; $i < 10; $i++):
    echo $i;
  endfor;
  // while
  $i = 0;
  while ($i < 10) {
    echo $i;
    $i++;
  }
  // do while
  $i = 0;
  do {
    echo $i;
    $i++;
  } while ($i < 10);
  // foreach indexado
  $people = ['Juan', 'Pablo', 'Pedro'];
  foreach ($people as $person) {
    echo $person;
  }
  // foreach con otra sintaxis
  $people = ['Juan', 'Pablo', 'Pedro'];
  foreach ($people as $person):
    echo $person;
  endforeach;
  // foreach asociativo
  $person = [
    'name' => 'Juan',
    'age' => 25,
    'informacion' => [
        'tipo' => 'premium',
        'disponible' => 100
    ]
  ];
  foreach ($person as $value) {
    echo $value;
  }
  foreach ($person as $key => $value) {
    echo $key . ': ' . $value;
  }
?>
```

Ejemplo de foreach con PHP y HTML:

```php
<?php
  $productos = [
    [
      'nombre' => 'Tablet',
      'precio' => 200,
      'disponible' => true
    ],
    [
      'nombre' => 'Television 24"',
      'precio' => 300,
      'disponible' => true
    ],
    [
      'nombre' => 'Monitor Curvo',
      'precio' => 400,
      'disponible' => false
    ]
  ];

  foreach( $productos as $producto) { ?>
    <li>
      <p>Producto: <?php echo $producto['nombre']; ?> </p>
      <p>Precio: <?php echo "$" . $producto['precio']; ?> </p>
      <p><?php echo ($producto['disponible']) ? 'Disponible' : 'No Disponible';  ?> </p>
    </li>
    <?php
  }
?>
```

### Funciones

Las funciones no pueden acceder a las variables definidas por fuera de su scoope.
Tendriamos que pasarle la variable como parametro a la función.

- `function` para definir una función.
- `return` para retornar un valor de una función.
- `global` para acceder a una variable global dentro de una función. ???

```php
<?php
  // con parámetros por defecto
  function saludar($name = 'Juan', $age = 25) {
    return "Hola " . $name . " tienes " . $age . " años";
  }
  echo saludar();
  echo saludar('Pablo', 30);

  // con parametros y tipado
  function sumar(int $num1, int $num2): int {
    return $num1 + $num2;
  }
  echo sumar(1, 2);

  // parametros nombrados para PHP 8
  function sumar(int $num1, int $num2): int {
    echo $num1;
    return $num1 + $num2;
  }
  echo sumar(num2: 1, num1: 2);

  // ? indica que la función puede retornar o no un string
  function isAuthorized(bool $isAuth): ?string {
    return $isAuth ? 'Acceso permitido' : null;
  }
  echo isAuthorized(false);

  // puede haber union de tipos
  function isAuthorized(bool $isAuth): string|int {
    return $isAuth ? 'Acceso permitido' : 0;
  }
  echo isAuthorized(false);

  // con parámetros por defecto usando global ???
  $name = 'Juan';
  function saludar() {
    global $name;
    echo "Hola " . $name;
  }
  saludar();
?>
```

### Clases

Es una plantilla para crear objetos. Tienen propiedades y métodos.
Se define con PascalCase. Las caracteristicas más importantes de la programación
orientada a objetos son:

Abstracción: Es la capacidad de representar un objeto del mundo real en un programa.  
Encapsulamiento: Es la capacidad de agrupar datos y métodos en una clase.  
Herencia: Es la capacidad de una clase de heredar propiedades y métodos de otra.  
Polimorfismo: Es la capacidad de una clase de tener diferentes comportamientos.

- `class` definir una clase.
- `__construct` definir el constructor de una clase. Se llama automáticamente
  cuando se crea una instancia de la clase.
- `$this` hace referencia a la clase o instancia de la clase.
- `public` definir un método o propiedad pública. Se puede acceder y modificar en
  cualquier lugar (clase y objeto)
- `private` definir un método o propiedad privada. Solo pueden ser accedidos desde
  dentro de la misma clase que fueron definidos. No se puede acceder desde fuera de la clase ni desde clases que heredaron de ella.
- `protected` definir un método o propiedad protegida. Se puede acceder desde la misma
  clase o clases que heredaron de ella. No se puede acceder desde fuera de la clase.
- `static` definir un método o propiedad estática. Se puede acceder sin necesidad
  de instanciar la clase.
- `::` acceder a una propiedad o método estático.
- `self::` acceder a una propiedad o método estático de la misma clase.
- `static::` acceder a una propiedad o método estático de una clase hija.
- `parent` acceder a una propiedad o método dentro de la clase padre.
- `extends` heredar de una clase.
- `->` acceder a una propiedad o método de un objeto.
- `$objeto = new self;` crear una instancia de la clase que lo invoca.
- `$objeto = new static;` crear una instancia de la clase hija que lo invoca.

```php
<?php
  class Product {
    protected $name;
    public $price;
    public $available;
    public static $image = "image.jpg";

    public function __construct(string $name, int $price, bool $available) {
      $this->name = $name;
      $this->price = $price;
      $this->available = $available;
    }

    public static function getProductImage() {
        return self::$image;
    }

    public function getName(): string {
      return $this->name;
    }

    public function setName(string $name) {
      $this->name = $name;
    }

    public function showInfo() {
      return "El producto es: " . $this->name . " y su precio es: " . $this->price;
    }
  }

  // otra forma de definir una clase. Desde PHP 8
  class Product {
    public function __construct(
      protected string $name,
      public int $price,
      public bool $available
    ) {}
  }

  $product = new Product('Tablet', 200, true);
  $product->setName('Iphone');
  echo $product->getName();
  echo $product->showInfo();

  // acceder a una propiedad o metodo estáticos
  echo Product::$image;
  echo Product::getProductImage();
?>
```

#### Herencia

Permite crear nuevas clases a partir de otras clases existentes.

- `extends` para heredar de una clase.
- `parent` para acceder a una propiedad o método de la clase padre.

```php
<?php
  class Product {
    protected $name;
    public $price;
    public $available;
    public static $image = "image.jpg";

    public function __construct(string $name, int $price, bool $available) {
      $this->name = $name;
      $this->price = $price;
      $this->available = $available;
    }

    public static function getProductImage() {
        return self::$image;
    }

    public function getName(): string {
      return $this->name;
    }

    public function setName(string $name) {
      $this->name = $name;
    }

    public function showInfo() {
      return "El producto es: " . $this->name . " y su precio es: " . $this->price;
    }
  }

  class ProductDigital extends Product {
    public $downloadable;

    public function __construct(
      string $name,
      int $price,
      bool $available,
      bool $downloadable
    ) {
      parent::__construct($name, $price, $available);
      $this->downloadable = $downloadable;
    }

    public function showInfo() {
      return parent::showInfo() . " y es descargable";
    }
  }

  $product = new ProductDigital('Tablet', 200, true, true);
  echo $product->showInfo();
?>
```

#### Clases abstractas

Sirven para definir una clase base que se va a heredar pero no se puede instanciar.
Se usa para definir métodos que se deben implementar en las clases hijas.

- `abstract` para definir una clase o metodo abstracto.

```php
<?php
  abstract class Product {
    protected $name;
    public $price;
    public $available;
    public static $image = "image.jpg";

    public function __construct(string $name, int $price, bool $available) {
      $this->name = $name;
      $this->price = $price;
      $this->available = $available;
    }

    public static function getProductImage() {
        return self::$image;
    }

    public function getName(): string {
      return $this->name;
    }

    public function setName(string $name) {
      $this->name = $name;
    }

    abstract public function showInfo();
  }

  class ProductDigital extends Product {
    public $downloadable;

    public function __construct(
      string $name,
      int $price,
      bool $available,
      bool $downloadable
    ) {
      parent::__construct($name, $price, $available);
      $this->downloadable = $downloadable;
    }

    public function showInfo() {
      return "El producto es: " . $this->name . " y su precio es: " . $this->price;
    }
  }

  $product = new ProductDigital('Tablet', 200, true, true);
  echo $product->showInfo();
?>
```

#### Polimorfismo

Es la capacidad de una clase de tener diferentes comportamientos.

```php
<?php
  abstract class Product {
    protected $name;
    public $price;
    public $available;

    public function __construct(string $name, int $price, bool $available) {
      $this->name = $name;
      $this->price = $price;
      $this->available = $available;
    }

    public function getName(): string {
      return $this->name;
    }

    public function setName(string $name) {
      $this->name = $name;
    }

    abstract public function showInfo();
  }

  class ProductDigital extends Product {
    public $downloadable;

    public function __construct(
      string $name,
      int $price,
      bool $available,
      bool $downloadable
    ) {
      parent::__construct($name, $price, $available);
      $this->downloadable = $downloadable;
    }

    public function showInfo() {
      return "El producto es: " . $this->name . " y su precio es: " . $this->price . "y es descargable";
    }
  }

  class ProductPhysical extends Product {
    public $weight;

    public function __construct(
      string $name,
      int $price,
      bool $available,
      int $weight
    ) {
      parent::__construct($name, $price, $available);
      $this->weight = $weight;
    }

    public function showInfo() {
      return "El producto es: " . $this->name . " y su precio es: " . $this->price . "y pesa: " . $this->weight . "kg";
    }
  }

  $product = new ProductDigital('Tablet', 200, true, true);
  echo $product->showInfo();
  $product = new ProductPhysical('Tablet', 200, true, 2);
  echo $product->showInfo();
?>
```

### Interfaces

Sirven para definir un contrato que se debe cumplir en las clases que la implementan.

- `interface` para definir una interfaz.
- `implements` para implementar una interfaz.

```php
<?php
  interface Product {
    public function showInfo(): string;
  }

  class ProductDigital implements Product {
    public $name;
    public $price;

    public function __construct(string $name, int $price) {
      $this->name = $name;
      $this->price = $price;
    }

    public function showInfo(): string {
      return "El producto es: " . $this->name . " y su precio es: " . $this->price;
    }
  }

  $product = new ProductDigital('Tablet', 200, true, true);
  echo $product->showInfo();
?>
```

### Sanitizar y validar datos

- `filter_var($variable, validacion)` para validar un dato.
- `htmlspecialcharts($variable);` para escapar caracteres especiales. Es una forma de
  sanitizar datos, sobretodo para sanitizar el HTML que ingresa el usuario.
- `FILTER_VALIDATE_EMAIL` para validar un email. Devuelve false si no es un email y
  devuelve el email si es un email.

```php
<?php
  $email = "correo@correo.com/";
  // sanitizar
  $resultado = filter_var($email, FILTER_SANITIZE_EMAIL);
  var_dump($resultado); // string(17)"correo@correo.com"

  // validar
  $resultado = filter_var($email, FILTER_VALIDATE_EMAIL);
  var_dump($resultado); // bool(false)

  // escapar/sanitizar el html
  $resultado = "<script>alert('hola')</script>";
  $resultado = htmlspecialchars($resultado);
  // $resultado = &lt;script&gt;alert('hola')&lt;/script&gt;
  // escapa los caracteres especiales y evita inyeccion de codigo
?>
```

### Formularios

- `action` para definir la ruta a la que se va a enviar la información del formulario.
  Si no se pone, por defecto lo envia al mismo archivo. Es recomendable ponerlo.
  Para llamar al mismo archivo se puede usar:  
  `action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>"`.

### Autenticación

- `password_hash($contraseña, algoritmo)` para hashear una contraseña. Una vez esta
  hasheado, no se puede deshacer.
- `password_verify($contraseña, $contraseñaHasheada)` para verificar una contraseña.
  Devuelve true o false.

### Sesiones

- `session_start()` para iniciar una sesión. Se debe iniciar sesión en cada página
  donde se quiera acceder a la sesión.
- `$_SESSION` para acceder a una sesión. Es un array asociativo.
- `session_destroy()` para destruir una sesión. Al cerrar el navegador se destruye
  la sesión.

```php
<?php
  // iniciar una sesión
  session_start();

  // acceder a una sesión
  $_SESSION['usuario'] = 'Juan';
  $_SESSION['login'] = true;

  // destruir una sesión
  session_destroy();
?>
```

### Cookies

- `setcookie(nombre, valor, expiracion, ruta donde estará disponible)` para crear una
  cookie.
- `$_COOKIE` para acceder a una cookie.

Se puede usar la función `time()` para obtener el tiempo actual y sumarle el tiempo
de expiración de la cookie.  
Para eliminar una cookie se puede poner un tiempo de expiración en el pasado. Por
ejemplo: `time() - 1`.
Para que la cookie esté disponible en todo el sitio se puede poner la ruta como `'/'`.  
Es recomendable sanitizar las cookies para evitar inyección de código. Ej:  
`htmlspecialchars($_COOKIE['font-size'])`

```php
<?php
  // crear una cookie
  setcookie('font-size', '30px', time() + 60 * 60 * 24 * 30, '/');

  // acceder a una cookie
  echo $_COOKIE['font-size'];
?>
```

### Archivos

- `file_exists(archivo)` saber si un archivo existe.
- `file_get_contents(archivo)` obtener el contenido de un archivo.
- `file_put_contents(archivo, contenido, tipo de agregación)` escribir en un archivo.
  Por defecto sobreescribe el contenido. Para agregar contenido se puede usar
  `FILE_APPEND`.
- `file(archivo)` obtener el contenido de un archivo como un array.
- `unlink('ruta del archivo')` eliminar un archivo.
- `copy` copiar un archivo.
- `rename` renombrar un archivo.
- `mkdir` crear una carpeta.
- `rmdir` eliminar una carpeta.
- `is_dir` saber si es una carpeta.
- `scandir` obtener el contenido de una carpeta como un array.
- `path_info(ruta, tipo información)` obtener información de una ruta.
  - `PATHINFO_DIRNAME` obtener el directorio de la ruta.
  - `PATHINFO_BASENAME` obtener el nombre del archivo con su extensión.
  - `PATHINFO_FILENAME` obtener el nombre del archivo sin su extensión.
  - `PATHINFO_EXTENSION` obtener la extensión del archivo.
- `glob(ruta)` obtener los archivos de una carpeta como un array.
- `basename(ruta/archivo)` obtener el nombre del archivo con extensión.
- `basename(ruta/archivo, extensión)` obtener el nombre del archivo sin extensión.
- `dirname(ruta/archivo)` obtener el directorio de la ruta.

```php
<?php
  // obtener el contenido de un archivo
  $file = file_get_contents('archivo.txt');
  echo $file;

  // escribir en un archivo
  file_put_contents('archivo.txt', 'Hola Mundo', FILE_APPEND);

  // obtener el contenido de un archivo como un array
  $file = file('archivo.txt');
  echo $file[0];

  // eliminar un archivo
  unlink('archivo.txt');

  // copiar un archivo
  copy('archivo.txt', 'archivo2.txt');

  // renombrar un archivo
  rename('archivo.txt', 'archivo2.txt');

  // crear una carpeta
  mkdir('carpeta');

  // eliminar una carpeta
  rmdir('carpeta');

  // saber si es una carpeta
  is_dir('carpeta');

  // obtener el contenido de una carpeta como un array
  $files = scandir('./');
  echo "<pre>";
  var_dump($files);
  echo "</pre>";

  // obtener los archivos de una carpeta como un array.
  $resultados = glob('*.php');
  $resultados = glob('*.{php,html,txt}', GLOB_BRACE);
?>
```

### Namespaces

Sirven para evitar conflictos entre clases que tienen el mismo nombre.

- `namespace` para definir un namespace.
- `use` para importar un namespace.

```php
<?php
  // Tienda.php
  namespace Tienda;

  class Producto {
    public function mostrar() {
      echo "Mostrar Tienda";
    }
  }

  // Tienda2.php
  namespace Tienda2;

  class Producto {
    public function mostrar() {
      echo "Mostrar Tienda2";
    }
  }

  // index.php
  // importar el autoloader de composer
  require_once 'vendor/autoload.php';

  // importar un namespace
  use Tienda\Producto as ProductoTienda;
  use Tienda2\Producto as ProductoTienda2;

  $producto = new ProductoTienda();
  $producto->mostrar();
  $producto = new ProductoTienda2();
  $producto->mostrar();
?>
```

Agregar en el composer.json para que se pueda hacer el autoload de los namespaces:

```json
{
  "autoload": {
    "psr-4": {
      "Tienda\\": "Tienda",
      "Tienda2\\": "Tienda2"
    }
  }
}
```

### json_encode y json_decode

- `json_encode` para convertir un array a un string JSON. Se puede agregar un
  segundo parametro para que no escape los caracteres unicode (JSON_UNESCAPED_UNICODE)
- `json_decode` para convertir un string JSON a un array.

```php
<?php
  $productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Televisión 24"',
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curvo',
        'precio' => 400,
        'disponible' => false
    ]
  ];

  echo "<pre>";
  var_dump($productos);

  // convertir un array a un string JSON.
  $productos_json = json_encode($productos, JSON_UNESCAPED_UNICODE);

  // para convertir un string JSON a un array.
  $productos_array = json_decode($productos_json);

  var_dump($productos_json);
  var_dump($productos_array);
  var_dump($productos_array[0]->nombre);
  echo "</pre>";
?>
```

## Conexión a bases de datos

Existen 2 formas de conectarse a una base de datos, usando la libreria MySQLi o usando PDO.
Ambas vienen incluidas en PHP (Quizá se tenga que activar algo en la configuración de PHP para
usarlas).

PDO permite conectarse a cualquier base de datos que tenga un driver PDO
(MySQL, Oracle, PostgreSQL, SQLite, etc). Solo se puede conectar con la forma orientada a objetos.

MySQLi solo permite conectarse a bases de datos MySQL.  
Todas las funciones de MySQLi inician con `mysqli_`. Anteriormente se usaba el prefijo
`mysql_` pero ya es obsoleto. Se puede conectar con la forma orientada a objetos o con función.

El método `query` se podria utulizar cuando yo como programador creo la consulta y no
hago interpolación de los datos. Si se requiere un dato que el usuario ingresa para
armar la consulta, se debe usar sentencias preparadas.

- `$conexiondb = mysqli_connect(host, usuario, contraseña, base de datos)` realizar la
  conexión a la base de datos.
- `mysqli_query($conexiondb, $consulta)` realizar una consulta a la base de datos.
- `mysqli_fetch_assoc($resultadoConsulta)` obtener un registro de la consulta.
  Devuelve un array asociativo.
- `mysqli_fetch_array($resultadoConsulta)` obtener un registro de la consulta.
  Devuelve un array indexado.
- `mysqli_fetch_row($resultadoConsulta)` obtener un registro de la consulta.
  Devuelve un array indexado.
- `mysqli_fetch_object($resultadoConsulta)` obtener un registro de la consulta.
  Devuelve un objeto.
- `mysqli_fetch_all($resultadoConsulta)` obtener todos los registros de la consulta.
  Devuelve un array indexado.
- `mysqli_close($conexiondb)` cerrar la conexión a la base de datos. PHP cierra la
  conexión automáticamente al finalizar la ejecución del script.

Tambien se puede usar la forma orientada a objetos para conectarse a la base de datos.

- `$conexiondb = new mysqli(host, usuario, contraseña, base de datos)` realizar la
  conexión a la base de datos.
- `$conexiondb->query($consulta)` realizar una consulta a la base de datos.
- `$resultadoConsulta->fetch_assoc()` obtener un registro de la consulta. Devuelve un
  array asociativo.
- `$resultadoConsulta->fetch_array()` obtener un registro de la consulta. Devuelve un array
- `$resultadoConsulta->fetch_row()` obtener un registro de la consulta. Devuelve un array
- `$resultadoConsulta->fetch_object()` obtener un registro de la consulta. Devuelve un objeto
- `$resultadoConsulta->fetch_all()` obtener todos los registros de la consulta. Devuelve un array
- `$conexiondb->close()` cerrar la conexión a la base de datos.

Tambien se puede hacer con sentencias preparadas. Se usa para evitar inyección SQL.
Una vez preparada la sentencia, se guarda en memoria, en caso de hacer la
misma consulta.

```php
<?php
  // obtener datos de la url
  $id = $_GET['id'];
  $nombre = $_GET['nombre'];

  // Conectar a la BD con Mysqli.
  // mysqli('host', 'user', 'password', 'database');
  $db = new mysqli('localhost', 'root', '', 'bienesraices_crud');

  // Creamos el query
  $query = "SELECT titulo, imagen from propiedades";

  // Lo preparamos
  $stmt = $db->prepare($query);

  // Lo ejecutamos
  $stmt->execute();

  // creamos las variables donde se guardaran los resultados
  // bind_result() nos permite pasar los resultados a variables
  $stmt->bind_result($titulo, $imagen);

  // imprimir el resultado
  // fetch() trae un resultado de la consulta
  while($stmt->fetch()):
      var_dump($titulo);
  endwhile;

  // si se requiere inyectar datos en la consulta
  // ? indica que se va a inyectar un dato
  // bind_param() nos permite inyectar datos en la consulta
  // se debe poner una letra por cada dato que se va a inyectar
  // s indica que el dato es un string
  // i indica que el dato es un entero
  // d indica que el dato es un double
  $query = "SELECT titulo, imagen from propiedades WHERE id = ? OR nombre = ?";
  $stmt = $db->prepare($query);
  $stmt->bind_param('is', $id, $nombre);
  $stmt->execute();
  $stmt->bind_result($titulo, $imagen);
  while($stmt->fetch()):
      var_dump($titulo);
  endwhile;
?>
```

Con **PDO** usando sentencias preparadas:

```php
<?php
  // obtener datos de la url
  $id = $_GET['id'];
  $nombre = $_GET['nombre'];

  // Conectar a la BD con PDO
  // PDO('database:host=host; dbname=database', 'user', 'password');
  $db = new PDO('mysql:host=localhost; dbname=bienesraices_crud', 'root', '');

  // Creamos el query
  $query = "SELECT titulo, imagen from propiedades";

  // Lo preparamos
  $stmt = $db->prepare($query);

  // Lo ejecutamos
  $stmt->execute();

  // Obtener los resultados
  // fetchAll(como traer el resultado) nos permite obtener todos los resultados
  $resultado = $stmt->fetchAll( PDO::FETCH_ASSOC );

  // Iterar
  foreach($resultado as $propiedad):
      echo $propiedad['titulo'];
      echo "<br>";
      echo $propiedad['imagen'];
      echo "<br>";
  endforeach;

  // si se requiere inyectar datos en la consulta ???
  $query = "SELECT titulo, imagen from propiedades WHERE id = :id OR nombre = :nombre";
  $stmt = $db->prepare($query);
  // bindValue() nos permite inyectar datos en la consulta
  $stmt->bindValue(':id', $id);
  $stmt->bindValue(':nombre', $nombre);
  $stmt->execute();
  // o se podria hacer asi:
  // $stmt->execute(
  //   array(
  //     ':id' => $id,
  //     ':nombre' => $nombre
  //   )
  // );
  $resultado = $stmt->fetchAll( PDO::FETCH_ASSOC );
  foreach($resultado as $propiedad):
      echo $propiedad['titulo'];
      echo "<br>";
      echo $propiedad['imagen'];
      echo "<br>";
  endforeach;
?>
```
