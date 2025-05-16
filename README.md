# RevoltronX Blog Editor

Welcome! This is a full-stack blog editor built with the MERN stack and styled beautifully with Tailwind CSS. The app lets you write, save, and publish blog posts with a seamless auto-save draft feature—just like you’d expect from a modern blogging platform.

---

## 🛠 Tech Stack

- **Frontend:** React (with Vite), React-Quill, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT for authentication
- **Styling:** Tailwind CSS for a clean, responsive UI

---

## ✨ Features

- **Rich Blog Editor:** Write posts with a title, rich content, and tags.
- **Drafts & Publishing:** Save your work as a draft or publish it when ready.
- **Auto-Save:** Your draft is automatically saved every 30 seconds, or after 5 seconds of inactivity.
- **Blog Management:** View all your blogs, with drafts and published posts shown separately. Edit any post at any time.
- **Notifications:** Get instant feedback when your work is auto-saved or published.
- **Authentication:** Secure login with JWT.
- **Modern UI:** Clean, responsive, and attractive design using Tailwind CSS.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/InkFlow-blog-editor.git
cd InkFlow-blog-editor
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with the following content:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a new terminal window, then:

```bash
cd frontend
npm install
npm run dev
```

If you need to change the backend API URL, edit the `.env` file in the `frontend` folder:

```
VITE_API_URL=http://localhost:5000/api
```

---

## 📝 Usage

1. **Login:** Use your credentials to log in. (You may need to create a user directly in the database or extend the backend for registration.)
2. **Write:** Click "New Blog" to start writing. Add a title, content, and tags.
3. **Auto-Save:** Your draft will auto-save as you write. You’ll see notifications when this happens.
4. **Publish:** When you’re ready, hit "Publish" to make your post public.
5. **Edit:** View all your drafts and published blogs. Click "Edit" to update any post.

---

## 📁 Project Structure

```
backend/
  models/
  routes/
  middleware/
  server.js
frontend/
  src/
    components/
    hooks/
    services/
  tailwind.config.js
  postcss.config.js
```
---

*If you have any questions or suggestions, feel free to open an issue or reach out!*