Go Webdev Kit
=============

Introduction
------------
Go Webdev Kit is a web-based development platform built using the following technologies:
- Go
- Echo (Go web framework)
- NodeJS (for development only)
- React
- Babel
- Webpack

Developer Installation
----------------------
These instructions are only for developers looking to build a web application using this kit. While these instructions are for macOS, they should be adaptable for other platforms. Visual Studio Code is also optional, but this kit provides a build and run configuration for VSCode to make getting started quick and easy.

**Requirements**:
- macOS >= 10.10 (El Capitan)
- Homebrew: installation instructions: http://brew.sh/
- NodeJS >= 6.7: install using Homebrew: brew install node
- Go >= 1.7.1: install using Homebrew: brew install go
- Glide (Go package manager) >= 0.12.3: install using Homebrew: brew install glide
- Delve (Go debugger): install using Homebrew: brew install go-delve/delve/delve --HEAD
- Visual Studio Code: download from https://code.visualstudio.com
- VSCode Go plugin (author: lukehoban)
    - Install Plugin's Tools


**Instructions**:
- Checkout this repository into your `$GOPATH/src` folder with the name "go-webdev-kit".
- Using Terminal:
```bash
cd $GOPATH/src/go-webdev-kit/client
npm install
cd ../server
glide install (run twice)
cd vendor/github.com/labstack/echo
glide install
```

- Open the `$GOPATH/src/go-webdev-kit` folder in VSCode
- Start the TypeScript compiler: Cmd + Shift + B
    - You can stop it at any time: Cmd + Shift + P, then choose "Tasks: Terminate Running Task"
- Start the web server: F5
- View the app: http://localhost:8080

**Adding React Components**
Webpack automatically builds packages installed via npm. So simply running `npm install --save <package_name>` within the `client` directory will make the package available for use within your frontend code.
