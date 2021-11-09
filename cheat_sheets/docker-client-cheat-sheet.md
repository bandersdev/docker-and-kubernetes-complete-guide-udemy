# Docker Client Cheat Sheet

## Docker run

```bash
docker run <image>
```

### Run with a specific command

```bash
docker run <image> <command>

# ex
docker run busybox echo hi there

# list the root directory in the image
docker run busybox ls

# bad example, can't do this. hello-world only contains a single file
docker run hello-world ls

# run with a command that will run for a while
docker run busybox ping google.com

# run and attach to a terminal immediately 
docker run -it busybox sh

# run container with a port mapping
docker run -p <host port>:<container port> <image id/name>

# ex. mapping different host and container ports
docker run -p 80:8080 bryananders/simpleweb

# run with volume
# the first switch puts a bookmark on the node_modules folder
docker run -v /app/node_modules -v $(pwd)/app <image id>
```

### List containers

```bash
# show running containers
docker ps

# show all containers that have been created on the machine
docker ps --all
docker ps -a
```

### Container lifecycle

Docker run is the combination of two commands: docker create and docker start
```bash
# create a container
# returns a container id
docker create <image>

# This just echos the container id as it starts
docker start <container id>

# The -a command makes docker attach the terminal
docker start -a <container id>
```

### Stop Docker container

```bash
# graceful shutdown
docker stop <container id>

# harsh shutdown
docker kill <container id>
```

### Run commands in containers

```bash
# the it flag allows us to pass input to the container
docker exec <-it> <container id> <command>

# get full terminal access in the container
docker exec -it <container id> sh

# run a command in a docker server by dynamically getting its container id
docker exec -it $(docker ps | grep simpleweb | awk '{print $1}') sh
```

### Build Docker Image

```bash
docker build <build context>

# simple example
docker build .

# tag the image
# It can be run with docker run <tag>
docker build -t bryananders/redis-server:latest .

# Spefify dockerimage
docker build -f Dockerfile.dev
```

### Docker Commit

Docker commit allows for making images from a running container. Adds a new Dockerfile entry.
```bash
docker commit -c '<dockerfile command>' <container id>

# This example produces a container that runs the redis server command and is based on one that started with alpine and installed redis
docker commit -c 'CMD ["redis-server"]' 1d335a7f152b
```

### Clean up containers, images and unused networks
```bash
docker system prune [-a]

#WARNING! This will remove:
#  - all stopped containers
#  - all networks not used by at least one container
#  - all dangling images
#  - all dangling build cache
```

### Get container logs

```bash
docker logs <container id>
```

### Attach to minikube docker server

The minikube docker-env command sets docker environment variables to point to the minikube docker server
```bash
eval $(minikube docker-env)
```