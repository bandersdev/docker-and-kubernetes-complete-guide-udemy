# Docker Compose Client Cheat Sheet

## Start containers

```bash
# run containers
docker compose up

# build then run
docker compose up --build

# run and detach
docker compose up -d
```

## Stop containers

```bash
docker compose down
```

## View Docker Compose Running Containers

This command looks for a docker-compose.yml file in the local directory, then looks for running containers defined in that file

```bash
docker-compose ps
```