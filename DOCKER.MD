# Docker Build 
docker build . -t profile-app

## build by cearing cache
docker build --no-cache -t profile-app .

# Docker Run
docker run -p 3000:3000 profile-app

# List all the containers
docker ps -a

# delete container
docker rm name_of_the_container