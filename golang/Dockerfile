FROM golang:latest as build

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN go mod download

RUN go build -o main ./src/*.go

CMD ["/app/main"]

EXPOSE 8080