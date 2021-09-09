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
```

### Clean up containers, images and unused networks
```bash
docker system prune

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