# We don't want to start from scratch.
# That is why we tell node here to use the current node image as base.
FROM node:17-alpine

# set working directory
WORKDIR /app
COPY package.json .

# install app dependencies
COPY . .
RUN npm install 

# for production
# RUN npm build 

# start react-gui app
CMD ["npm", "start"]
