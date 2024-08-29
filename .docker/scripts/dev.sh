# dev.sh

docker run -it --rm \
  -e DEVELOPMENT=true \
  -p 3000:3000 \
  # HMR
  -v $(pwd):/usr/src/app \
  projectneat/neat