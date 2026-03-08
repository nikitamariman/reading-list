import { useLocalStorage } from './useLocalStorage';

export function useAuth() {
  const [user, setUser] = useLocalStorage("user", null);
  const [users, setUsers] = useLocalStorage("users", [
    { email: "test@test.com", password: "123", name: "тест" },
  ]);
  const [readBooks, setReadBooks] = useLocalStorage("readBooks", []);

  const toggleRead = (bookId) => {
    if (readBooks.includes(bookId)) {
      setReadBooks(readBooks.filter((id) => id !== bookId));
    } else {
      setReadBooks([...readBooks, bookId]);
    }
  };

  return { user, setUser, users, setUsers, readBooks, toggleRead };
}