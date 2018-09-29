# Create image based on the official Node 6 image from dockerhub
FROM node:8.9.4

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app/v2

# Get all the code needed to run the app
COPY . /usr/src/app/v2

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/v2

# Install dependecies
RUN npm install

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
