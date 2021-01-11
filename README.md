# Gatsby - Golang - Docker MVP

This is a proof of concept MVP (_minimum viable product_) of how a fullstack containerized app would run and with being managed by Docker Compose.

### Architecture

This app is a **microservice** oriented app that's consisted of 2 microservices (for the sake of simplicity of an MVP):<br/>

1. **Gatsby** (Frontend)
2. **Golang** (Backend)<br/>
   The microservices are on their own containers and each has its own _Dockerfile_. The containers are then managed and orchestrated by **Docker-Compose**.

### Concepts Proven

There are several concepts that I've shown with this application, those are:

1. Sending and Receiving HTTP Requests through the internal network of Docker-Compose.
2. Constructing a consumable REST API with Golang and serving it through a port with Docker.
3. Consuming an API of a port from a different container through Docker-Container's internal network with Gatsby.
4. Automating building and serving a Golang web app with a Makefile.

### Running

1. `Git clone`
2. `docker-compose up -d`
