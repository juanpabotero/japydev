---
id: 'sql'
title: 'SQL'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/sql.svg'
---

## Herramientas

- Aprender y practicar SQL:  
  https://sqlbolt.com/  
  https://datalemur.com/

- Gestionar las bases de datos:  
  Para usuarios Mac: https://dbngin.com/

- Hostear bases de datos:  
  https://planetscale.com/ (MySQL)  
  https://neon.tech/ (PostgreSQL)  
  https://turso.tech/ (SQLite)  
  https://www.mongodb.com/atlas/database (MongoDB)

---

## Conceptos

Structured Query Language (Lenguaje de consulta estructurado).  
SQL es un estandar. Cada base de datos tiene su propia implementación de SQL,
como MySQL, PostgreSQL, SQLite, etc. Pueden cambiar algunas cosas, pero la mayoría son iguales.

Es un lenguaje de consulta estructurada, diseñado para administrar y consultar bases de datos.  
Es un lenguaje que se utiliza para comunicarse con bases de datos relacionales.

Cada base de datos tiene diferentes tablas.  
En las bases de datos relacionales se busca optimizar y evitar la duplicidad de los datos,
para esto, se crean relaciones entre las tablas, y esta es la mayor diferencia con las
bases de datos no relacionales.  
Podemos entender las tablas como entidades y las columnas como atributos.

RDBMS (Relational Database Management System), es un sistema de gestión de bases de datos relacionales.
Es el software que se encarga de gestionar las bases de datos relacionales.
Por ejemplo, MySQL, PostgreSQL, SQLite, etc.

### Relaciones

#### De uno a uno

Un dato de una tabla se relaciona solo con un dato de otra tabla

#### De uno a muchos (1:N)

Cuando se tiene una relación de uno a muchos, se usa una clave foranea.
Por ejemplo, si tenemos una tabla de usuarios y una tabla de tweets, y un usuario
puede tener muchos tweets, entonces en la tabla de tweets se agrega una columna
que hace referencia al id del usuario.

```sql
CREATE TABLE tweets (
  id INT NOT NULL AUTO_INCREMENT,
  content VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (id)
);
```

#### De muchos a muchos (N:M)

Cuando se tiene una relación de muchos a muchos, se usa una tabla intermedia.
Por ejemplo, si tenemos una tabla de productos y una tabla de ordenes, y un producto
puede estar en muchas ordenes y una orden puede tener muchos productos, entonces se crea
una tabla intermedia que relaciona a los productos con las ordenes.
En este caso, la tabla intermedia tendria dos columnas, una que hace referencia al
id del producto y otra que hace referencia al id de la orden.

Ejemplo tabla intermedia:

```sql
CREATE TABLE products_orders (
  products_orders_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  order_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (order_id) REFERENCES orders(id),
  -- para restringir que la relación solo se cree una vez?
  UNIQUE (product_id, order_id)
);
```

Tabla de Peliculas:

| id  | title          | year | rating | directorId |
| --- | -------------- | ---- | ------ | ---------- |
| 1   | Harry Potter   | 2008 | 8.0    | 1          |
| 2   | Harry Potter 2 | 2010 | 7.0    | 1          |
| 3   | Thor           | 2012 | 9.0    | 2          |
| 4   | Spiderman      | 2014 | 8.5    | 3          |

Tabla de Directores:

| id  | name     |
| --- | -------- |
| 1   | Chris    |
| 2   | Mackenze |
| 3   | James    |

En este caso, la tabla de peliculas tiene una relación con la tabla de directores,
ya que cada pelicula tiene un director asociado.

### Diferencia entre SQL y NoSQL

**SQL** trabaja a traves de tablas, relaciona los datos y evita la duplicidad de los mismos.
Lo positivo es la coherencia de los datos, ya que los datos se cambian en un solo lugar.  
lo negativo es que tenemos que hacer muchas consultas para recuperar toda la
información que nos interesa.

- Tablas
- Relaciona los datos
- Evita duplicidad
- Evita la redundancia de los datos
- Ocupan menos espacio
- Coherencia de los datos, los datos se cambian en un solo lugar.
- Negativo: hace muchas consultas para recuperar toda la información que nos interesa

**NoSQL** trabaja a traves de colecciones de documentos, se pueden relacionar los
documentos pero es más costoso.

- Colecciones de documentos
- Consultas más rápidas, especialmente en consultas grandes
- Se puede relacionar los documentos pero es más costoso
- Negativo: La integridad de los datos no esta garantizada
- Negativo: Para normalizar los datos es mas problematico, Las actualizaciones
  se tienen que hacer en todos los documentos

