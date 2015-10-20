FROM debian:latest
MAINTAINER Daeseon MOon <daeseonmoon@gmail.com>

RUN apt-get update
RUN apt-get dist-upgrade -y
RUN apt-get install vim git git-core g++ wget -y

RUN cd /opt; wget https://nodejs.org/dist/v4.2.1/node-v4.2.1-linux-x64.tar.gz; tar -xvzf /opt/node-v4.2.1-linux-x64.tar.gz; mv /opt/node-v4.2.1-linux-x64 /opt/node; ln -s /opt/node/bin/node /usr/bin/node; ln -s /opt/node/bin/npm /usr/bin/npm; npm install -g bower
RUN mkdir -p /study/frontend
RUN cd /study/frontend; git clone --depth=14 https://github.com/angular/angular-phonecat.git
RUN cd /study/frontend/angular-phonecat; npm install; git checkout -f step-0

WORKDIR /study/frontend/angular-phonecat


EXPOSE 8000 
CMD ["npm", "start"]
