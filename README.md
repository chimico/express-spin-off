# Express Spin-off

*An ExpressJS spin-off to start NodeJS APIs with a BANG!*

## Getting Started
To use this repo on your project, download the zip file and extract to your project folder.

## Architecture
- bin/server.js  
  - Http/https server
- config/  
  - Configuration files and environment variables aggregator
- routes/  
  - Routes and controls actions, but without business intelligence 
- services/
  - Each file/class must be seen as a microservice
- main.js
  - API configuration and routes initialization
