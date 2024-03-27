import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`/${id}`}>
      <div className="card bg-base-100 shadow-xl border border-[#13131326]">
        <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl">
          <img src={image} alt="Shoes" className="rounded-xl lg:h-[200px] " />
        </figure>
        <div className="mt-6">
          <div className="flex lg:gap-3 gap-1 text-[#23BE0A]">
            <p className="bg-[#23be0a0d] lg:p-3 p-1 rounded-2xl">{tags[0]}</p>
            <p className="bg-[#23be0a0d] lg:p-3 p-1 rounded-2xl">{tags[1]}</p>
            <p className="bg-[#23be0a0d] lg:p-3 p-1 rounded-2xl">{tags[2]}</p>
          </div>
          <h2 className="card-title mt-4 text-2xl">{bookName}</h2>
          <p className="text-left mt-4 work mb-5 font-medium">By : {author}</p>
          <hr className="border-dotted" />
          <div className="card-actions mt-5 flex justify-between work font-medium">
            <p>{category}</p>
            <p className="flex justify-center items-center gap-2">
              {rating}
              <FaRegStar />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
