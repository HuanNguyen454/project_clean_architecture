# DemoCICD

Clean Architecture monorepo for a .NET 8 Web API backend and React frontend.

## Structure

```text
backend/
  src/
    Core/
    Infrastructure/
    Presentation/
    Shared/
  tests/
frontend/
  src/
docker-compose.yml
```

## Run With Docker

```bash
copy .env.example .env
docker compose up --build
```

- Backend API: http://localhost:8080
- Swagger: http://localhost:8080/swagger
- API health: http://localhost:8080/health
- Frontend: http://localhost:5173
- RabbitMQ management: http://localhost:15672

Default RabbitMQ account is `guest` / `guest`.

## Local Development

Backend:

```bash
dotnet restore backend/DemoCICD.sln
dotnet build backend/DemoCICD.sln
dotnet test backend/DemoCICD.sln
dotnet run --project backend/src/Presentation/DemoCICD.Api/DemoCICD.Api.csproj
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_BASE_URL` in `frontend/.env` when the API uses a different URL.

The frontend uses React with TypeScript, Ant Design, Axios, TanStack React Query,
FullCalendar, and Recharts. Validate it with:

```bash
npm run typecheck
npm run build
```

Generate frontend DTO types from the running .NET Swagger document:

```bash
npm run generate:api
```

Use `npm run generate:api:local` while the backend is unavailable. The local
OpenAPI contract is only a bootstrap example and should be replaced by the
backend-generated Swagger contract when API development starts.
