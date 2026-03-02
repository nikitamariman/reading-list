import { useParams, Link } from "react-router-dom";

function Article({ books }) {
  const { id } = useParams();
  const article = books.find((b) => b.id === parseInt(id));

  if (!article) return <div>загрузка...</div>;

  return (
    <div>
      <Link
        to="/"
        className="text-zinc-400 text-sm hover:text-zinc-600 mb-4 inline-block"
      >
        ← назад к списку
      </Link>
      <article className="border border-zinc-200 p-6">
        <h1 className="font-serif text-2xl mb-2">{article.title}</h1>
        <p className="text-zinc-500 text-sm mb-4">{article.author}</p>
        <p className="text-zinc-600 leading-relaxed">{article.body}</p>
        <p className="text-zinc-600 leading-relaxed mt-4">{article.body}</p>
        <div className="mt-6 pt-4 border-t border-zinc-200 text-zinc-400 text-sm">
          дата публикации: 3 марта 2026
        </div>
      </article>
    </div>
  );
}

export default Article;
