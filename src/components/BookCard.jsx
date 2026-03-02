import { Link } from "react-router-dom";

function BookCard({ book, user, isRead, toggleRead }) {
  return (
    <div className="border border-zinc-200 p-4 hover:bg-zinc-50 transition">
      <div className="flex justify-between items-center">
        <Link to={`/article/${book.id}`} className="flex-1">
          <div>
            <h2 className="font-serif text-lg">{book.title}</h2>
            <p className="text-zinc-500 text-sm">{book.author}</p>
          </div>
        </Link>
        {user && (
          <button
            onClick={() => toggleRead(book.id)}
            className={`text-xs px-2 py-1 border ${isRead ? "border-zinc-400 bg-zinc-100" : "border-zinc-200"} hover:bg-zinc-200 transition`}
          >
            {isRead ? "прочитано" : "отметить"}
          </button>
        )}
      </div>
    </div>
  );
}

export default BookCard;
