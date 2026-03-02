import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setUser, users }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (existingUser) {
      setUser({ name: existingUser.name, email });
      navigate("/profile");
    } else {
      alert("пользователь не найден");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-serif text-2xl mb-6">вход</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-zinc-200 p-3 text-sm"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-zinc-200 p-3 text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full border border-zinc-200 p-3 text-sm hover:bg-zinc-50"
        >
          войти
        </button>
        <p className="text-center text-sm text-zinc-400">
          нет аккаунта?{" "}
          <Link to="/register" className="text-zinc-600">
            регистрация
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
