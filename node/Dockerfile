# Use the Node.js Alpine image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy all files from the current local directory into the container's working directory
COPY . .

# Run npm install inside the container to install dependencies
RUN npm install

# Define the command to run the application when the container starts
CMD ["npm", "start"]