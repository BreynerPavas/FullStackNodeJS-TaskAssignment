# Humble Superhero API 🦸‍♂️

A simple full-stack application to manage superheroes with humility scores.

## 🚀 Features

- **Create a superhero** with name, superpower, and humility score.
- **List all superheroes** sorted by humility score.
- **Delete a superhero** by ID.

## 🛠️ Technologies Used

- **Backend:** Node.js, Express, MySQL
- **Frontend:** React, Redux, Bootstrap
- **Database:** MySQL (using `mysql2` package)

---

## 🏁 How to Run the Project

### 1️⃣ Install Dependencies
Go to both the **BackEnd** and **FrontEnd** folders and install the dependencies:

- Navigate to the **BackEnd** folder and run: `npm i`
- Navigate to the **FrontEnd** folder and run: `npm i`

### 2️⃣ Configure Database Credentials
Edit the file `/BackEnd/config/database.js` and update your MySQL credentials.

Example:
- **Host:** `localhost`
- **User:** `your_username`
- **Password:** `your_password`
- **Database:** `humblesuperheroapi`

### 3️⃣ Start the Backend Server
- Go to the **BackEnd** folder and run: `node index.js`
- If everything is correct, you should see:  
  _Servidor levantado en el puerto 3000_

### 4️⃣ Start the Frontend
- Go to the **FrontEnd** folder and run: `npm run dev`
- This will launch the frontend at **http://localhost:5173** (or another port depending on Vite settings).

---

Now you can create, view, and delete superheroes! 🎉  
Let me know if you need any modifications. 🚀
