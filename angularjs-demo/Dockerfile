# Create image based on the official Node 6 image from dockerhub
FROM node:12

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app/v1

# Install dependencies just if the file package.json is changed
COPY package.json bower.json .bowerrc superstatic.json /usr/src/app/v1/

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/v1

# Install dependecies
RUN npm i npm@6.12.1 -g
RUN npm install --silent

# Copy all the code needed to run the app
COPY ./app /usr/src/app/v1/app

# Expose the port the app runs in
EXPOSE 8000

# Serve the app
CMD ["npm", "start"]

