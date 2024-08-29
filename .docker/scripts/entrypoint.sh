# entrypoint.sh

if [ "$DEVELOPMENT" = "true" ]; then
  echo "DOCKER: Running in development mode." && \
  npm run dev-server && \
  exec npm run serve
else \
  echo "DOCKER: Creating production build."
  npm run build && \
  echo "DOCKER: Running in production mode." && \
  exec npm run start
fi