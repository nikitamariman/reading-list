import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register({ setUser, users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setUser({ name, email });
    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-serif text-2xl mb-6">регистрация</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-zinc-200 p-3 text-sm"
            required
          />
        </div>
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
          зарегистрироваться
        </button>
        <p className="text-center text-sm text-zinc-400">
          уже есть аккаунт?{" "}
          <Link to="/login" className="text-zinc-600">
            вход
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
