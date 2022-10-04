# We don't want to start from scratch.
# That is why we tell node here to use the current node image as base.
FROM node:14.16.0-alpine3.13 as build-stage


# set working directory
WORKDIR /app

# install app dependencies
COPY . .
RUN npm install 
CMD ["npm", "start"]


