# Skibiddy Backend

### Production Dependencies
- bcryptjs
- cors
- dotenv
- express
- jsonwebtoken
- knex
- mysql
- uuid

### Development Dependencies
- @types/bcryptjs
- @types/cors
- @types/express
- @types/graceful-fs
- @types/jest
- @types/jsonwebtoken
- @types/knex
- @types/node
- @types/uuid
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- jest
- nodemon
- prettier
- ts-jest
- ts-node
- typescript

## Endpoint instructions

### SignUp
#### Method `POST`
#### Path: `/signup`
#### SignUp object structure example:
```
{
  "name": "John Doe",
	"email": "john.doe@email.com",
	"nickname": "johnDoe",
	"password": "asd123"
}
```

#### User object structure example:
```
{
  "id": "b1x8g4eh-2e23-205a-1392-4b9adf40da28",
  "name": "John Doe",
	"email": "john.doe@email.com",
	"nickname": "johnDoe",
	"password": "asd123"
}
```

### References
- Deezer
- Spotify
- Tidal
- Apple Music
- SoundCloud