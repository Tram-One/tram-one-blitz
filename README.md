# tram-one-stackblitz

Hello, and thank you for trying out Tram-One on StackBlitz!

Getting started with Tram-One is easy, and with StackBlitz, you
already have everything you need to try it out, no installation
required!

If you have any trouble, check out our docs on http://tram-one.io
or visit our slack [here](https://join.slack.com/t/tram-one/shared_invite/enQtMjY0NDA3OTg2MzQyLWUyMGIyZTYwNzZkNDJiNWNmNzdiOTMzYjg0YzMzZTkzZDE4MTlmN2Q2YjE0NDIwMGI3ODEzYzQ4ODdlMzQ2ODM)

## Project Breakdown

To the left you should see several files and directories, this setup
works both on StackBlitz and on your local machine (if you export
this project to your machine).

`elements` - small components which can be used in other Tram-One
views.

`pages` - top level components which render on navigating to a route.

`index.html` - page where Tram-One will render

`local-package.json` - if you export this project, you can rename this to `package.json` (toss the one StackBlitz gives you) to do local development

`README.md` - this file!

`style.css` - file for any custom styles you want for the entire page

`webpack.config.js` - used for local development, builds and runs the project locally

## Local Developement Instructions
1. In the root directory, run `npm install` to install all the project dependencies
2. Run `npm start` to start the dev server
3. Navigate to http://localhost:8080 (or the url provided after running `npm start`)

## Local Developement Commands
Below are a list of commands used for developement. The logic for all the commands are in the local `package.json`
- `npm start` - starts a server hosting the webapp on localhost using
[webpack-serve](https://github.com/webpack-contrib/webpack-serve)
and will watch for changes
- `npm run build` - builds a final distributable using
[webpack](https://webpack.js.org/)
