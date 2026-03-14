import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../uitility/addToStoreDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <section>
      {/* card */}
      <div>
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img src={image} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <h3>By : {author}</h3>
            <div className="divider divider-error">Error</div>
            <h4>{category}</h4>
            <h1>Review : {review}</h1>
            <div className="flex justify-center gap-10">
              {tags.map((tag) => (
                <button>{tag}</button>
              ))}
            </div>
            <p>Number Of Page : {totalPages}</p>
            <p>Publisher : {publisher}</p>
            <p>Year Of Publishing : {yearOfPublishing}</p>
            <p>Rating : {rating}</p>
            <div className="card-actions ">
              <button
                onClick={() => handleMarkAsRead(id)}
                className="btn btn-primary"
              >
                Read
              </button>
              <button className="btn btn-primary">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
