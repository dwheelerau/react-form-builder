FROM node
RUN apt-get update && apt-get install -y git-core curl build-essential openssl libssl-dev vim

WORKDIR /App

#RUN npm i -g parcel-bundler
RUN yarn init -y
#RUN yarn add react react-dom

EXPOSE 3000
