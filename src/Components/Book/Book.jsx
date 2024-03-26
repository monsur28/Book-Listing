import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { image, tags, bookName, author } = book;
  return (
    <div className="card bg-base-100 shadow-xl border border-[#13131326]">
      <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl">
        <img src={image} alt="Shoes" className="rounded-xl h-[200px] " />
      </figure>
      <div className="mt-6">
        <div className="flex gap-3 text-[#23BE0A]">
          <p className="bg-[#23be0a0d] p-3 rounded-2xl">{tags[0]}</p>
          <p className="bg-[#23be0a0d] p-3 rounded-2xl">{tags[1]}</p>
          <p className="bg-[#23be0a0d] p-3 rounded-2xl">{tags[2]}</p>
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
