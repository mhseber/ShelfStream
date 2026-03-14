// import { Suspense } from "react";
// import Book from "../Book/Book";

// const Books = ({ data }) => {
//   return (
//     <div>
//       <h1 className="text-4xl text-center p-6">Books</h1>
//       <Suspense fallback={<span>loading.......</span>}>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-2">
//           {data.map((singleBook) => (
//             <Book key={singleBook.bookId} singleBook={singleBook}></Book>
//           ))}
//         </div>
//       </Suspense>
//     </div>
//   );
// };

// export default Books;

import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <section className="max-w-6xl mx-auto my-20 px-4 lg:px-0">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#131313] mb-4">
          Books
        </h1>
        <div className="w-24 h-1.5 bg-[#23BE0A] mx-auto rounded-full"></div>
      </div>

      {/* Loading State & Grid */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center ">
            <span className="loading loading-spinner loading-lg text-[#23BE0A]"></span>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data &&
            data.map((singleBook) => (
              <Book key={singleBook.bookId} singleBook={singleBook} />
            ))}
        </div>
      </Suspense>

      {/* Empty State Check */}
      {(!data || data.length === 0) && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No books found at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default Books;
