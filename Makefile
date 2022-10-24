.PHONY: up 
up: down
	@echo "Start docker containers..."
	docker compose up --build -d
	@echo "Done"

.PHONY: down 
down:
	@echo "Stop docker containers..."
	docker compose down
	@echo "Done"
