#!/bin/bash

# Increase file descriptor limit on OSX.
ulimit -n 2560

# install dependencies
npm i
bower install

# set path for binaries of node modules
PATH=node_modules/.bin:$PATH
export PATH

# compile front end code
grunt webpack
