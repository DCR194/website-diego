FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Expose port 4173 (Vite's preview port)
EXPOSE 4173

# Start the application in preview mode
CMD ["npm", "run", "preview", "--", "--host"]