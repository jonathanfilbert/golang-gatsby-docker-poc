all:
	make build
	make run
	
run:
	./main

build:
	rm -rf ./index
	rm -rf ./main
	go clean
	go build -o main ./src/*.go