En general, se decide si se quiere priorizar la integridad de los datos
o la velocidad de las consultas. Para la integridad de los datos se usa SQL,
para la velocidad de las consultas se usa NoSQL.

### Código

SQL no es case sensitive, pero es una buena practica escribir las palabras
clave en mayúscula y los nombres de columnas, tablas y demás en minúscula.  
Esto es para el estandar SQL, pero cada base de datos tiene su propia
implementación, por ejemplo, PostgreSQL es case sensitive.

### Gestión de bases de datos y tablas:

```sql
-- muestra las bases de datos
SHOW DATABASES;
-- crea una base de datos
CREATE DATABASE database_name;
-- usa la base de datos, debemos seleccionar la base de datos antes de crear una tabla
USE database_name;
-- elimina la base de datos
DROP DATABASE database_name;
-- elimina la base de datos si existe
DROP DATABASE IF EXISTS database_name;

-- crea una tabla
CREATE TABLE table_name (
  column_name data_type condicional?,
  column_name data_type
);
-- muestra las tablas de la base de datos
SHOW TABLES;
-- describe la tabla
DESCRIBE table_name;
-- elimina la tabla
DROP TABLE table_name;
-- elimina la tabla si existe
DROP TABLE IF EXISTS table_name;
-- actualizar tabla
-- agregar nueva columna
ALTER TABLE table_name
ADD column_name column_type;
-- renombrar columna
ALTER TABLE table_name
RENAME COLUMN column_name TO new_column_name;
-- modificar columna
ALTER TABLE table_name
MODIFY COLUMN new_column_type;
-- eliminar columna
ALTER TABLE table_name
DROP COLUMN column_name;
```

### Tipos de datos

```sql
INT -- numero entero
FLOAT -- numero con decimales
CHAR -- string fijo, se usa cuando se sabe que el string va a tener siempre la misma longitud o muy cercana
VARCHAR -- string variable, se usa cuando la longitud del string es muy variable
VARCHAR(255) -- string variable con limite de caracteres
TEXT? -- string largo
DATE -- fecha
DATETIME -- fecha y hora
TIMESTAMP -- fecha y hora

-- condicionales
NOT NULL -- no puede ser null
UNIQUE -- no puede haber dos valores iguales
DEFAULT -- valor por defecto
CHECK -- permite hacer una validación
PRIMARY KEY -- clave primaria, es el campo o conjunto de campos que identifica de manera unica al registro,
-- debe ser inmutable. La clave primaria debe ir abajo de la tabla.
FOREIGN KEY -- clave foranea, es la manera de relacionar las tablas, le digo el campo de la tabla actual a que
-- campo hace referencia de la otra tabla. Puede ser mas de una clave foranea.

-- funciones
AUTO_INCREMENT -- se incrementa automaticamente cuando se crea un nuevo registro
NOW() -- devuelve la fecha y hora actual

-- ejemplo
CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  rating FLOAT NOT NULL,
  phonenumber CHAR(10) UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
  director_id INT NOT NULL,
  CHECK(year > 2000)
  FOREIGN KEY (director_id) REFERENCES directors(id),
  PRIMARY KEY (id)
);
```

### Sentencia SQL:

Primero iria el comando o acción, luego la columna(s) o atributo(s)
(\* permite recuperar todas las columnas), luego la tabla y por último la condición.  
Siempre debe ir un punto y coma al final.  
Se llama CONSTRAINT a las condiciones que se le pueden agregar a las columnas.

Recomendable hacer los DELETE y UPDATE con una condición, para evitar
eliminar o actualizar todos los registros de la tabla.

Podemos usar varios operadores para las condiciones:

