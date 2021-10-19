## Orchestration Practice

**Start manually:**

- `npm --prefix ./api i`
- `npm --prefix ./api start`
- `npm --prefix ./service i`
- `npm --prefix ./service start`

**Start with Docker Compose:**

- `docker-compose up`  
  Stop:
- `docker-compose down`

**Start with Docker Swarm:**

- `docker-compose build` _only once, to build images_
- `docker swarm init`
- `docker stack deploy -c docker-compose.yml <nameOfStack>`  
  Stop:
- `docker stack rm <nameOfStack>`
- `docker swarm leave -f`

**Start with Kubernetes:**

- make sure that the images are built already
- `kubectl apply -f helm/templates/`

**Start with Helm:**

- make sure that the images are built already
- `helm install <nameofrelease> ./helm`  
  or
- `helm install <nameofrelease> helm-0.1.0.tgz`  
  Stop:
- `helm delete <nameofrelease>`

**Usage:**

- `localhost:4000/anyName`
