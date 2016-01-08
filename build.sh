#!/bin/bash

# Increase file descriptor limit on OSX.
ulimit -n 2560

# install npm packages
npm i

# set path for binaries of node modules
PATH=node_modules/.bin:$PATH
export PATH

# install node modules
bower install --config.interactive=false

# compile front end code
grunt webpack