```sql
SELECT column_name FROM table_name WHERE condition;

SELECT * FROM movies WHERE id = 1;
-- AS permite poner un alias a una columna
SELECT title AS nombre, year AS anio FROM movies WHERE id = 1;
-- BETWEEN Permite buscar en un rango de valores.
SELECT * FROM movies WHERE id BETWEEN 1 AND 5;
SELECT * FROM movies WHERE id NOT BETWEEN 1 AND 5;
-- IN Permite obtener los registros donde los valores de una columna esten en un rango.
-- Es case insensitive (ignora mayusculas o minusculas).
SELECT * FROM movies WHERE title IN ('thor', 'spiderman');
SELECT * FROM movies WHERE id IN (1, 2, 3);
SELECT * FROM movies WHERE id NOT IN (1, 2, 3);
-- IS NULL permite saber si un valor es null o no
SELECT * FROM movies WHERE id IS NULL;
SELECT * FROM movies WHERE id IS NOT NULL;
-- LIKE es una comparacion exacta pero case insensitive (ignora mayusculas y minusculas)
SELECT * FROM movies WHERE title LIKE "Harry Potter";
SELECT * FROM movies WHERE title NOT LIKE "Harry Potter";
-- % para hacer match con cero o más caracteres (matches "AT", "ATTIC", "CAT", "BATS")
SELECT * FROM movies WHERE title LIKE "%AT%";
-- % para hacer match con cero o más caracteres, pero solo al final (matches "AT", "ATTIC", but not "BATS")
SELECT * FROM movies WHERE title LIKE "AT%";
-- _ para hacer match con un solo caracter (matches "AND", but not "AN")
SELECT * FROM movies WHERE title LIKE "AN_";

SELECT * FROM movies WHERE title LIKE "Harry Potter" AND year = 2001 ;
SELECT * FROM movies WHERE title LIKE "Harry Potter" OR year = 2001 ;
```

Cuanto más especifica sea la condición, más rapida sera la consulta.

Cuando usamos SQL, todos los resultados son tablas, incluso si solo hay una fila,
si eliminamos una tabla, etc. El resultado siempre es un tabla.

Una de las primeras optimizaciones que se deberia hacer es solo recuperar
los datos que nos interesan, y no todos los datos de la tabla usando \*,
porque seria más costoso.
Incluso si se quieren traer todas las columnas seria buena idea especificarlas,
porque si en el futuro se agregan más columnas, se traerian en la consulta,
y esto podria afectar el rendimiento.

Para busquedas de texto libre como lo hacen las redes sociales en sus
buscadores o Google, no se hacen con SQL, se usan otras herramientas.
Por ejemplo, se puede usar ElasticSearch, Algolia, Apache Lucene.

**Sub consulta**: es una consulta dentro de otra consulta, es una alternativa a hacer JOINs.

```sql
SELECT * FROM movies WHERE 'directorId' = (SELECT id FROM directors WHERE name = "Chris");
```

### DISTINCT

Permite hacer una distinción entre los valores de una columna, y solo
traer los valores únicos.

```sql
SELECT DISTINCT directorId FROM movies;
```

### ORDER BY

Si no se pone ASC o DESC, por defecto es ASC.

```sql
SELECT * FROM movies ORDER BY year;
SELECT * FROM movies ORDER BY year DESC;
SELECT * FROM movies ORDER BY year DESC, title ASC;
```

### LIMIT

Permite limitar la cantidad de resultados que se traen.  
Se puede usar con o sin OFFSET, éste permite traer los resultados
a partir de una posición que yo especifique. Esto se usa para
hacer paginaciones. El OFFSET empieza desde 0.

```sql
SELECT * FROM movies LIMIT 5;
SELECT * FROM movies LIMIT 5 OFFSET 5;
```

### COUNT

Permite contar la cantidad de registros que hay en una tabla.

```sql
SELECT COUNT(*) FROM movies;
SELECT COUNT(*) FROM movies WHERE year = 2001;
SELECT COUNT(*) FROM movies WHERE year = 2001 AND rating = 8;
```

### MIN, MAX

Permite recuperar el valor máximo o mínimo para la columna que le indiquemos.

```sql
SELECT MAX(rating) as maxRating FROM movies;
SELECT MIN(rating) as minRating FROM movies;
```

### SUM

Permite sumar los valores de una columna.

```sql
SELECT SUM(rating) FROM movies;
```

### AVG

Permite obtener el promedio de los valores de una columna.

```sql
SELECT AVG(rating) FROM movies;
```

### CONCAT

Permite concatenar textos.

```sql
SELECT CONCAT('Nombre: ', title, ', año: ', year) as 'Fecha estreno' FROM movies;
```

### NULL FUNCTIONS

```sql
SELECT * FROM movies WHERE id IS NULL;
SELECT * FROM movies WHERE id IS NOT NULL;
SELECT title, year, IFNULL(rating, 0) AS rating FROM movies;
```

### CASE

Permite devolver un valor segun se cumpla o no una condición. Es muy similar a un switch o if de programación.

```sql
SELECT *,
CASE
  WHEN year > 2010 THEN true
  ELSE false
END as '¿Es reciente?'
FROM movies;
```

### GROUP BY

Permite agrupar los resultados de una consulta por una columna.  
El comando con el que agrupamos es el comando con el que ejecutamos la función.

