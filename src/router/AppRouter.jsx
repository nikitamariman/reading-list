import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import BookList from "@/pages/BookList";
import About from "@/pages/About";
import Article from "@/pages/Article";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";

function AppRouter({
  books,
  user,
  setUser,
  users,
  setUsers,
  readBooks,
  toggleRead,
  darkMode,
  setDarkMode,
}) {
  return (
    <HashRouter>
      <Layout
        user={user}
        setUser={setUser}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <Routes>
          <Route
            path="/"
            element={
              <BookList
                books={books}
                user={user}
                readBooks={readBooks}
                toggleRead={toggleRead}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<Article books={books} />} />
          <Route
            path="/login"
            element={<Login setUser={setUser} users={users} />}
          />
          <Route
            path="/register"
            element={
              <Register setUser={setUser} users={users} setUsers={setUsers} />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile user={user} setUser={setUser} readBooks={readBooks} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default AppRouter;
