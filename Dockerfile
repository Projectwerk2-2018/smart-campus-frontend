# base image
FROM node:9.6.1

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s build
EXPOSE 5000

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

RUN npm run build --production

RUN chmod +x /usr/src/app/run

# start app
# CMD ["serve", "-s", "build"]
CMD ["/usr/src/app/run"]