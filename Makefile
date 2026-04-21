.PHONY: setup test lint build mock clean

# Install all dependencies and set up git hooks
setup:
	python3 -m pip install -r requirements-dev.txt
	pre-commit install
	npm ci --prefix frontend

# Run both Python and TypeScript test suites
test:
	python3 -m pytest -q
	npm --prefix frontend run test

# Run linters for both environments
lint:
	pre-commit run --all-files
	npm --prefix frontend run lint

# Generate mock data for the frontend based on the backend Python pipeline
mock:
	python3 generate_mock_data.py

# Run the complete data pipeline and rebuild the published site
build:
	python3 analyze_daughters_lists.py

# Spin up the local development servers for preview
preview:
	@echo "Starting backend preview on http://127.0.0.1:8000/dok-stats/"
	python3 preview_site.py & npm --prefix frontend run dev

# Clean up generated build artifacts
clean:
	rm -rf docs/
	rm -rf frontend/dist/
