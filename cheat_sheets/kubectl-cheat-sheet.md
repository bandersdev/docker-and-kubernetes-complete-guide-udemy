# Kubectl cheat sheet

## Apply configurations to the cluster
```bash
kubectl apply -f <file path>

# ex
kubectl apply -f client-pod.yaml
```

## Get information about objects
```bash
kubectl get <object type>

# ex.
kubectl get pods

# ex. Get a little more information
kubectl get pods -o wide
```

## Inspect pod
```bash
kubectl describe <object type> <object name (optional)>

# ex
kubectl describe pod client-pod
```

## Delete object
This is an imperative command. It'd be difficult to do this declaratively.

```bash
kubectl delete -f <config file path>

#ex
kubectl delete -f client-pod.yaml
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