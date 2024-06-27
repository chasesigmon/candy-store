## Description

Candy Store API (https://github.com/FlorenceHC/public-api-service)

[Nest] A NestJS project.\
[Typescript] A Typescript project.\
[PNPM] A pnpm project.\
[Docker] Uses Docker.\
[MariaDB] Uses dockerized MariaDB.\
[Auth] Bearer token auth.

The Candy Store API allows for customer, inventory, store, and order records to be created, updated, and retrieved.

## Setup

```bash
$ pnpm run install
```

## Running the app

```bash
$ pnpm run start:prod
```

Steps that occur on start:

- A MariaDB container is created
- DB is automatically created
- DB is seeded with customer, inventory, store, and order records
- NestJS app runs

Make requests at `localhost:3000`.

<img width="1065" alt="Screen Shot 2024-06-27 at 7 48 42 PM" src="https://github.com/chasesigmon/candy-store/assets/7799494/5c2ce671-c328-4e3c-a8bc-426196cfb4ef">

The swagger documentation is located at `localhost:3000/api`.

<img width="1452" alt="Screen Shot 2024-06-27 at 7 48 05 PM" src="https://github.com/chasesigmon/candy-store/assets/7799494/52420838-5491-4ca2-9116-a8a4b2ef6f83">

An access token is necessary to make requests to customers, inventories, stores, orders, and report endpoints. A token can be generated at `localhost:3000/auth`. Once generated it should be used as the Bearer Token.

## Testing

The tests use an in memory sqlite database.

```bash
# unit tests
$ pnpm run test

# run a specific test or tests in a specific directory
$ pnpm run test src/routes/healthcheck

# e2e tests
$ pnpm run test:e2e

# run a specific test or tests in a specific directory
$ pnpm run test:e2e test/healthcheck
```

## Architecture Design

The design can be found in the `/assets/candy-store.yaml` file. A developer would be able to fully implement the Candy Store API by following the API design.
