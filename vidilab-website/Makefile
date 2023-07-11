all: start
NAME=vidilab-website

build:
	docker build -t ${NAME} .

start:
	docker run -p 3000:3000 ${NAME}

clean:
	docker image rm -f ${NAME}