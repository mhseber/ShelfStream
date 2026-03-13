import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  const { bookName, bookId, author, publisher, image, rating, tags } =
    singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <section>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={image} alt="books" />
          </figure>
          <div className="card-body">
            <div className="flex justify-center gap-10">
              {tags.map((tag) => (
                <button>{tag}</button>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p>Author:{author}</p>
            <div className="card-actions justify-end">
              <p>Book By:{publisher}</p>
              <h1>{rating}</h1>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Book;
