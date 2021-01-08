#!/bin/bash
set -e
# Run migrate
./node_modules/.bin/typeorm migration:run

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"