```sql
SELECT directorId, COUNT(*) FROM movies GROUP BY directorId;
SELECT COUNT(rating), rating FROM movies WHERE rating > 7.0 GROUP BY rating ORDER BY rating ASC;
```

### HAVING

Permite agregar un filtro más pero sobre una agregación ya creada.  
Se usa mucho con los GROUP BY. HAVING permite filtrar los resultados de un GROUP BY

```sql
SELECT COUNT(year) FROM movies HAVING COUNT(year) > 3;
SELECT directorId, COUNT(*) FROM movies GROUP BY directorId HAVING COUNT(*) > 1;
```

### JOIN

Permite unir dos tablas, y traer los datos de ambas tablas según la relación especificada.  
Permite recuperar los datos de una tabla y poder llevarla a otra tabla y
traer los datos de ambas tablas.

**INNER JOIN**, Permite traer los datos que hacen match en ambas tablas.
Si no hay match, no se traen los datos. Suele ser el más utilizado.

**OUTER JOIN**, hay varios tipos:

**LEFT JOIN**, Permite traer los datos que hacen match en ambas tablas,
y tambien trae todos los datos de la tabla de la izquierda.

**RIGHT JOIN**, Permite traer los datos que hacen match en ambas tablas,
y tambien trae todos los datos de la tabla de la derecha.

**FULL JOIN**, Permite traer todos los datos de ambas tablas, incluso los que
no hacen match.

La sentencia seria, primero la tabla de la izquierda, luego el tipo de JOIN,
luego la tabla de la derecha, luego la relación y por último la condición.  
Si no se especifica el tipo de JOIN, por defecto es INNER JOIN, se puede
encontrar tanto JOIN como INNER JOIN.

```sql
SELECT * FROM movies
JOIN directors ON movies.director_id = directors.id;

SELECT * FROM movies
INNER JOIN directors ON movies.director_id = directors.id
WHERE movies.year = 2001 AND directors.name = "Chris";

SELECT movies.title, directors.name FROM movies
LEFT JOIN directors ON movies.director_id = directors.id
WHERE movies.year = 2001 AND directors.name = "Chris" ORDER BY movies.title DESC;

SELECT movies.title, directors.name FROM movies
RIGHT JOIN directors ON movies.director_id = directors.id
WHERE movies.year = 2001 AND directors.name = "Chris" ORDER BY movies.title DESC LIMIT 5;

SELECT movies.title, directors.name FROM movies
FULL JOIN directors ON movies.director_id = directors.id
WHERE movies.year = 2001 AND directors.name = "Chris" ORDER BY movies.title DESC LIMIT 5 OFFSET 5;
```

Para una consulta donde existe una relación de muchos a muchos, se puede hacer la consulta a la tabla
intermedia haciendo JOIN de las otras 2 tablas.

```sql
SELECT users.name, languages.name
FROM users_languages
JOIN users ON users_languages.user_id = users.id
JOIN languages ON users_languages.language_id = languages.id ;
```

### UNION

Permite unir los resultados de dos consultas.

```sql
SELECT * FROM movies WHERE year = 2001
UNION
SELECT * FROM movies WHERE year = 2002;
```

### INSERT

Permite insertar datos en una tabla.

```sql
INSERT INTO table_name (column_name, column_name) VALUES (value, value);
-- se le pasan los valores que se quieren insertar en la tabla, valores como
-- el id y la fecha de creacion se insertan automaticamente si asi se especifica en la tabla
INSERT INTO movies (title, year, rating) VALUES ("Harry Potter", 2001, 7.6);
-- puedo pasar varios registros a la vez
INSERT INTO movies (title, year, rating)
VALUES
("Harry Potter", 2001, 7.6),
("Harry Potter 2", 2004, 8.0),
("Thor", 2012, 9.0);
```

### UPDATE

Permite actualizar los datos de una tabla. Siempre deberia ir acompañado de una condición.

```sql
UPDATE movies SET year = 2000 WHERE id = 1;
UPDATE movies SET year = 2000, rating = 8.0 WHERE id = 1;
```

### DELETE

Permite eliminar los datos de una tabla. Siempre deberia ir acompañado de una condición.

```sql
DELETE FROM movies WHERE id = 1;
DELETE FROM movies WHERE year = 2001 AND director = "Chris"        ;
```

### TRIGGERS

Permite ejecutar una acción cuando se inserta, actualiza o elimina un registro.

```sql
CREATE TRIGGER trigger_name
BEFORE/AFTER INSERT/UPDATE/DELETE
ON table_name
FOR EACH ROW
BEGIN
  -- codigo
END;
```

Ejemplo:

