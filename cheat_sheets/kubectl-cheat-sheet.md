# Kubectl cheat sheet

## Apply configurations to the cluster
```bash
kubectl apply -f <file path>

# ex
kubectl apply -f client-pod.yaml

# multiple files
kubectl apply -f <dir name>
```

## Get information about objects
```bash
kubectl get <object type>

kubectl get pods

# Get a little more information
kubectl get pods -o wide

kubrvyl get deployments

kubectl get services

kubectl get storageclass

kubectl get pv

kubectl get secret(s)
```

## Inspect pod
```bash
kubectl describe <object type> <object name (optional)>

# ex
kubectl describe pod client-pod

kubectl describe storageclass

kubectl describe pv

kubectl describe secret pgpassword
```

## Delete object
This is an imperative command. It'd be difficult to do this declaratively.

```bash
kubectl delete -f <config file path>

# Ex with pods
kubectl delete -f client-pod.yaml

# Ex with deployments
kubectl delete deployment client-deployment

# Ex services
kubectl delete service client-node-port
```

## Imperative command to update deployment config
```bash
kubectl set <options> <object>/<object id> <opts>

# Update the image property on a deployment on the specified container (name in the spec for the deployment)
kubectl set image deployment/client-deployment client=stephengrider/multi-client:v5
```

## Get container logs
```bash
kubectl logs <container name>
```

## Run commands in the container
```bash
kubectl exec -it <container name>
```

## Get persistent volumes
```bash


```

## Create secret
```bash
# create is an imperative command we generally do not use
kubectl create secret <type> <secret_name> --from-literal <key>=<value>

# Ex.
kubectl create secret generic pgpassword --from-literal PGPASSWORD=mypassword

# docker registry is also a type of secret used to pull images
```