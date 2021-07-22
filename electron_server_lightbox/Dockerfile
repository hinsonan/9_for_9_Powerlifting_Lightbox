FROM node:latest
ARG user=electron
ARG ELECTRONVERSION=v8.0.3
ENV DEBIAN_FRONTEND=noninteractive
ENV QT_X11_NO_MITSHM=1
RUN apt-get update && \
    apt-get install -y build-essential ca-certificates libgbm-dev gconf2 gconf-service gvfs-bin libasound2 libcap2 libgconf-2-4 libgtk2.0-0 libnotify4 libnss3 libxkbfile1 libxss1 libxtst6 libgl1-mesa-glx libgl1-mesa-dri xdg-utils wget unzip libcanberra-gtk3-module && \
    useradd --create-home --shell /bin/bash $user
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY . .
USER $user
CMD [ "npm", "start" ]