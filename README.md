Kicked off the project with this [post](https://medium.freecodecamp.com/building-an-electron-application-with-create-react-app-97945861647c).

- - -

ideas:

* clipboard managing app
* drill app
* timesheet

- - -

What to do to install dev tools in development:

if (process.env.ELECTRON_START_URL) {
  // require('devtron').install()
  // const { homedir } = require('os')
  // BrowserWindow.addDevToolsExtension(
  //   path.resolve(
  //     homedir(),
  //     'Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0'
  //   )
  // )
  mainWindow.webContents.openDevTools()
}

- - -

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
