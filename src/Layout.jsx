import { Link } from "react-router-dom";

function Layout({ children, user, setUser }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-200">
        <Link to="/" className="font-serif text-xl tracking-wide">
          книжный клуб
        </Link>

        <div className="flex items-center gap-8">
          <nav className="flex gap-6">
            <Link to="/" className="text-zinc-600 hover:text-zinc-900">
              книги
            </Link>
            <Link to="/about" className="text-zinc-600 hover:text-zinc-900">
              о проекте
            </Link>
          </nav>

          <div className="h-4 w-px bg-zinc-200"></div>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-500">{user.name}</span>
              <Link to="/profile" className="text-zinc-600 hover:text-zinc-900">
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
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-zinc-600 hover:text-zinc-900">
                вход
              </Link>
              <Link
                to="/register"
                className="text-zinc-600 hover:text-zinc-900 border border-zinc-200 px-3 py-1.5 text-sm rounded"
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
