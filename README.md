## Docker Swarm Practice

`npm i` in both /api and /service folder

Start with Docker Compose:  
`docker-compose up`  
Stop:  
`docker-compose down`

Or  
Start with Docker Swarm:  
`docker-compose build` _only once, to build images_  
`docker swarm init`  
`docker stack deploy -c docker-compose.yml <nameOfStack>`  
Stop:  
`docker stack rm <nameOfStack>`  
`docker swarm leave -f`

Usage:
`localhost:4000/anyName`
