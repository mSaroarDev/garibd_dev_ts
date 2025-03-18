### Welcome to GariBd Development Environment!

Please follow the instruction to run the server to your local machine...

#### Requirement
Must install these packages to your computer
1. node js (version 23.0.1 or higher)
2. yarn 
3. typescript

#### Dependencies
user yarn to install the dependencies
open terminal and run 

``yarn``

##### env file
create **.env** to the root of the project directory and add these code if not already

``PORT=5000

CLIENT_URL=http://localhost:5001

NODE_ENV=development

JWT_SECRET=123

JWT_REFRESH_SECRET=456

SALT_ROUNDS=10

DB_URI=mongodb+srv://msaroardev:VnhMoIpWblU2fQ2k@devcluster.z8t4j.mongodb.net/garibd_dev``

#### start the backend
run the command 

``yarn dev``

#### Finally 
showing these lines indicates that the server is running perfectly

``✓ [SERVER STARTED] port 5000``

``✓ [DB CONNECTED] - URI mongodb+srv://msaroardev:VnhMoIpWblU2fQ2k@devcluster.z8t4j.mongodb.net/garibd_dev``