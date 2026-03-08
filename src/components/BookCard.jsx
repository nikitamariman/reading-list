import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";

function BookCard({ book, user, isRead, toggleRead, search }) {
  return (
    <div className="border border-zinc-400 p-4 card-hover transition">
      <div className="flex justify-between items-center">
        <Link to={`/article/${book.id}`} className="flex-1">
          <div>
            <h2 className="font-serif text-lg group-hover:text-black dark:group-hover:text-white transition">
              <Highlighter
                searchWords={[search]}
                textToHighlight={book.title}
                highlightClassName="bg-yellow-500"
              />
            </h2>
            <p className="text-zinc-500 text-sm dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition">
              <Highlighter
                searchWords={[search]}
                textToHighlight={book.author}
                highlightClassName="bg-yellow-500"
              />
            </p>
          </div>
        </Link>
        {user && (
          <button
            onClick={() => toggleRead(book.id)}
            className={`text-xs px-2 py-1 border transition ${
              isRead
                ? "border-zinc-900 text-zinc-900 bg-blue-300"
                : "border-zinc-400 hover:border-zinc-900 text-zinc-400 hover:bg-amber-400 hover:text-zinc-900"
            }`}
          >
            {isRead ? "прочитано" : "отметить"}
          </button>
        )}
      </div>
    </div>
  );
}

export default BookCard;
