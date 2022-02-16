# Territorial Division API RESTful

This API RESTful exposes the territorial division information of the Dominican Republic provided by the ONE.

## Open Endpoints

Open endpoints require no Authentication.

## Territorial Division: ``/v1/territories``

* **Regions** : `GET /v1/territories/regions`
* **Provinces** : `GET /v1/territories/provinces`
* **Municipalities** : `GET /v1/territories/municipalities`
* **Districts** : `GET /v1/territories/districts`
* **Sections** : `GET /v1/territories/sections`
* **Neighborhood** : `GET /v1/territories/neighborhood`
* **Sub Neighborhood** : `GET /v1/territories/sub-neighborhood`

## Endpoints description

### Regions

#### Endpoint

``/v1/territories/regions``

#### Params description

| Params | Description |
| --- | --- |
| `name` | Region name |
| `code` | Region code |
| `identifier` | Region identifier code |

#### Example

Request:

```sh
curl -X 'GET' \
  'https://api.digital.gob.do/v1/territories/regions' \
  -H 'accept: application/json'
```

Response:

```json
{
  "valid": true,
  "data": [
    {
      "name": "Región Cibao Norte",
      "code": "01",
      "identifier": "01"
    },
    ...
  ]
}
```

### Provinces

#### Endpoint

``/v1/territories/provinces``

#### Params description

| Params | Description |
| --- | --- |
| `name` | Region name |
| `code` | Region code |
| `identifier` | Province identifier code |
| `regionCode` | Region identifier code |

#### Example

Request:

```sh
curl -X 'GET' \
  'https://api.digital.gob.do/v1/territories/provinces?regionCode=08' \
  -H 'accept: */*'
```

Response:

```json
{
  "valid": true,
  "data": [
    {
      "name": "El Seibo",
      "code": "08",
      "identifier": "0808",
      "regionCode": "08"
    },
    ...
  ]
}
```

### Municipalities

#### Endpoint

``/v1/territories/municipalities``

#### Params description

| Params | Description |
| --- | --- |
| `name` | Region name |
| `code` | Region code |
| `identifier` | Province identifier code |
| `regionCode` | Region identifier code |
| `provinceCode` | Province identifier code |

#### Example

Request:

```sh
curl -X 'GET' \
  'https://api.digital.gob.do/v1/territories/municipalities?provinceCode=11&regionCode=08' \
  -H 'accept: */*'
```

Response:

```json
{
  "valid": true,
  "data": [
    {
      "name": "Higüey",
      "code": "01",
      "identifier": "081101",
      "provinceCode": "11",
      "regionCode": "08"
    },
    ...
  ]
}
```

### Districts

#### Endpoint

``/v1/territories/districts``

#### Params description

| Params | Description |
| --- | --- |
| `name` | Region name |
| `code` | Region code |
| `identifier` | Province identifier code |
| `regionCode` | Region identifier code |
| `provinceCode` | Province identifier code |
| `municipalityCode` | Municipality identifier code |

#### Example

Request:

```sh
curl -X 'GET' \
  'https://api.digital.gob.do/v1/territories/districts?municipalityCode=01&provinceCode=11&regionCode=08' \
  -H 'accept: */*'
```

Response:

```json
{
  "valid": true,
  "data": [
    {
      "name": "Higüey",
      "code": "01",
      "identifier": "08110101",
      "municipalityCode": "01",
      "provinceCode": "11",
      "regionCode": "08"
    },
    ...
  ]
}
```

### Sections

#### Endpoint

``/v1/territories/sections``

#### Params description

| Params | Description |
| --- | --- |
| `name` | Region name |
| `code` | Region code |
| `identifier` | Province identifier code |
| `regionCode` | Region identifier code |
| `provinceCode` | Province identifier code |
| `municipalityCode` | Municipality identifier code |
| `districtCode` | District identifier code |

#### Example

Request:

```sh
curl -X 'GET' \
  'https://api.digital.gob.do/v1/territories/sections?districtCode=01&municipalityCode=01&provinceCode=11&regionCode=08' \
  -H 'accept: */*'
```

Response:

```json
{
  "valid": true,
  "data": [
    {
      "name": "Salvaleón de Higüey (Zona urbana)",
      "code": "01",
      "identifier": "0811010101",
      "districtCode": "01",
      "municipalityCode": "01",
      "provinceCode": "11",
      "regionCode": "08"
    },
    ...
  ]
}
```

### Neighborhoods

#### Endpoint

``/v1/territories/neighborhoods``

#### Params description

| Params | Description |
| --- | --- |
| `name` | Region name |
| `code` | Region code |
| `identifier` | Province identifier code |
| `regionCode` | Region identifier code |
| `provinceCode` | Province identifier code |
| `municipalityCode` | Municipality identifier code |
| `districtCode` | District identifier code |
| `sectionCode` | Section identifier code |

#### Example

Request:

```sh
curl -X 'GET' \
  'https://api.digital.gob.do/v1/territories/neighborhoods?sectionCode=01&districtCode=01&municipalityCode=01&provinceCode=11&regionCode=08' \
  -H 'accept: */*'
```

Response:

```json
{
  "valid": true,
  "data": [
    {
      "name": "Mamá Tingó",
      "code": "003",
      "identifier": "0811010101003",
      "sectionCode": "01",
      "districtCode": "01",
      "municipalityCode": "01",
      "provinceCode": "11",
      "regionCode": "08"
    },
    ...
  ]
}
```

### Sub-Neighborhoods

#### Endpoint

``/v1/territories/sub-neighborhoods``

#### Params description

| Params | Description |
| --- | --- |
| `name` | Region name |
| `code` | Region code |
| `identifier` | Province identifier code |
| `regionCode` | Region identifier code |
| `provinceCode` | Province identifier code |
| `municipalityCode` | Municipality identifier code |
| `districtCode` | District identifier code |
| `sectionCode` | Section identifier code |
| `neighborhoodsCode` | Neighborhoods identifier code |

#### Example

Request:

```sh
curl -X 'GET' \
  'https://api.digital.gob.do/v1/territories/sub-neighborhoods?neighborhoodCode=003&sectionCode=01&districtCode=01&municipalityCode=01&provinceCode=11&regionCode=08' \
  -H 'accept: */*'
```

Response:

```json
{
  "valid": true,
  "data": {
    "name": "Mamá Tingó",
    "code": "01",
    "identifier": "081101010100301",
    "neighborhoodCode": "003",
    "sectionCode": "01",
    "districtCode": "01",
    "municipalityCode": "01",
    "provinceCode": "11",
    "regionCode": "08"
  }
}
```

