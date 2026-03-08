import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useBooks() {
  const [books, setBooks] = useLocalStorage("books", []);
  const loading = books.length === 0;

  useEffect(() => {
    if (books.length === 0) {
      Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=100").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
      ]).then(([posts, users]) => {
        setBooks(
          posts.map((post) => {
            const user = users.find(u => u.id === post.userId);
            return {
              id: post.id,
              title: post.title,
              author: user ? user.name : `Автор ${post.userId}`, 
              body: post.body,
            }
          })
        );
      });
    }
  }, [books.length, setBooks]);

  return [books, loading];
}