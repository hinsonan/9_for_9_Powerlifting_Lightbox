## Run the Server Electron App
`npm start`

## Docker

`docker build --tag app .`

`xhost +local:root`

`export QT_X11_NO_MITSHM=1`

```
docker run --net=host --volume="$HOME/.Xauthority:/root/.Xauthority:rw" -e DISPLAY=$DISPLAY -p 1080:1080 app
```