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

Es un gestor de dependencias para PHP.  
`composer -v` ver la versión de composer.

## Conceptos

Para escribir código PHP se debe usar la etiqueta `<?php ?>`. En scripts que solo tengan código PHP
se puede omitir la etiqueta de cierre `?>`, porque existe una vulnerabilidad que permitiria
inyectar código malicioso en el código PHP.  
Cada instrucción debe terminar con `;`.  
Los comentarios se hacen con `//` o `/* */`.

- `echo "Hola Mundo";` imprimir en pantalla.
- `echo "<h1>Hola</h1>";` imprimir en pantalla etiquetas HTML.
- `print "Hola Mundo";` imprimir en pantalla.
- `include` para importar un archivo. Si el archivo no existe, se muestra un warning
  y se sigue ejecutando el código. Se usa para importar algo que no es tan necesario
  para que el código funcione.
- `require` para importar un archivo. Si el archivo no existe, se muestra un error
  y se detiene la ejecución del código. Se usa para importar algo que es necesario
  para que el código funcione.
- `__DIR__` -> devuelve la ruta absoluta de la carpeta donde se encuentra el archivo que lo llama.
- `__FILE__` -> devuelve la ruta absoluta del archivo que lo llama.
- `__LINE__` -> devuelve el número de línea donde se encuentra.
- `__FUNCTION__` -> devuelve el nombre de la función donde se encuentra.
- `__CLASS__` -> devuelve el nombre de la clase donde se encuentra.
- `__METHOD__` -> devuelve el nombre del método donde se encuentra.
- `__NAMESPACE__` -> devuelve el nombre del namespace donde se encuentra.
- `exit` para detener la ejecución del código.
- `die` para detener la ejecución del código.

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
- `rand(1, 10)` para generar un número aleatorio entre 1 y 10.

#### Boolean

Los valores true se representan con 1 y false y null se representan como vacio,
no devuelven ningun valor.

```php
<?php
  $isMale = true;
?>
```

#### Null

```php
<?php
  $salary = null;
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
- `array_pop($people)` eliminar el último elemento de un array.
- `array_unshift($people, 'Pedro')` agregar un elemento al inicio de un array.
- `array_shift($people)` eliminar el primer elemento de un array.
- `in_array('Juan', $people)` buscar un elemento en un array.
- `array_search('Juan', $people)` buscar un elemento en un array.
- `array_slice($people, 1, 2)` obtener una parte de un array.
- `array_splice($people, 1, 2)` eliminar una parte de un array.
- `array_merge($people, $people2)` unir dos arrays.
- `array_reverse($people)` invertir el orden de un array.
- `sort($people)` ordenar un array de forma ascendente.
- `rsort($people)` ordenar un array de forma descendente.
- `asort($people)` ordenar un array asociativo por valor de forma ascendente.
- `arsort($people)` ordenar un array asociativo por valor de forma descendente.
- `ksort($people)` ordenar un array asociativo por clave de forma ascendente.
- `krsort($people)` ordenar un array asociativo por clave de forma descendente.
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

```php
<?php
  $age = 25;
  $age2 = '25';
  var_dump($age == $age2); // true
  var_dump($age === $age2); // false
  var_dump($age != $age2); // false
  var_dump($age !== $age2); // true
  var_dump($age <=> $age2); // 0
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

- `function` para definir una función.
- `return` para retornar un valor de una función.
- `global` para acceder a una variable global dentro de una función. ??

`declare(strict_types=1);` se usa para habilitar el tipado estricto

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

  // con parámetros por defecto usando global ??
  $name = 'Juan';
  function saludar() {
    global $name;
    echo "Hola " . $name;
  }
  saludar();
