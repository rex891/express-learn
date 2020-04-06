FROM node:alpine
WORKDIR /myfiles
RUN npm init -y
RUN npm install express
RUN apk add python3
COPY dist/ /myfiles/dist
COPY app.js backend.py /myfiles/
ENTRYPOINT ["node", "app"]
