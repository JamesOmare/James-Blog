//to start the app in dev mode with docker
//docker compose up

Since we have restricted the node_modules folder to be accessible from the docker container only,
if you need to install a new package to your project from the host machine,
try this command in a new terminal from the project root directory.
//first 
docker compose up -d {dev/prod app name}
docker compose exec {dev/prod app name} npm install {PACKAGE_NAME} 

//prod
Build and run the production image locally
docker build -t kafka_blog-prod -f Dockerfile.prod .
docker run -it -p 3000:3000 kafka_blog-prod


//updated
//Dev mode
docker compose up kafka_blog

//Prod mode
docker compose up kafka_blog_prod
