import { CiLocationOn } from "react-icons/ci";
import { PiUsers } from "react-icons/pi";
import { IoReaderOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WishList = ({ book }) => {
  const {
    id,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  return (
    <div className="mt-6 p-6 grid grid-cols-4 border border-[#13131326] rounded-2xl">
      <div className="w-[230px] bg-[#1313130d] py-7 rounded-2xl flex justify-center items-center">
        <img src={image} alt="" className="w-[230px]" />
      </div>
      <div className="grid col-span-3 text-left">
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <h3 className="my-8 work">By : {author}</h3>
        <div className="flex items-center gap-6">
          <div>
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
          </div>
          <div className="flex items-center gap-3">
            <CiLocationOn />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-3 items-center work">
            <div className="text-2xl">
              <PiUsers />
            </div>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-3 items-center work">
            <div className="text-2xl">
              <IoReaderOutline />
            </div>
            <p>Page {totalPages}</p>
          </div>
        </div>
        <hr className="m-4" />
        <div className="flex gap-5">
          <div className="bg-[#328eff26] rounded-[30px] py-[11px] px-5 flex items-center">
            <h3>Category: {category}</h3>
          </div>
          <div className="bg-[#ffac3326] rounded-[30px] py-[11px] px-5 text-[#FFAC33] flex items-center">
            <h3>Rating: {rating}</h3>
          </div>
          <Link
            to={`/${id}`}
            className="bg-[#23BE0A] rounded-[30px] py-[11px] px-5 text-white flex items-center"
          >
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

WishList.propTypes = {
  book: PropTypes.object,
};

export default WishList;
