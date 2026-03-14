// import { Link } from "react-router";

// const Book = ({ singleBook }) => {

//   const { bookName, bookId, author, publisher, image, rating, tags } =
//     singleBook;
//   return (
//     <Link to={`/bookDetails/${bookId}`}>
//       <section>
//         <div className="card bg-base-100 w-96 shadow-sm">
//           <figure>
//             <img src={image} alt="books" />
//           </figure>
//           <div className="card-body">
//             <div className="flex justify-center gap-10">
//               {tags.map((tag) => (
//                 <button>{tag}</button>
//               ))}
//             </div>
//             <h2 className="card-title">{bookName}</h2>
//             <p>Author:{author}</p>
//             <div className="card-actions justify-end">
//               <p>Book By:{publisher}</p>
//               <h1>{rating}</h1>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Link>
//   );
// };

// export default Book;

import { Link } from "react-router";
import { FaRegStar } from "react-icons/fa";

const Book = ({ singleBook }) => {
  const { bookName, bookId, author, image, rating, tags, category } =
    singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`} className="flex">
      <div className="card bg-base-100 border border-gray-200 p-6 rounded-2xl hover:border-[#23BE0A] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col w-full">
        {/* Image Container with Background */}
        <figure className="bg-[#F3F3F3] rounded-2xl py-8 mb-6">
          <img
            src={image}
            alt={bookName}
            className="h-[166px] object-contain shadow-sm"
          />
        </figure>

        <div className="flex flex-col flex-grow">
          {/* Tags Section */}
          <div className="flex flex-wrap gap-3 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#23BE0A10] text-[#23BE0A] px-4 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Book Info */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-[#131313] mb-2 leading-tight">
              {bookName}
            </h2>
            <p className="text-[#131313CC] font-medium mb-4">By: {author}</p>
          </div>

          {/* Bottom Divider */}
          <div className="border-t border-dashed border-gray-300 my-4"></div>

          {/* Category & Rating */}
          <div className="flex justify-between items-center text-gray-600 font-medium">
            <span>{category}</span>
            <div className="flex items-center gap-2">
              <span>{rating}</span>
              <FaRegStar className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
