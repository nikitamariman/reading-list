import { useEffect } from "react";
import { Link } from "react-router-dom";

function Layout({ children, user, setUser, darkMode, setDarkMode }) {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-zinc-200">
        <Link to="/" className="font-serif text-xl tracking-wide">
          книжный клуб
        </Link>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <nav className="flex gap-4">
            <Link to="/" className="text-zinc-600 hover:text-zinc-900 text-sm">
              книги
            </Link>
            <Link
              to="/about"
              className="text-zinc-600 hover:text-zinc-900 text-sm"
            >
              о проекте
            </Link>
          </nav>

          <div className="hidden sm:block h-4 w-px bg-zinc-300"></div>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-zinc-600 hover:text-zinc-900 text-sm w-6 h-6 flex items-center justify-center"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {user ? (
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-zinc-500">{user.name}</span>
              <Link
                to="/profile"
                className="text-zinc-600 hover:text-zinc-900 text-sm"
              >
                профиль
              </Link>
              <button
                onClick={() => setUser(null)}
                className="text-xs text-zinc-400 hover:text-zinc-600"
              >
                (выход)
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="text-zinc-600 hover:text-zinc-900 text-sm"
              >
                вход
              </Link>
              <Link
                to="/register"
                className="text-zinc-600 hover:text-zinc-900 border border-zinc-200 px-2 py-1 text-xs rounded"
              >
                регистрация
              </Link>
            </div>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
