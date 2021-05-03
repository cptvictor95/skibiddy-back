# Skibiddy Backend
This is a study project created with the intent of practicing the knowledge learned throughout the Labenu Web Full Stack course.

The project is intended to be a music platform where you can publish your own music, initially through hyperlinks.


### My References
- Deezer
- Spotify
- Tidal
- Apple Music
- SoundCloud


### Dependencies

<details>
<summary>
Production
</summary>

- ##### bcryptjs
- ##### cors
- ##### dotenv
- ##### express
- ##### jsonwebtoken
- ##### knex
- ##### mysql
- ##### uuid
</details>

<details>
<summary>
Development
</summary>

- ##### @types/bcryptjs
- ##### @types/cors
- ##### @types/express
- ##### @types/graceful-fs
- ##### @types/jest
- ##### @types/jsonwebtoken
- ##### @types/knex
- ##### @types/node
- ##### @types/uuid
- ##### @typescript-eslint/eslint-plugin
- ##### @typescript-eslint/parser
- ##### eslint
- ##### eslint-config-prettier
- ##### eslint-plugin-prettier
- ##### jest
- ##### nodemon
- ##### prettier
- ##### ts-jest
- ##### ts-node
- ##### typescript
</details>

## Entities structure examples:

#### User
```
{
	"id": "b1x8g4eh-2e23-205a-1392-4b9adf40da28",
	"name": "John Doe",
	"email": "john.doe@email.com",
	"nickname": "johnDoe",
	"password": "asd123"
}
```

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

#### Object returned on success:
```
{
    "status": "Success!",
    "message": "User registered!",
    "user": {
        "name": "John Doe",
        "nickname": "johnDoe",
        "email": "john.doe@email.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE2YzJhYzM4LTZkNDgtNDQ3MC1hMmI0LWIyNTU5NWNjOTAxNyIsImlhdCI6MTYxOTcyNjQzNSwiZXhwIjoxNjE5NzMwMDM1fQ.rV_xImeAk3wT7bFS9mzjJnEnmZcV50RdeH4TNYGb9uY"
}
```

### SignIn
#### Method `POST`
#### Path: `/signin`
#### SignIn object structure example:
```
{
	"email": "john.doe@email.com",
	"password": "asd123"
}
```

#### Object returned on success:
```
{
	"status": "Success!",
	"message": "User logged in!",
	"user": "john.doe@email.com",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwMjFlOTY1LTExMDItNGQ4MC1iNWQ0LThkOTI2MDViNzc4NiIsImlhdCI6MTYxOTcyOTgzNSwiZXhwIjoxNjE5NzMzNDM1fQ.vQwZtEWr3cGbjI-LArk1FfvZ57r6JUMS-_ZobO93a2o"
}
```

### Usage instructions:
Create a new folder on your PC, download the code and run the following commands on your terminal.

To install the project dependencies:

If you use yarn
```
yarn install
```
If you use NPM
```
npm install
```

Then run the following commands to run the project:

If you use yarn
```
yarn dev
```
If you use NPM
```
npm run dev
```

The project also has automated tests for every endpoint made, to test it, run the following commands:

If you use yarn
```
yarn test
```
If you use NPM
```
npm run test
```