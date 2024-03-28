import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBook from "./ReadBook/ReadBook";
import WishList from "../WishList/WishList";

const ListedBooks = () => {
  const books = useLoaderData();
  const storedBooks = JSON.parse(localStorage.getItem("books") || "[]");
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

  const readBooks = books.filter((book) =>
    storedBooks.some((b) => b.id === book.id)
  );
  const wishlistBooks = books.filter((book) =>
    storedWishlist.some((b) => b.id === book.id)
  );

  return (
    <div>
      <h1 className="bg-[#1313130d] py-8 rounded-2xl mb-8 text-3xl font-bold">
        Books
      </h1>
      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>
        <TabPanel>
          <ul>
            {readBooks.map((book) => (
              <ReadBook key={book.id} book={book}></ReadBook>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul>
            {wishlistBooks.map((book) => (
              <WishList key={book.id} book={book}></WishList>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
