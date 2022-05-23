READ ME


**Create a new project with a server.js file**

npm init --> default settings

npm install express mongoose body-parser

run server with nodemon server.js

**MongoDB Atlas**

create new Project

create a cluster --> by selecting aws, as cloud provider and any region, 
other settings leave as default --> give clusterName

create a new DB in cluster

Define Network Access --> add IP address (either own or allow access from anywhere --> 0.0.0.0/0)

Define Database Access --> create Database User | Authentication Method --> Password | 
Database User Privileges --> Atlas Admin

**Connect to Cluster** 
1. Connect with the mongo shell (follow steps)
2. Connect your Application
   1. Copy link and paste it in like here -->
$ mongoose.connect(
$ "mongodb+srv://admin:<password>>@clusterName.ynkhc.mongodb.net/?retryWrites=true&w=majority",
$ { useNewUrlParser: true }, { unseUnifiedTopology: true }
$ );