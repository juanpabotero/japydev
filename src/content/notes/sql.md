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

- Gestionar las bases de datos:  
  Para usuarios Mac: https://dbngin.com/

- Hostear bases de datos:  
  https://planetscale.com/  
  https://turso.tech/ (SQLite)

---

## Conceptos

Structured Query Language.  
SQL es un estandar. Cada base de datos tiene su propia implementación de SQL,
como MySQL, PostgreSQL, SQLite, etc. Pueden cambiar algunas cosas, pero la mayoría son iguales.

Es un lenguaje de consulta estructurada, diseñado para administrar y consultar bases de datos.  
Es un lenguaje que se utiliza para comunicarse con bases de datos relacionales.

Cada base de datos tiene diferentes tablas.  
En las bases de datos relacionales se busca optimizar y evitar la duplicidad de los datos,
para esto, se crean relaciones entre las tablas, y esta es la mayor diferencia con las
bases de datos no relacionales.  
Podemos entender las tablas como entidades y las columnas como atributos.

Tabla de tweets:

| id  | message    | user_id |
| --- | ---------- | ------- |
| 1   | bla bla    | 1       |
| 2   | vamoooos   | 1       |
| 3   | hola mundo | 2       |
| 4   | en directo | 3       |

Tabla de usuarios:

| id  | username |
| --- | -------- |
| 1   | jose     |
| 2   | maria    |
| 3   | pedro    |

En este caso, la tabla de tweets tiene una relación con la tabla de usuarios,
ya que cada tweet tiene un usuario asociado.

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

Comandos básicos:

```sql
-- muestra las bases de datos
SHOW DATABASES;
-- crea una base de datos
CREATE DATABASE database_name;
-- usa la base de datos, debemos seleccionar la base de datos antes de crear una tabla
USE database_name;
-- crea una tabla
CREATE TABLE table_name (
  column_name data_type condicional?,
  column_name data_type
);
-- tipos de datos
INT -- numero entero
FLOAT -- numero con decimales
CHAR -- string fijo, se usa cuando se sabe que el string va a tener siempre la misma longitud o muy cercana
VARCHAR -- string variable, se usa cuando la longitud del string es muy variable
VARCHAR(255) -- string variable con limite de caracteres
TEXT? -- string largo
DATE? -- fecha
DATETIME? -- fecha y hora
TIMESTAMP -- fecha y hora
-- condicionales
NOT NULL -- no puede ser null
UNIQUE -- no puede haber dos valores iguales
PRIMARY KEY -- clave primaria, es el campo o conjunto de campos que identifica de manera unica al registro,
-- debe ser inmutable. La clave primaria debe ir abajo de la tabla.
FOREIGN KEY -- clave foranea, es la manera de relacionar las tablas, le digo el campo de la tabla actual a que
-- campo hace referencia de la otra tabla. Puede ser mas de una clave foranea.
DEFAULT -- valor por defecto
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
  FOREIGN KEY (director_id) REFERENCES directors(id),
  PRIMARY KEY (id)
);
SHOW TABLES; -- muestra las tablas de la base de datos
DESCRIBE table_name; -- describe la tabla
DROP TABLE table_name; -- elimina la tabla
DROP TABLE IF EXISTS table_name; -- elimina la tabla si existe
DROP DATABASE database_name; -- elimina la base de datos
DROP DATABASE IF EXISTS database_name; -- elimina la base de datos si existe
```

Sentencia SQL:  
Primero iria el comando o acción, luego la columna(s) o atributo(s)
(\* permite recuperar todas las columnas), luego la tabla y por último la condición.  
Siempre debe ir un punto y coma al final.  
Se llama CONSTRAINT a las condiciones que se le pueden agregar a las columnas.

Recomendable hacer los DELETE y UPDATE con una condición, para evitar
eliminar o actualizar todos los registros de la tabla.

```sql
INSERT INTO table_name (column_name, column_name) VALUES (value, value);
-- ejemplo, se le pasan los valores que se quieren insertar en la tabla, valores como
-- el id y la fecha de creacion se insertan automaticamente si asi se especifica en la tabla
INSERT INTO movies (title, director, year, rating) VALUES ("Harry Potter", "Chris Columbus", 2001, 7.6);
-- puedo pasar varios registros a la vez
INSERT INTO movies (title, director, year, rating)
VALUES
("Harry Potter", "Chris Columbus", 2001, 7.6),
("Harry Potter 2", "Chris Columbus", 2004, 8.0),
("Thor", "Marvel", 2012, 9.0);
```

```sql
SELECT column_name FROM table_name WHERE condition;
SELECT * FROM movies;
SELECT title, director FROM movies;
SELECT * FROM movies WHERE id = 1;
```

Podemos usar varios operadores para las condiciones:

