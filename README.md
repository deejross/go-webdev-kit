Go WebDev Kit
=============

Introduction
------------
This repository contains a starter kit for developing web applications using the modern, best practices.
This kit uses the following technologies:
- Go
- Echo (Go web framework)
- NodeJS (for development only)
- React
- TypeScript
- Webpack

Developer Installation
----------------------
These instructions are only for developers looking to build a web application using this kit.

**Requirements**:
- macOS >= 10.10 (El Capitan)
- Homebrew: installation instructions: http://brew.sh/
- NodeJS >= 6.7: install using Homebrew: brew install node
- Go >= 1.7.1: install using Homebrew: brew install go
- Delve (Go debugger): install using Homebrew: brew install go-delve/delve/delve
- Visual Studio Code: download from https://code.visualstudio.com
- VSCode Go plugin (author: lukehoban)
    - Install Plugin's Tools


**Instructions**:
- Checkout this repository into your `$GOPATH/src` folder with the name "webdev-kit".
- Using Terminal:
```bash
cd $GOPATH/src/webdev-kit/client
npm install
```
- Open the `$GOPATH/src/webdev-kit` folder in VSCode
- Start the TypeScript compiler: Cmd + Shift + B
    - You can stop it at any time: Cmd + Shift + P, then choose "Tasks: Terminate Running Task"
- Start the web server: F5
- View the app: http://localhost:8080

You can now start developing. Use `.ts` and `.tsx` files instead of `.js` and `.jsx` files. Changes to all `.ts` and `tsx` files will be compiled automatically and require
only a page refresh to see changes. Backend changes still require a restart of the debugger.

**Adding React Components**
This project comes with React, ReactDOM, ReactRouter, and Semantic UI by default.
To add additional libraries/components, you'll need to install a TypeScript definition for it, as well as
specify it in the index.html file.
- Install the TypeScript definition:
    - `npm install --save @types/[lib-name]`
- Install the component:
    - `npm install --save [lib-name]`
