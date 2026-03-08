/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard";
import { motion } from 'framer-motion';

function BookList({ books, user, readBooks, toggleRead }) {
  const [search, setSearch] = useState("");
  const [showRead, setShowRead] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchesRead = showRead ? readBooks.includes(book.id) : true;
    return matchesSearch && matchesRead;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="font-serif text-2xl">список чтения</h1>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="поиск по названию или автору..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-zinc-400 p-2 text-sm"
          />

          {user && (
            <button
              onClick={() => setShowRead(!showRead)}
              className={`px-3 py-2 text-sm border transition ${
                showRead
                  ? "bg-blue-300 border-zinc-900 text-zinc-900"
                  : "border-zinc-400 text-zinc-400 hover:bg-amber-400 hover:text-zinc-900 hover:border-zinc-900"
              }`}
            >
              {showRead ? "все книги" : "прочитанные"}
            </button>
          )}
        </div>
      </div>

      <motion.div className="space-y-3">
        {filteredBooks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 border border-zinc-200 dark:border-zinc-800"
          >
            <p className="text-zinc-400 text-lg">📭</p>
            <p className="text-zinc-400 dark:text-zinc-500">
              ничего не найдено
            </p>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-sm text-zinc-600 mt-2 hover:text-zinc-900 transition border-b border-zinc-100 hover:border-zinc-400"
              >
                сбросить поиск
              </button>
            )}
          </motion.div>
        ) : (
          filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BookCard
                book={book}
                user={user}
                isRead={readBooks.includes(book.id)}
                toggleRead={toggleRead}
                search={search}
              />
            </motion.div>
          ))
        )}
      </motion.div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 border border-zinc-200 bg-zinc-300 text-2xl rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default BookList;
