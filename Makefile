install:
	docker-compose build

run:
	docker-compose up --build

contract-test:
	docker-compose run backend make contract-test

test:
	docker-compose run backend make test