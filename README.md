# Servicio de división territorial

[![Prod Deployment](https://github.com/opticrd/transparency-api/actions/workflows/prod-cd.yml/badge.svg)](https://github.com/opticrd/transparency-api/actions/workflows/prod-cd.yml)

## Tabla de contenidos

- [Servicio de división territorial](#servicio-de-división-territorial
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Descripción y contexto](#descripción-y-contexto)
  - [Referencia del servicio](#referencia-del-servicio)
  - [Cómo iniciar](#cómo-iniciar)
  - [Stack de desarrollo](#stack-de-desarrollo)
    - [Servidor](#servidor)
    - [Base de datos](#base-de-datos)
  - [Autores](#autores)

## Descripción y contexto

Este servicio es un [wrapper](https://es.quora.com/Qu%C3%A9-es-exactamente-un-wrapper-API-Y-en-qu%C3%A9-se-diferencia-de-solo-una-API) de la división territorial definida por la [Oficina Nacional de Estadística (ONE)](https://www.one.gob.do/publicaciones/2021/division-territorial-2020/).

## Referencia del servicio

- [Documentación oficial](https://developers.digital.gob.do)

## Cómo iniciar

1. Configuración del repositorio

```sh
    # Clonar repositorio
    git clone https://github.com/opticrd/territorial-division-api.git;
```

2. Declarar y definir las variables de entorno

```sh
    # Crear archivo de variables de entorno
    cd territorial-division-api;
    touch .env;
```

```sh
    # Application
    PORT=
    API_VERSION=
    NODE_ENV=

    # Database
    DB_HOST=
    DB_PORT=
    DB_USER=
    DB_NAME=
    DB_PASSWORD=
    DB_LOGGING=
```

3. Instalar dependecias

```sh
    yarn
```

4. Correr proyecto

```sh
    npm run start:dev
```

## Stack de desarrollo

### Servidor

- Node.js
  - Nest.js Framework

### Base de datos

- Postgres

## Autores

Septiembre 2021

- [Marluan Espiritusanto](https://github.com/marluanespiritusanto)