```sql
SELECT * FROM movies WHERE id = 1;
SELECT * FROM movies WHERE id >= 1;
SELECT * FROM movies WHERE id BETWEEN 1 AND 5;
SELECT * FROM movies WHERE id NOT BETWEEN 1 AND 5;
SELECT * FROM movies WHERE id IN (1, 2, 3);
SELECT * FROM movies WHERE id NOT IN (1, 2, 3);
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
SELECT * FROM movies WHERE title LIKE "Harry Potter" AND director = "Chris Columbus";
SELECT * FROM movies WHERE title LIKE "Harry Potter" OR director = "Chris Columbus";
SELECT * FROM movies WHERE title LIKE "Harry Potter" OR director = "Chris Columbus" AND year = 2001;
SELECT * FROM movies WHERE (title LIKE "Harry Potter" OR director = "Chris Columbus") AND year = 2001;
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
SELECT * FROM movies WHERE director_id = (SELECT id FROM directors WHERE name = "Chris Columbus");
```

#### DISTINCT

Permite hacer una distinción entre los valores de una columna, y solo
traer los valores únicos.

```sql
SELECT DISTINCT director FROM movies;
```

#### ORDER BY

Si no se pone ASC o DESC, por defecto es ASC.

```sql
SELECT * FROM movies ORDER BY year;
SELECT * FROM movies ORDER BY year DESC;
SELECT * FROM movies ORDER BY year DESC, title ASC;
```

#### LIMIT

Permite limitar la cantidad de resultados que se traen.  
Se puede usar con o sin OFFSET, éste permite traer los resultados
a partir de una posición que yo especifique. Esto se usa para
hacer paginaciones. El OFFSET empieza desde 0.

```sql
SELECT * FROM movies LIMIT 5;
SELECT * FROM movies LIMIT 5 OFFSET 5;
```

#### COUNT

Permite contar la cantidad de registros que hay en una tabla.

```sql
SELECT COUNT(*) FROM movies;
SELECT COUNT(*) FROM movies WHERE year = 2001;
SELECT COUNT(*) FROM movies WHERE year = 2001 AND director = "Chris Columbus";
```

#### GROUP BY

Permite agrupar los resultados de una consulta por una columna.

```sql
SELECT director, COUNT(*) FROM movies GROUP BY director;
-- HAVING permite filtrar los resultados de un GROUP BY
SELECT director, COUNT(*) FROM movies GROUP BY director HAVING COUNT(*) > 1;
```

#### JOIN

Permite unir dos tablas, y traer los datos de ambas tablas según la relación
especificada.  
Permite recuperar los datos de una tabla y poder llevarla a otra tabla y
traer los datos de ambas tablas.

**INNER JOIN**, Permite traer los datos que hacen match en ambas tablas.
Si no hay match, no se traen los datos. Suele ser el más utilizado.

**OUTER JOIN**, hay varios tipos:

**LEFT JOIN**, Permite traer los datos que hacen match en ambas tablas,
pero tambien trae todos los datos de la tabla de la izquierda.

**RIGHT JOIN**, Permite traer los datos que hacen match en ambas tablas,
pero tambien trae todos los datos de la tabla de la derecha.

**FULL JOIN**, Permite traer todos los datos de ambas tablas, incluso los que
no hacen match.

La sentencia seria, primero la tabla de la izquierda, luego el tipo de JOIN,
luego la tabla de la derecha, luego la relación y por último la condición.  
Si no se especifica el tipo de JOIN, por defecto es INNER JOIN, se puede
encontrar tanto JOIN como INNER JOIN.

```sql
SELECT * FROM movies JOIN directors ON movies.director_id = directors.id;
SELECT * FROM movies JOIN directors ON movies.director_id = directors.id WHERE movies.year = 2001 AND directors.name = "Chris Columbus";
SELECT movies.title, directors.name FROM movies JOIN directors ON movies.director_id = directors.id WHERE movies.year = 2001 AND directors.name = "Chris Columbus" ORDER BY movies.title DESC;
SELECT movies.title, directors.name FROM movies JOIN directors ON movies.director_id = directors.id WHERE movies.year = 2001 AND directors.name = "Chris Columbus" ORDER BY movies.title DESC LIMIT 5;
SELECT movies.title, directors.name FROM movies LEFT JOIN directors ON movies.director_id = directors.id WHERE movies.year = 2001 AND directors.name = "Chris Columbus" ORDER BY movies.title DESC LIMIT 5 OFFSET 5;
```

#### UNION

Permite unir los resultados de dos consultas.

```sql
SELECT * FROM movies WHERE year = 2001
UNION
SELECT * FROM movies WHERE year = 2002;
```

#### UPDATE

Permite actualizar los datos de una tabla.

```sql
UPDATE movies SET year = 2000 WHERE id = 1;
UPDATE movies SET year = 2000, rating = 8.0 WHERE id = 1;
```

#### DELETE

Permite eliminar los datos de una tabla.

```sql
DELETE FROM movies WHERE id = 1;
DELETE FROM movies WHERE year = 2001 AND director = "Chris Columbus";
```

#### TRIGGERS

Permite ejecutar una acción cuando se inserta, actualiza o elimina un registro.

```sql
CREATE TRIGGER trigger_name
AFTER INSERT
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
  UPDATE directors SET rating = (SELECT AVG(rating) FROM movies WHERE director_id = NEW.director_id) WHERE id = NEW.director_id;
END $$
DELIMITER ;
```

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

#### Atajos de teclado

- ctrl + enter: ejecuta la consulta en la que esta el cursor
- ctrl + d: duplica la linea en la que esta el cursor
- ctrl + l: elimina la linea en la que esta el cursor
