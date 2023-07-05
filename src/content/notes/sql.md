---
id: 'sql'
title: 'SQL'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 14 2022'
heroImage: '/sql.svg'
---

## Herramientas

- Gestionar las bases de datos:  
  Para usuarios Mac: https://dbngin.com/

- Aprender y practicar SQL:  
  https://sqlbolt.com/

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

Sentencia SQL:  
Primero iria el comando o acción, luego la columna(s) o atributo(s)
(\* permite recuperar todas las columnas), luego la tabla y por último la condición.  
Siempre debe ir un punto y coma al final.

```sql
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
// LIKE es una comparacion exacta pero case insensitive (ignora mayusculas y minusculas)
SELECT * FROM movies WHERE title LIKE "Harry Potter";
SELECT * FROM movies WHERE title NOT LIKE "Harry Potter";
// % para hacer match con cero o más caracteres (matches "AT", "ATTIC", "CAT", "BATS")
SELECT * FROM movies WHERE title LIKE "%AT%";
// % para hacer match con cero o más caracteres, pero solo al final (matches "AT", "ATTIC", but not "BATS")
SELECT * FROM movies WHERE title LIKE "AT%";
// _ para hacer match con un solo caracter (matches "AND", but not "AN")
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

#### COUNT

```sql
SELECT COUNT(*) FROM movies;
SELECT COUNT(*) FROM movies WHERE year = 2001;
SELECT COUNT(*) FROM movies WHERE year = 2001 AND director = "Chris Columbus";
```

#### GROUP BY

```sql
SELECT director, COUNT(*) FROM movies GROUP BY director;
SELECT director, COUNT(*) FROM movies GROUP BY director HAVING COUNT(*) > 1;
```
