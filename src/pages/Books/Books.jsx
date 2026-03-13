import { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("books.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);

  //   const bookPromise = fetch("./books.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-4xl text-center p-6">Books</h1>
      <Suspense fallback={<span>loading.......</span>}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-2">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
