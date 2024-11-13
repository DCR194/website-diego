
# Step 1: Use an official Node.js runtime as the base image
FROM node:22.11

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json from your website directory
COPY /home/diego/web-server/website-diego/package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app files from your website directory
COPY /home/diego/web-server/website-diego .

# Step 6: Build the app (if needed)
RUN npm run build

# Step 7: Expose the port Vite uses (default is 5173)
EXPOSE 5173

# Step 8: Start the Vite dev server in production mode
CMD ["npm", "run", "preview"]
