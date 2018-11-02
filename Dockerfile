# Lets use latest LTS version of the node
FROM node:10-alpine

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app

WORKDIR /app

#COPY ["package.json", "package-lock.json*", "./"]
COPY ./package.json .

RUN npm install

COPY . .

#RUN npm install --production --silent && mv node_modules ../
#RUN npm install webpack-dev-server
# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 8081

# Container should end with only one CMD command, which kicks off the process for the container
CMD ["npm", "start"]



# # base image
# FROM node:9.6.1

# # set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /usr/src/app/package.json
# RUN npm install --silent
# RUN npm install react-scripts@1.1.1 -g --silent

# # start app
# CMD ["npm", "start"]
