# Create image based on the official Node 6 image from dockerhub
FROM node:8.9.4

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app/v2

# Install dependencies just if the file package.json is changed
COPY package.json /usr/src/app/v2/

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/v2

# Install dependecies
RUN npm i npm@latest -g
RUN npm install --silent

# Copy the rest of the code needed to run the app
COPY src /usr/src/app/v2/src
COPY angular.json tsconfig.json tslint.json /usr/src/app/v2/

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
