#this is for dockerizing the application 




#use an official Node js base image

FROM node:18


#create and set a working directory

WORKDIR /app

#copy package.json and install the dependencies

COPY package.json .

RUN npm install

#copy the rest of the code

COPY . .

#expose the port our app run on

EXPOSE 4000

#command to run our app

CMD ["node","app.js"]