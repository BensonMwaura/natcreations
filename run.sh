#!bin/bash
PATH=$PATH:$(bash bin)
set -x

# Production build
ng build --prod

# Server
cd dist
live-server
