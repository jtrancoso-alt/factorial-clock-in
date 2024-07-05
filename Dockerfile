# Use the official Puppeteer image
FROM ghcr.io/puppeteer/puppeteer:latest

# Create app directory
WORKDIR /app

# Copy project files
COPY package.json .
COPY factorial_clock_in.js .

# Install app dependencies
RUN npm install --unsafe-perm

# Run the script
CMD ["node", "factorial_clock_in.js"]