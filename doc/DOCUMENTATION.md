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

```sh
curl -X 'GET' \
  'http://localhost:3000/v1/territories/regions?name=La%20Altagracia&code=01&identifier=0101' \
  -H 'accept: application/json'
```