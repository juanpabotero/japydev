---
id: 'nest'
title: 'NestJS'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/nest.svg'
---

## Comandos

Instalar NestJS CLI  
`npm install -g @nestjs/cli`

Ver version de NestJS CLI  
`nest --version` ó `nest -v`

Crear un nuevo proyecto  
`nest new project-name`

Crear una clase  
`nest g class class-name` ó `nest g cl class-name`

Crear un controlador  
`nest g controller controller-name` ó `nest g co controller-name`

Crear un servicio  
`nest g service service-name` ó `nest g s service-name`

Crear un módulo  
`nest g module module-name` ó `nest g mo module-name`

Crear un recurso (controlador, servicio, módulo, DTO y entidad)  
`nest g resource resource-name` ó `nest g res resource-name`

Crear un pipe  
`nest g pipe pipe-name` ó `nest g pi pipe-name`

Crear un guard  
`nest g guard guard-name` ó `nest g gu guard-name`

Generar el build de producción  
`npm run build`

## Conceptos

Si no se pone el modificador de acceso a una propiedad o método, por defecto es público.

### Archivos principales

- `main.ts`: Punto de entrada de la aplicación.
- `app.module.ts`: Módulo raíz de la aplicación.
- `app.controller.ts`: Controlador raíz de la aplicación.
- `app.service.ts`: Servicio raíz de la aplicación.
- `app.controller.spec.ts`: Pruebas unitarias del controlador raíz.
- `app.service.spec.ts`: Pruebas unitarias del servicio raíz.
- `.eslintrc.js`: Configuración de ESLint.
- `.gitignore`: Archivos ignorados por Git.
- `.prettierrc`: Configuración de Prettier.
- `nest-cli.json`: Configuración de Nest CLI.
- `package.json`: Archivo de dependencias de la aplicación.
- `tsconfig.build.json`: Configuración de TypeScript para el modo producción.
- `tsconfig.json`: Configuración de TypeScript para el modo desarrollo.

### Módulos

Los módulos son una forma de organizar la aplicación en bloques. Un módulo agrupa
elementos relacionados, como componentes, controladores, servicios, etc.

### Controladores

Se encargan de las rutas, son responsables de manejar las solicitudes entrantes y
devolver las respuestas al cliente.

```ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common';
import { CarsService } from './cars.service';

// indica que este controlador se encargará de las rutas que comiencen con /cars
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  // indica que este método se encargará de las peticiones GET a la ruta /cars
  // si no se especifica el decorador @Get() se asume que es un GET
  // si hay dos métodos con el mismo decorador y la misma ruta, se ejecuta el primero
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // indica que este método se encargará de las peticiones GET a la ruta /cars/:id
  // @Param() obtener el parámetro id de la ruta
  // ParseIntPipe convierte el parámetro id en un número entero
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  // indica que este método se encargará de las peticiones POST a la ruta /cars
  // @Body() obtener el cuerpo de la petición
  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  // indica que este método se encargará de las peticiones PATCH a la ruta /cars/:id
  // @Param() obtener el parámetro id de la ruta
  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  // indica que este método se encargará de las peticiones DELETE a la ruta /cars/:id
  // @Param() obtener el parámetro id de la ruta
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id
    };
  }
}
```

### Servicios

Los servicios son clases que contienen la lógica de negocio de la aplicación de
manera que sea reutilizable mediante inyección de dependencias. Se encargan de la
comunicación con la base de datos, de la lógica de negocio, etc.  
Los servicios se pueden inyectar en los controladores, en otros servicios, en
los módulos, etc.  
Los servicios son singletons, es decir, solo hay una instancia de cada servicio
en la aplicación.  
Todos los servicios son providers, pero no todos los providers son servicios.

```ts
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic'
    }
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }
}
```

### Pipes

Transforman los datos recibidos en la petición para que se ajusten al tipo de dato
que espera el controlador.  
Algunos pipes son:

- `ParseIntPipe`: Convierte el parámetro en un número entero.
- `ParseFloatPipe`: Convierte el parámetro en un número decimal.
- `ParseBoolPipe`: Convierte el parámetro en un booleano.
- `ParseArrayPipe`: Convierte el parámetro en un array.
- `ParseUUIDPipe`: Convierte el parámetro en un UUID.
- `ParseEnumPipe`: Convierte el parámetro en un valor de un enum.
- `ValidationPipe`: Convierte el parámetro en un objeto validado con class-validator.

También se pueden crear una nueva instancia del pipe para pasarle otros parametros.
ej: `new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })`

```ts
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }
}
```

### Exception filters

Los exception filters se encargan de manejar las excepciones que se producen en
la aplicación. Maneja los errores de código en mensajes de respuesta http.
Nest incluye casos comunes pero se pueden expandir para manejar casos específicos.  
Algunos exception filters son:

- `BadRequestException`: Maneja los errores 400.
- `NotFoundException`: Maneja los errores 404.
- `UnauthorizedException`: Maneja los errores 401.
- `ForbiddenException`: Maneja los errores 403.
- `NotAcceptableException`: Maneja los errores 406.
- `RequestTimeoutException`: Maneja los errores 408.
- `ConflictException`: Maneja los errores 409.
- `GoneException`: Maneja los errores 410.
- `InternalServerErrorException`: Maneja los errores 500.
- `NotImplementedException`: Maneja los errores 501.
- `BadGatewayException`: Maneja los errores 502.
- `HttpException`: Maneja los errores en general de http, se le puede pasar el
  mensaje y el código de error o pasar el mensaje y un enum. Ej:  
  `throw new HttpException('User already exists', HttpStatus.CONFLICT);`

### DTO

Los DTO (Data Transfer Object) son objetos que se utilizan para transferir datos
entre diferentes capas de la aplicación.  
Los DTO se utilizan para validar los datos que se reciben en las peticiones.

Se pueden utilizar los decorators de class-validator para validar los datos.
Se puede pasar un objeto de opciones al decorator para personalizar la validación.

```ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;
}
```

Para validar los pipes de manera global se puede definir la configuración en el
archivo `main.ts`.

```ts
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // indica que la aplicación usará un ValidationPipe para validar los datos de entrada
  /* whitelist: true indica que solo se aceptarán los datos que estan definidos en el DTO,
  los demás serán ignorados */
  /* forbidNonWhitelisted: true indica que si se envía un dato que no está definido en el DTO
  se lanzará un error */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  await app.listen(3000);
}
bootstrap();
```
