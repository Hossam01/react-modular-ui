#!/usr/bin/env bash

mkdir -p dist
mkdir -p styles/dist/default

sh ./run/scripts.sh
sh ./run/webpack.sh
sh ./run/stylus.sh
