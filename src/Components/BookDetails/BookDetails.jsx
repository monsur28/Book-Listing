import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const book = books.find((book) => book.id === idint);

  const handleReadClick = () => {
    let storedBooks = JSON.parse(localStorage.getItem("books") || "[]");
    const isRead = storedBooks.find((b) => b.id === book.id);

    if (isRead) {
      toast.warn("This book is already marked as read.");
    } else {
      let storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const isWishlist = storedWishlist.find((b) => b.id === book.id);

      if (isWishlist) {
        const updatedWishlist = storedWishlist.filter((b) => b.id !== book.id);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      }

      storedBooks.push(book);
      localStorage.setItem("books", JSON.stringify(storedBooks));
      toast.success("Book marked as read.");
    }
  };

  const handleWishlistClick = () => {
    let storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const isWishlist = storedWishlist.find((b) => b.id === book.id);
    if (isWishlist) {
      toast.warn("This book is already in your wishlist.");
    } else {
      let storedRead = JSON.parse(localStorage.getItem("books") || "[]");
      const isRead = storedRead.find((b) => b.id === book.id);
      if (isRead) {
        toast.warn("This book is already marked as read.");
      } else {
        storedWishlist.push(book);
        localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
        toast.success("Book added to wishlist.");
      }
    }
  };
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <section className="p-6 mt-3 text-gray-100">
      <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-md xl:col-span-2 bg-[#1313130d] rounded-r-2xl"
        />
        <div className="w-full text-left px-6 sm:px-12 md:px-16 xl:col-span-3 text-black">
          <h1 className="text-5xl font-extrabol">{bookName}</h1>
          <h3 className="my-8 work">By : {author}</h3>
          <hr className="my-6" />
          <h3 className="work">{category}</h3>
          <hr className="my-6" />
          <p className="work text-justify">
            <span className="font-bold">Review :</span> {review}
          </p>
          <h5 className="mt-2 flex items-center">
            <span className="font-bold mr-3">Tag:</span>
            <span className="flex gap-2">
              {tags.map((item) => (
                <>
                  <h4 className="my-5 w-32 bg-[#23be0a0d] flex justify-center items-center py-[7px] px-[10px] rounded-xl text-[#23BE0A]">
                    #{item}
                  </h4>
                </>
              ))}
            </span>
          </h5>
          <hr className="my-6" />
          <div className="">
            <h4>
              Number of Pages <span className="ml-12">: </span>
              <span className="font-semibold">{totalPages}</span>
            </h4>
            <h4>
              Publisher <span className="ml-[98px]">: </span>
              <span className="font-semibold">{publisher}</span>
            </h4>
            <h4>
              Year of Publishing<span className="ml-[43px]">: </span>
              <span className="font-semibold">{yearOfPublishing}</span>
            </h4>
            <h4>
              Rating<span className="ml-[120px]">: </span>
              <span className="font-semibold">{rating}</span>
            </h4>
            <div className="mt-8 flex gap-4">
              <button
                onClick={handleReadClick}
                className="btn py-[18px] px-7 bg-white border border-[#1313134d] font-semibold"
              >
                Read
              </button>
              <button
                onClick={handleWishlistClick}
                className="btn py-[18px] px-7 bg-[#50B1C9] border border-[#FFFFFF] font-semibold text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default BookDetails;
