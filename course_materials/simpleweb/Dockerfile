# Specify the base image
# The Alpine image does not contain many programs at all so we look for an image that does
# The alpine tag gives the most stripped down version of an image
FROM node:alpine

WORKDIR /usr/app

# Copy is relative to the current working directory (build context)
# Copy packages.json now cause it is needed for dependencies
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy over the rest of the files after installing dependencies
# This prevents needing to reinstall dependencies after changing source code files
COPY ./ ./

# Default
CMD ["npm", "start"]