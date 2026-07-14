# 📝 NoteHub

> 🚀 A modern full-stack Notes Management application built with the MERN Stack to demonstrate secure authentication, CRUD operations, and responsive UI design.

NoteHub is a modern full-stack Notes Management application built with the **MERN Stack**. It provides secure JWT-based authentication, allowing users to create, edit, delete, search, and organize personal notes through a clean, responsive, and intuitive user interface.

---

## ✨ Features

- 🔐 JWT Authentication & Authorization
- 👤 Secure User Registration & Login
- 📝 Create, Read, Update & Delete (CRUD) Notes
- 🔍 Real-time Search Notes
- ❤️ Favorite / Unfavorite Notes
- 📄 View Full Note
- 🔒 Protected Routes
- 📱 Fully Responsive Design
- 🌙 Modern Dark UI
- 🔔 Beautiful Toast Notifications
- ☁️ MongoDB Atlas Database

---

## 🖼️ Screenshots

### Home Page

![Home Page](screenshots/homepage.png)

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs

### Development Tools

- Git
- GitHub
- VS Code
- Postman

---

## 📂 Project Structure

```text
NoteHub
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── package.json
│   └── server.js
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   ├── utils
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│   └── homepage.png
│
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/NoteHub.git
```

### 2. Navigate to the Project

```bash
cd NoteHub
```

---

## ⚙️ Backend Setup

```bash
cd Backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## 💻 Frontend Setup

Open a new terminal.

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a **.env** file inside the **Backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📌 REST API

### Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

### Notes

| Method | Endpoint                  | Description     |
| ------ | ------------------------- | --------------- |
| GET    | `/api/notes`              | Get All Notes   |
| GET    | `/api/notes/:id`          | Get Single Note |
| POST   | `/api/notes`              | Create Note     |
| PUT    | `/api/notes/:id`          | Update Note     |
| DELETE | `/api/notes/:id`          | Delete Note     |
| PATCH  | `/api/notes/:id/favorite` | Toggle Favorite |

---

## 🎯 Future Improvements

- 📤 Share Notes
- 📂 Categories & Tags
- 📌 Pin Notes
- 🖼️ Image Attachments
- 📄 Export Notes as PDF
- 📅 Reminder Notifications
- 🤖 AI-powered Note Summary

---

## 👨‍💻 Author

### Mohamed Tharik

🌐 **Portfolio**  
https://tharik-portfolio-ecru.vercel.app/

💼 **LinkedIn**  
https://www.linkedin.com/in/mohamed-tharik--j/

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects.

---
