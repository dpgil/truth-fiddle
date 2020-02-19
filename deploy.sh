#!/bin/bash

git fetch --all
git reset --hard origin/master
npm install
npm run build
npm restart
