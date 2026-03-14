import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../uitility/addToStoreDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  // Safety Check: যদি ডাটা না থাকে বা আইডি না মেলে
  const singleBook = data?.find((book) => book.bookId === bookId);

  if (!singleBook) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <span className="loading loading-spinner loading-lg text-[#23BE0A]"></span>
      </div>
    );
  }

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
    // আপনি চাইলে এখানে একটি Toast বা Alert দিতে পারেন
  };

  return (
    <section className="max-w-6xl mx-auto my-12 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Left Side: Image Area */}
        <div className="w-full lg:w-1/2 bg-[#F3F3F3] rounded-3xl p-16 flex justify-center items-center">
          <img
            src={image}
            alt={bookName}
            className="h-[500px] object-contain shadow-2xl rounded-sm transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-[#131313]">{bookName}</h1>
          <p className="text-xl font-medium text-[#131313CC]">By : {author}</p>

          <div className="border-y border-gray-200 py-3 text-xl font-medium text-[#131313CC]">
            {category}
          </div>

          <p className="leading-relaxed">
            <span className="font-bold text-[#131313]">Review : </span>
            <span className="text-[#131313B3]">{review}</span>
          </p>

          <div className="flex items-center gap-4 py-2">
            <span className="font-bold text-[#131313]">Tag</span>
            <div className="flex gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1.5 rounded-full font-semibold text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex gap-16">
              <p className="text-[#131313B3] w-32">Number of Pages:</p>
              <p className="font-bold text-[#131313]">{totalPages}</p>
            </div>
            <div className="flex gap-16">
              <p className="text-[#131313B3] w-32">Publisher:</p>
              <p className="font-bold text-[#131313]">{publisher}</p>
            </div>
            <div className="flex gap-16">
              <p className="text-[#131313B3] w-32">Year of Publishing:</p>
              <p className="font-bold text-[#131313]">{yearOfPublishing}</p>
            </div>
            <div className="flex gap-16">
              <p className="text-[#131313B3] w-32">Rating:</p>
              <p className="font-bold text-[#131313]">{rating}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline border-gray-300 px-8 h-12 min-h-0 text-[#131313] hover:bg-[#23BE0A] hover:border-[#23BE0A] hover:text-white"
            >
              Read
            </button>
            <button className="btn bg-[#50B1C9] hover:bg-[#3e93a8] text-white px-8 h-12 min-h-0 border-none">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
