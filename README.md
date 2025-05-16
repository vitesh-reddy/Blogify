# Blogify

Blogify is a full-stack blog editor built with the MERN stack and styled with Tailwind CSS. You can write, save, publish, **delete**, and manage blog posts with a smooth auto-save `(using debouncing)` and draft system.

---

## 🛠 Tech Stack

- **Frontend:** React (with Vite), React-Quill, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT for authentication
- **Styling:** Tailwind CSS for a clean, responsive UI

---

## ✨ Features

- **Rich Blog Editor:** Write posts with a title, rich content, and tags.
- **Drafts & Publishing:** Save your work as a draft or publish it when ready.
- **Auto-Save & Debouncing:** Your draft is auto-saved every 30 seconds, and also after 5 seconds of inactivity (using debouncing methods).
- **Blog Management:** View, edit, **delete**, and manage all your blogs (drafts and published).
- **Notifications:** Get instant feedback when your work is auto-saved or published.
- **Authentication:** Secure login with JWT.
- **Modern UI:** Clean, responsive, and attractive design using Tailwind CSS.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/vitesh-reddy/Blogify.git
cd Blogify
```

### 2. Set Up the Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Set Up the Frontend

Open a new terminal window, then:

```bash
cd frontend
npm install
npm run dev
```

---

**Note:**  
The `.env` files for both backend and frontend are included in the repository, so you don't need to create them manually.

---

## 📝 Usage

1. **Login or Sign Up:** Use your credentials to log in or create a new account.
2. **Write:** Click "New Blog" to start writing. Add a title, content, and tags.
3. **Auto-Save:** Your draft will auto-save as you write, and you'll see notifications when this happens.
4. **Publish:** When you’re ready, hit "Publish" to make your post public.
5. **Edit:** View all your drafts and published blogs. Click "Edit" to update any post.
6. **Delete:** Remove any blog post you no longer want.

---

## 📁 Project Structure

```
backend/
  models/
  routes/
  middleware/
  config/
  server.js
  .env
  API_DOC.md
frontend/
  src/
    components/
    hooks/
    services/
    styles/
  tailwind.config.js
  postcss.config.js
  DOC.md
```

---

## 📚 Documentation

- **Backend API:** See `backend/API_DOC.md`
- **Frontend:** See `frontend/DOC.md`
