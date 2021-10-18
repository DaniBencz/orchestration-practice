## Docker Swarm Practice

**Start manually:**

- `npm i` in both /api and /service folder
- `npm run start` in both folders

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

- `kubectl apply -f k8s/`

**Usage:**  
`localhost:4000/anyName`
