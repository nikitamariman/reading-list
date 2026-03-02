import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function BookList({ books, user, readBooks, toggleRead }) {
  return (
    <div>
      <h1 className="font-serif text-2xl mb-6">список чтения</h1>
      <div className="space-y-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            user={user}
            isRead={readBooks.includes(book.id)}
            toggleRead={toggleRead}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
