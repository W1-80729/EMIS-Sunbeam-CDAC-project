# Sunbeam Education Management Information System

This is a MERN stack website which can be used for managing the Sunbeam adminitration and interactive educational features. It has almost all features and few are in development phase.


### `LOGIN AS ADMIN AND SEE EVERYTHING`

```bash
Login email="admin1@example.com"
Login password="adminpassword1"
```

## Usage

Clone the repo

```bash
git clone https://github.com/W1-80729/EMIS-Sunbeam-CDAC-project.git
```

### Getting Started

Go to the root folder and install the backend dependencies by using the command-

```bash
npm install
```

Go to the frontend folder by command cd frontend and then install frontend dependecies using the command-

```bash
npm install
```

### `ENV Variables`

Create a .env file in the root and add the following. You can see .env.example for format.

```bash
NODE_ENV=development
PORT=5000
MONGO_URI="Your mongo uri"
JWT_SECRET="Anything you like"
CLOUDINARY_URL ="your cloudinary url"
CLOUDINARY_UPLOAD_PRESET = "your cloudinary preset "
```
Create a .env file in the frontend folder and add the following. You can see .env.example for format.

```bash
REACT_APP_CLOUD_NAME="Your value"
REACT_APP_CLOUD_PRESET="Your value"
```
### `Running`

Go to the root folder and at first seed the database through command

```bash
npm run data:import
```

After seed is successful run following command to run both backend and frontend concurrently

```bash
npm run dev
```






