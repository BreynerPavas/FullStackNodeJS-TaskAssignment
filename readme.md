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

---

## 🔥 Possible Improvements & Expansions

Here are some ideas to expand and improve this project:

### 1️⃣ Backend Enhancements
- **Authentication & Authorization**: Implement JWT authentication for user roles.
- **Advanced Database Features**: Add relationships, indexes, and stored procedures for better performance.
- **API Documentation**: Use Swagger to generate API documentation.
- **Unit & Integration Testing**: Implement tests using Jest or Mocha.

### 2️⃣ Frontend Improvements
- **UI/UX Enhancements**: Improve styling and user experience.
- **Form Validation**: Enhance form validation to ensure correct input values.
- **Pagination & Filtering**: Add features to sort and filter superheroes dynamically.
- **State Management**: Improve Redux structure and optimize API calls.

### 3️⃣ New Features
- **Edit Superheroes**: Allow updating superhero details.
- **Power Rankings**: Display top 10 superheroes based on humility scores.
- **User Profiles**: Implement user profiles with favorite superheroes.
- **Superhero Battles**: Introduce a feature where superheroes can battle based on their attributes.

---
## ⏳ If I Had More Time...

With more time, I would focus on making this project more interactive and engaging. Many of the improvements mentioned earlier fit into this category, but here are some additional ideas:

### ⚔️ Superhero Battles & Leaderboards
- Implement a **battle mode**, where users can select two superheroes to fight.
- Create a **battle algorithm** that considers humility scores, superpowers, and a bit of randomness.
- Add **animations and effects** when a superhero wins a battle.
- Introduce a **leaderboard**, ranking superheroes based on their battle victories.

### 🎮 Interactive UI Features
- Implement **drag & drop** to sort superheroes manually.
- Add **real-time updates** using WebSockets (e.g., new superheroes appear instantly).
- Create a **dark mode** and customizable themes.

### 📡 API Expansion & External Integrations
- Connect with **external superhero APIs** to fetch additional data.
- Implement a **RESTful or GraphQL API** to make it more scalable.
- Allow users to **upload superhero images** for better visualization.

### 🏅 Gamification & User Engagement
- Introduce **user achievements** (e.g., "Created 10 superheroes!").
- Add a **voting system** where users can upvote their favorite superheroes.
- Implement a **social sharing feature**, allowing users to share superheroes on social media.
