## Description

Candy Store API (https://github.com/FlorenceHC/public-api-service)

[Nest] A NestJS project.\
[Typescript] A Typescript project.\
[PNPM] A pnpm project.\
[Auth] Bearer token auth.

The intention of this service is to exist outside of the API Gateway (Out of Band service). This allows uploads and downloads of files greater than 10 MB in size.

## Running the app

```bash
$ pnpm run start
```

The swagger documentation is located at `localhost:3000/api`.

## Testing

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
