# Create a monorepo locally, Add DB

- Initialize a turborepo

```rust
npx create-turbo@latest
```

- Initialize a `db` package that defines a simple prisma schema

```rust
cd packages
mkdir db
cd db
bun init 
bun install prisma
bunx prisma init
```

- Add a `model`

```

model User {
  id              String      @id    @default(uuid())
  username        String
  password        String
}
```

- Create a DB locally

```rust
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres  
```

- Update the .env file with the right credentials

```rust
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres
```

- Migrate the DB, generate the client

```rust
bunx prisma migrate dev
bunx prisma generate
```

- Add `index.ts`

```rust
import { PrismaClient } from "@prisma/client";

export const prismaClient;
```

- Export db (update package.json)

```rust
"exports": {
	"./client": "./index.ts"
}
```-
 Initialize a turborepo

```cmd
npx create-turbo@latest
```

- Initialize a `db` package that defines a simple prisma schema

```cmd
cd packages
mkdir db
cd db
bun init 
bun install prisma
bunx prisma init
```

- Add a `model`

```

model User {
  id              String      @id    @default(uuid())
  username        String
  password        String
}
```

- Create a DB locally

```cmd
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres  
```

- Update the .env file with the right credentials

```cmd
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres
```

- Migrate the DB, generate the client

```sh   
bunx prisma migrate dev
bunx prisma generate
```

- Add `index.ts`

```ts
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();
```

- Export db (update package.json)

```json
"exports": {
	"./client": "./index.ts"
}
```




