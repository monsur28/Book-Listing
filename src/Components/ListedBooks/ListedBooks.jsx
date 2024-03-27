import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>
        <TabPanel>
          <ul>
            {readBooks.map((book) => (
              <li key={book.id}>{book.bookName}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist</h2>
          <ul>
            {wishlistBooks.map((book) => (
              <li key={book.id}>{book.bookName}</li>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
