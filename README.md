const markdownContent = `# Welcome to GariBd Development Environment!

Please follow the instructions below to set up and run the server on your local machine.

## Requirements

Ensure the following packages are installed on your computer:

1. **Node.js** (version 23.0.1 or higher)
2. **Yarn**
3. **TypeScript**

## Installation

### Step 1: Install Dependencies

Open your terminal and navigate to the project directory. Run the following command to install the necessary dependencies:

> yarn


### Step 2: Configure Environment Variables

Create a \`.env\` file in the root of the project directory if it doesn't already exist. Add the following configuration:

> PORT=5000
> CLIENT_URL=http://localhost:5001
> NODE_ENV=development
> JWT_SECRET=123
> JWT_REFRESH_SECRET=456
> SALT_ROUNDS=10
> DB_URI=mongodb+srv://msaroardev:VnhMoIpWblU2fQ2k@devcluster.z8t4j.mongodb.net/garibd_dev


### Step 3: Start the Backend Server

Run the following command to start the backend server:

> yarn dev

### Step 4: Verify Server Status

If the server starts successfully, you should see the following messages in your terminal:

> ✓ [SERVER STARTED] port 5000
> ✓ [DB CONNECTED] - URI mongodb+srv://msaroardev:VnhMoIpWblU2fQ2k@devcluster.z8t4j.mongodb.net/garibd_dev

These messages indicate that the server is running perfectly and is connected to the MongoDB database.

## Conclusion

You have successfully set up and started the GariBd development server on your local machine. Happy coding!