?>
```

### Clases

- `class` para definir una clase.
- `__construct` para definir el constructor de una clase.
- `public` para definir un método o propiedad pública.
- `private` para definir un método o propiedad privada. ???
- `protected` para definir un método o propiedad protegida. ???
- `static` para definir un método o propiedad estática. ???
- `self` para acceder a una propiedad o método estático dentro de la misma clase. ???
- `parent` para acceder a una propiedad o método estático dentro de la clase padre. ???
- `extends` para heredar de una clase. ???
- `::` para acceder a una propiedad o método estático. ???
- `->` para acceder a una propiedad o método de una instancia de una clase. ???

```php
<?php
  class Product {
    public $name;
    public $price;
    public $available;

    public function __construct(string $name, int $price, bool $available) {
      $this->name = $name;
      $this->price = $price;
      $this->available = $available;
    }

    public function showInfo() {
      return "El producto es: " . $this->name . " y su precio es: " . $this->price;
    }
  }

  $product = new Product('Tablet', 200, true);
  echo $product->name;
  echo $product->showInfo();
?>
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

### Superglobales ???

Son variables que están disponibles en todo el script.

- `$_GET` acceder a los datos enviados por el método GET.
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

### Cookies ???

- `setcookie` para crear una cookie.
- `$_COOKIE` para acceder a una cookie.

```php
<?php
  // crear una cookie
  // setcookie(nombre, valor, expiracion, ruta)
  setcookie('font-size', '30px', time() + 60 * 60 * 24 * 30, '/');

  // acceder a una cookie
  echo $_COOKIE['font-size'];
?>
```

### Sesiones ???

- `session_start` para iniciar una sesión.
- `$_SESSION` para acceder a una sesión.
- `session_destroy` para destruir una sesión.

```php
<?php
  // iniciar una sesión
  session_start();

  // acceder a una sesión
  $_SESSION['name'] = 'Juan';
  echo $_SESSION['name'];

  // destruir una sesión
  session_destroy();
?>
```

### Archivos ???

- `file_exists` para saber si un archivo existe.
- `file_get_contents` para obtener el contenido de un archivo.
- `file_put_contents` para escribir en un archivo.
- `file` para obtener el contenido de un archivo como un array.
- `unlink` para eliminar un archivo.
- `copy` para copiar un archivo.
- `rename` para renombrar un archivo.
- `mkdir` para crear una carpeta.
- `rmdir` para eliminar una carpeta.
- `is_dir` para saber si es una carpeta.
- `scandir` para obtener el contenido de una carpeta como un array.

```php
<?php
  // obtener el contenido de un archivo
  $file = file_get_contents('archivo.txt');
  echo $file;

  // escribir en un archivo
  file_put_contents('archivo.txt', 'Hola Mundo');

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

- La función `mysqli_connect` sirve para realizar la conexión a la base de datos,
  recibe 4 parametros: host, usuario, contraseña y base de datos.
- La función `mysqli_query` sirve para realizar una consulta a la base de datos,
  recibe 2 parametros: la conexión y la consulta.
- La función `mysqli_fetch_assoc` sirve para obtener un registro de la base de datos,
  recibe 1 parametro: el resultado de la consulta. Devuelve un array asociativo.
- La función `mysqli_fetch_array` sirve para obtener un registro de la base de datos,
  recibe 1 parametro: el resultado de la consulta. Devuelve un array indexado.
- La función `mysqli_fetch_row` sirve para obtener un registro de la base de datos,
  recibe 1 parametro: el resultado de la consulta. Devuelve un array indexado.
- La función `mysqli_fetch_object` sirve para obtener un registro de la base de datos,
  recibe 1 parametro: el resultado de la consulta. Devuelve un objeto.
- La función `mysqli_fetch_all` sirve para obtener todos los registros de la base de datos,
  recibe 1 parametro: el resultado de la consulta. Devuelve un array indexado.
- La función `mysqli_close` sirve para cerrar la conexión a la base de datos,
  recibe 1 parametro: la conexión. PHP cierra la conexión automáticamente al finalizar
  la ejecución del script.
