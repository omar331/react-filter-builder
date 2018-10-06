FROM ubuntu

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y wget gnupg \
                       --fix-missing curl \
                       git-core \
                       nano \
                       binutils \
                       libglib2.0-dev \
                       software-properties-common

RUN cd /tmp && curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get update

RUN apt-get install -y nodejs

RUN npm install babel-cli  webpack webpack-dev-server gulp-cli gulp install webpack-cli  -g


RUN mkdir -p /opt/scripts

COPY ./run-task /opt/scripts



RUN echo "cd /opt/app/" >> ~/.bashrc

EXPOSE 7000

