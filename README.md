# E-Commerce

The purpose of this assignment was to build a back-end application with a server and database that allows the user to create, update, read, and delete objects 

## Getting Started
First I generated a new repo and began by copying over the start code given that included seeds, an initialization for a database, a connection file, and some base files that I would end up editing or adding to later on.


### Prerequisites
Must have a package.json from npm init. Then it's necessary to install all the dependencies with an "npm install" Must create and run a new database in MySQL workbench before running the application. Must run the server before attempting to make any requests. Not required for GET requests but highly recommended for testing all routes: Insomnia.


### Solving
The E-Commerce project was a test of generating the correct routes and requests per model. Each model needed schema defined for its respective properties, namingly ID, name of model, and some had other additional properties depending on if they had values that needed to be tracked. Relationships needed to be formed between the models in our index.js route file so that the database actually knew what was to be done with certain requests or if the information would be displayed inside certain objects such as products being part of a category, etc. The routes were a bunch of asynchronous try/catch functions that were doing various sequelize methods for finding all objects, or objects by primary key, as well as updating or deleting (DESTROYING) objects. Then all of the routes were tested and displayed in the video links below to a varying degree of success. 



## Technologies Used

* [JavaScript](https://www.javascript.com/)
* [ExpressJS](https://expressjs.com/)
* [NodeJS](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)
* [Insomnia](https://insomnia.rest/)


## Video Link
https://drive.google.com/file/d/1oHAwv4A0ufrsGcOoBjdmjX16YSrl05wK/view PART ONE
https://drive.google.com/file/d/1NFNoM_Ev-jk_78FsTVT0SUuDrqKa3dzn/view PART TWO


## Authors
* **Thomas Peeler** 


## Github Repository
- [https://github.com/TMPeeler/E-Commerce]