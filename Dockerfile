# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json package.json
RUN npm install 

# install and cache app dependencies
COPY . .

EXPOSE 3000
# start app
CMD ["npm", "start"]