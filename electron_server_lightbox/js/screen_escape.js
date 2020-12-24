// escape full screen
const remote = require("electron").remote;

document.addEventListener("keydown", event => {
  switch (event.key) {
    case "Escape":
      if (remote.getCurrentWindow().isFullScreen()) {
        remote.getCurrentWindow().setFullScreen(false);
      }
      break;
  }
});