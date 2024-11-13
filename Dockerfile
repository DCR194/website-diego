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

# Expose port 5173 (Vite's default dev port)
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]