# Lets use latest LTS version of the node
FROM node:10-alpine

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY /src /app/src


RUN npm install --production --silent && mv node_modules ../
RUN npm install webpack-dev-server
# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 8081

# Container should end with only one CMD command, which kicks off the process for the container
CMD ["npm", "start"]