```sql
-- DELIMITER es para cambiar el delimitador, para que SQL sepa cuando termina el trigger y cuando
-- termina la sentencia SQL
DELIMITER $$
CREATE TRIGGER update_rating
AFTER INSERT
ON movies
FOR EACH ROW
BEGIN
-- NEW hace referencia al registro que se acaba de insertar
-- OLD hace referencia al registro actual
  UPDATE directors SET rating = (SELECT AVG(rating) FROM movies WHERE director_id = NEW.director_id) WHERE id = NEW.director_id;
END $$
DELIMITER ;
```

### INDEXES

Permite mejorar el rendimiento de las consultas al hacer una referencia más exacta de una columna,
pero puede afectar el rendimiento de las inserciones, actualizaciones y eliminaciones.

```sql
CREATE INDEX idx_column_name ON table_name (column_name);
```

### VIEWS

Permite guardar una consulta en una vista, y luego poder hacer consultas a esa vista.  
Es una representación virtual de una o más tablas.  
Las vistas no almacenan datos, solo almacenan la consulta, no se puede insertar, actualizar o eliminar datos en una vista.  
Las vistas se usan para simplificar las consultas, para no tener que escribir la misma consulta muchas veces.

```sql
CREATE VIEW view_name AS
SELECT column_name FROM table_name WHERE condition;

-- ejemplo
CREATE VIEW movies_view AS
SELECT title, year, rating FROM movies WHERE year > 2000;
```

### STORED PROCEDURES

Permite guardar una consulta en un procedimiento, y luego poder ejecutar ese procedimiento.

```sql
DELIMITER $$
CREATE PROCEDURE procedure_name()
BEGIN
  -- codigo
END $$
DELIMITER ;

-- ejemplo
DELIMITER $$
CREATE PROCEDURE get_movies()
BEGIN
  SELECT * FROM movies;
END $$
DELIMITER ;

-- ejecutar el procedimiento
CALL get_movies();
```

### TRANSACTIONS

Permite agrupar varias consultas en una transacción, y si alguna consulta falla, se deshacen todas las consultas.

```sql
START TRANSACTION;
-- codigo
COMMIT;
-- si alguna consulta falla
ROLLBACK;
```

### BLOQUEOS

Manejan las concurrencias, para evitar que dos usuarios hagan una consulta a la vez.
Mientras una consulta esta en proceso, la otra consulta se bloquea.  
Permite bloquear una tabla para que no se puedan hacer consultas, actualizaciones o eliminaciones.

```sql
LOCK TABLES table_name READ/WRITE;
-- codigo
UNLOCK TABLES;
```

### CARDINALIDAD

Son los tipos de relaciones que se pueden dar entre las tablas.

- 1:1 uno a uno
- 1:N uno a muchos
- N:M muchos a muchos

### NORMALIZACIÓN

Es el proceso de organizar los datos en una base de datos.

- Primera forma normal: cada columna debe tener un solo valor, no puede ser un array.
- Segunda forma normal: cada columna debe depender de la clave primaria.
- Tercera forma normal: no debe haber dependencias transitivas.
- Cuarta forma normal: no debe haber dependencias multivaluadas.
- Quinta forma normal: no debe haber dependencias de unión.

## MySQL

Sistema de gestión de bases de datos relacionales.

??? Cuando se crea una base de datos, se crea un usuario por defecto, que es
el usuario root, y se le asigna una contraseña.

Cuando se ejecuta un comando, debemos darle al botón de actualizar en
la parte de Schemas para que se actualicen las bases de datos.

Ejemplo de código en MySQL:

```sql
CREATE DATABASE twitter_db;
USE twitter_db;
CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  user_handle VARCHAR(50) NOT NULL UNIQUE,
  email_address VARCHAR(50) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phonenumber CHAR(10) UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
  PRIMARY KEY (user_id)
);
```

La biblioteca para conectarse a MySQL desde Node.js es **mysql2**.

#### Atajos MySQL Workbench

- ctrl + enter: ejecuta la consulta en la que esta el cursor
- ctrl + d: duplica la linea en la que esta el cursor
- ctrl + l: elimina la linea en la que esta el cursor

#### Atajos DataGrip

- ctrl + enter: ejecuta la consulta en la que esta el cursor
- ctrl + d: duplica la linea en la que esta el cursor
- ctrl + y: elimina la linea en la que esta el cursor
- ctrl 2 veces y sin soltar, presionar flecha arriba o abajo: crear multi cursor
- shift + alt + click: seleccionar varias lineas
- alt + j: seleccionar todas las coincidencias
