import { Link } from "react-router-dom";

function Profile({ user, setUser, readBooks }) {
  if (!user)
    return (
      <div className="text-center py-8">
        <Link
          to="/login"
          className="text-zinc-600 border border-zinc-400 px-4 py-2"
        >
          войти в профиль
        </Link>
      </div>
    );

  return (
    <div>
      <h1 className="font-serif text-2xl mb-6">профиль</h1>
      <div className="border border-zinc-400 p-6 space-y-4">
        <div>
          <p className="text-xs text-zinc-500 mb-1">имя</p>
          <p className="text-zinc-800">{user.name}</p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 mb-1">email</p>
          <p className="text-zinc-800">{user.email}</p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 mb-1">
            прочитано статей
          </p>
          <p className="text-zinc-800 text-2xl font-serif">
            {readBooks?.length || 0}
          </p>
        </div>
        <div className="pt-4 border-t border-zinc-400">
          <button
            onClick={() => setUser(null)}
            className="text-sm text-zinc-500 hover:text-zinc-600"
          >
            выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}


export default Profile;
