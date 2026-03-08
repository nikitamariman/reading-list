import { useBooks } from "@/hooks/useBooks";
import { useAuth } from "@/hooks/useAuth";
import AppRouter from "@/router/AppRouter";
import { useLocalStorage } from "@/hooks/useLocalStorage";

function App() {
  const [books] = useBooks();
  const { user, setUser, users, setUsers, readBooks, toggleRead } =
    useAuth();
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <AppRouter
      books={books}
      user={user}
      setUser={setUser}
      users={users}
      setUsers={setUsers}
      readBooks={readBooks}
      toggleRead={toggleRead}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}

export default App;
