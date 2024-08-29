# build.sh

docker buildx create --name neat-builder
docker buildx use neat-builder
docker buildx build \
  --platform linux/amd64, linux/arm64, linux/arm/v7 \
  -t projectneat/neat:latest \
  --push \
  .