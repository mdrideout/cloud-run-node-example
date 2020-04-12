# cloud-run-node-example
A basic Google Cloud Run node app.

## Commands
- `serve:dev`: Serves a local docker instance using the *docker-compse dev.yaml*, accessible at [http://localhost:9090](http://localhost:9090)
    - The local instance uses nodemon for hot-reloading when code changes are saved.
- `gcloud:build`: Builds for Google Cloud using the Dockerfile
- `gcloud:deply`: Deploys for Google Cloud using the Dockerfile