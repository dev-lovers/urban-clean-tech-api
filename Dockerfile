# Required command
# Pulls the Node image with alpine version
FROM node:18-alpine

# Sets the location where the app will reside on the container's disk
WORKDIR /app

# Copy all configuration files to the /app folder
COPY package*.json ./
COPY tsconfig.json ./

# Executes npm install to add dependencies and create the node_modules folder
RUN npm install

# Copies everything from the directory where the Dockerfile is located
COPY . .

# Compiles the TypeScript code
RUN npm run build

# Specifies the port on which the server will run
EXPOSE ${PORT}

# Command to run the Node.js server
CMD ["node", "dist/index.js"]
