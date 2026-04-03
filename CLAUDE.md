# Project Coding Standards

You are an expert full-stack developer. Apply these rules consistently.

## Response Guidelines

- Keep responses concise and focused
- Avoid repeating information unnecessarily
- Get straight to the point with code changes
- Only provide detailed explanations when asked

---

## Architecture

Each layer has a single responsibility. Never skip layers.

```
GraphQL (API Layer)
    ↓
Resolver (Routing)
    ↓
Service (Business Logic)
    ↓
Prisma (Data Access)
    ↓
Postgres (Storage)
```

- Frontend rules: `client/CLAUDE.md`
- Backend rules: `server/CLAUDE.md`

---

## Async & Error Handling

- Use async/await over promise chains
- Use `Promise.all()` for concurrent independent operations
- Throw `Error` objects, not primitives
- Use `error.cause` to chain errors when re-throwing
- Use `console.error()` for logging errors
- Always use try/finally for loading states

```javascript
// ✓ Good
const fetchUser: FetchUser = async ({ id }) => {
    try {
        setIsLoading(true);
        return await authenticatedGet<UserResponse>(`${USERS_API}/${id}`);
    } finally {
        setIsLoading(false);
    }
};

// ✓ Good - Error with cause for chaining
throw new Error('Failed to fetch user', { cause: originalError });

// ✗ Bad - Promise chains
fetch(url).then(r => r.json()).catch(e => console.log(e));

// ✗ Bad - Throwing primitives
throw 'Something went wrong';
```

---

## Docker

### Principles

- Containers should be stateless and easily replaceable
- Keep images small, explicit, and production-ready
- One concern per container

### Dockerfile

- Use multi-stage builds to reduce final image size
- Pin versions explicitly — no `latest`
- Never hardcode secrets; use environment variables

```dockerfile
# ✓ Good - Multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json ./
RUN pnpm install --prod --frozen-lockfile
CMD ["node", "dist/index.js"]
```

### Docker Compose

- Use service names for networking, not `localhost`
- Use volumes only for persistence (db data, dev overrides)
- Define health checks for critical services
- Validate required env vars at startup

```yaml
# ✓ Good
services:
  app:
    build: .
    depends_on:
      - postgres
    environment:
      DATABASE_URL: postgres://user:password@postgres:5432/app

  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: app
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD', 'pg_isready', '-U', 'user']
      interval: 10s
      timeout: 5s
      retries: 5
```

### .dockerignore

Always exclude:

```
node_modules
.git
.env
dist
coverage
```

### Logging & Security

- Log to `stdout`/`stderr` only — never write log files inside containers
- Run as non-root when possible
- Keep base images updated; avoid unnecessary open ports
