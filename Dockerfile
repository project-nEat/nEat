# Default DEVELOPMENT value for scripts to use
# Change this at build, like so: `docker build --build-arg DEVELOPMENT=true -t <image name> .`
ARG DEVELOPMENT="false"

# Node base environment
FROM node:22.6

# Files
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install

# Make scripts executable
RUN chmod +x ./.docker/scripts/entrypoint.sh

# Server port
EXPOSE 3000

# Main process; if this ends, container stops
ENTRYPOINT [ "./docker/scripts/entrypoint.sh" ]