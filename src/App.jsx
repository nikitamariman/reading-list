import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import Layout from "./Layout";
import BookList from "./components/BookList";
import About from "./Pages/About";
import Article from "./Pages/Article";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useLocalStorage("user", null);
  const [users, setUsers] = useLocalStorage("users", [
    { email: "test@test.com", password: "123", name: "тест" },
  ]);
  const [readBooks, setReadBooks] = useLocalStorage("readBooks", []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=100")
      .then((res) => res.json())
      .then((data) =>
        setBooks(
          data.map((post) => ({
            id: post.id,
            title: post.title,
            author: "Автор статьи",
            body: post.body,
          })),
        ),
      );
  }, []);

  const toggleRead = (bookId) => {
    if (readBooks.includes(bookId)) {
      setReadBooks(readBooks.filter((id) => id !== bookId));
    } else {
      setReadBooks([...readBooks, bookId]);
    }
  };

  return (
    <HashRouter>
      <Layout user={user} setUser={setUser}>
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
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
