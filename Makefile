dev:
	docker compose up

test:
	docker compose run --rm app npm test
