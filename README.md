![logo](./frontend/src/logo.svg)

Same API Project - `<language>`
============================

This is a template project for the an API service. This API service was built using `<language>`.

Technologies used:

    - Used <language> X
    - Framework XX to do the contract tests
    - Framework XXX
    - Database XXX running inside docker


#### Checklist

- [ ] This project is dockerized
- [ ] This project uses a database and save a copy of the records in the filesystem
- [ ] This project contains tests
- [ ] This project exposes an interface as described in the API section in the `http://localhost:5000`
- [ ] This project is hosted in some cloud service
- [ ] This project was added to the list of [created projects](https:///github.com/LucasMagnum/same-api-projects) and turned into a submodule inside the same repository
- [ ] (Optional) This project contains a CI / CD workflow
- [ ] (Optional) This project contains a coverage report


Quick Start
===========

Clone this project, run the following command to `install` all dependencies:

    $ make install

Start the api service with the following command:

    $ make run

Run the contract tests to make sure your API is responding accordingly:

    $ make contract-tests

Run all tests:

    $ make test


This template contains a frontend interface that is connected to an API
running on port `5000`, after executing `make run` go to `http://localhost:3000` to interact with the frontend.

**Note**: The frontend is simple interface that will only list the records, it was made so one can see the records without calling the API.


API
====

This API has 2 main resources:

- Projects
- Inventors

An `Inventor` can be part of many `projects` and a `Project` can have many `inventors`.

The API has the following endpoints:

* /api/v1/projects
    * `/api/v1/projects/<id>`
* /api/v1/inventors
    * `/api/v1/inventors/<id>`

The basic operations are available for both resources: Create, Edit, Delete.


Projects
========

## Retrieve

To retrieve a project, we should send a GET request to `/api/v1/projects/<id>` or `/api/v1/projects/` to retrieve all projects:

The response will be a single object when retrieving by id or a list of objects with the following payload:

```json
{
    "id": "b1b0f5ca-6a29-4b62-ad4b-e44162b8fb82",
    "name": "Python",
    "description": "Python is a high-level language",
    "link": "https://github.com/python/python",
    "inventors": [{
        "id": "5e3c1d08-2c08-4f12-8448-830496878208",
        "name": "Guido van Rossum",
    }]
}
```


## Create

To create a project, we should send a POST request to `/api/v1/projects/` with the payload:

```json
{
    "name": "Phyton",
    "description": "Python is a high-level language",
    "link": "https://github.com/python/python",
    "inventors": [{
        "name": "Guido van Rossum",
    }]
}
```

This will return a 201 response the following data:

```json
{
    "id": "b1b0f5ca-6a29-4b62-ad4b-e44162b8fb82",
    "name": "Phyton",
    "description": "Python is a high-level language",
    "link": "https://github.com/python/python",
    "inventors": [{
        "id": "5e3c1d08-2c08-4f12-8448-830496878208",
        "name": "Guido van Rossum",
    }]
}
```

## Edit

To edit a project, we should send a PATCH request to `/api/v1/projects/<id>` with the payload:

```json
{
    "name": "Python",
    "inventors": [{
        "name": "Guido van Rossum",
    }, {
        "name": "Someone else"
    }]
}
```

This will return a 200 response with the following data:

```json
{
    "id": "b1b0f5ca-6a29-4b62-ad4b-e44162b8fb82",
    "name": "Python",
    "description": "Python is a power high level language",
    "link": "https://github.com/python/python",
    "inventors": [{
        "id": "5e3c1d08-2c08-4f12-8448-830496878208",
        "name": "Guido van Rossum",
    }, {
        "id": "a16e62b3-3579-4ff9-a19c-addf46b93be4",
        "name": "Someone else"
    }]
}
```


## Delete

To delete a project, we should send a DELETE request to `/api/v1/projects/<id>` with the payload:
This will return a 204 response with no data.



Inventors
========


## Retrieve

To retrieve a inventor, we should send a GET request to `/api/v1/inventors/<id>` or `/api/v1/inventors/` to retrieve all inventors:

The response will be a single object when retrieving by id or a list of objects with the following payload:

```json
{
    "id": "5e3c1d08-2c08-4f12-8448-830496878208",
    "name": "Guido van Rossum",
    "projects": [{
        "id": "b1b0f5ca-6a29-4b62-ad4b-e44162b8fb82",
        "name": "Python"
    }]
}
```

## Create
To create a inventor, we should send a POST request to `/api/v1/inventors/` with the payload:

```json
{
    "name": "Guido Rossum",
}
```

This will return a 201 response with the following data:

```json
{
    "id": "5e3c1d08-2c08-4f12-8448-830496878208",
    "name": "Guido Rossum",
}
```

## Edit
To edit a inventor, we should send a PATCH request to `/api/v1/inventors/<id>` with the payload:

```json
{
    "name": "Guido van Rossum",
}
```

This will return a 200 response with the following data:

```json
{
    "id": "5e3c1d08-2c08-4f12-8448-830496878208",
    "name": "Guido van Rossum",
}
```

## Delete
To delete a inventor, we should send a DELETE request to `/api/v1/inventors/<id>` with the payload:

```json
{
    "name": "Guido van Rossum",
}
```

This will return a 204 response with no data.


