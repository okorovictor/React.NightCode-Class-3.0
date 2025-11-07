import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";

type Book = {
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
};

type BookBg = {
  bgColor: string;
};

function Books({ bgColor }: BookBg) {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState("");
  const [inputSearch, setInputSearch] = useState("harry potter");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchBook = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${inputSearch}`
        );
        const data = await response.json();
        setBooks(data.items || []);
        console.log(data);
      } catch (error: any) {
        console.log("Error fetching books:", error);
        setError("Failed to fetch books. Please try again.");
        setBooks([]);
      } finally {
        setLoading(false);
        setIsSearching(false);
      }
    };
    searchBook();
  }, [inputSearch]);

  // Disable the button if the input is empty or only contains whitespace
  const isDisabled = query.trim() === "";

  const handleSearch = () => {
    if (isDisabled) return;
    // Show "Loading books..." right away
    setLoading(true);
    setIsSearching(true);

    // Simulate a delay of 1 seconds before setting the search term
    setTimeout(() => {
      setInputSearch(query);
      setQuery(""); // Clear the input field
    }, 2000);
  };

  return (
    <main className={`grid justify-items-center ${bgColor}`}>
      <section className="text-center space-y-5">
        <h2 className="text-4xl font-bold my-5">Books</h2>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a book..."
            className="border border-black px-20 py-1"
          />
          <button
            // disabled={isSearching || query.trim() === ""}
            disabled={isDisabled || isSearching}
            onClick={handleSearch}
            className={`bg-black text-white py-2 px-3 text-sm ${
              isDisabled || isSearching
                ? "opacity-50 cursor-none"
                : "cursor-pointer"
            }`}
          >
            {isSearching ? "Searching..." : "Search"}
            {/* Search */}
          </button>
        </div>
        {/* So this rendered when the API isn't fetched(searchBook isn't fetched) */}
        {error ? <p className="text-red-500 text-xl">{error}</p> : null}
        {/* {error && <p className="text-red-500">{error}</p>} */}
      </section>

      {loading ? (
        <div className="flex flex-col items-center mt-10">
          <ImSpinner9 className="animate-spin text-gray-500" size={50} />
          <p className="mt-5 text-gray-600 text-2xl font-medium">
            Loading books...
          </p>
        </div>
      ) : books.length === 0 ? (
        <p className="text-2xl  text-gray-600 font-medium mt-10">
          No books found.
        </p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-[80%] p-5">
          {books.map((book, index) => (
            <article key={index}>
              <figure className="border-2 border-gray-400 h-full rounded-xl bg-gray-100">
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail || "/default-book.png"
                  }
                  alt={book.volumeInfo.title}
                  className="w-100 h-[30vh] rounded-t-xl "
                />
                <figcaption className="text-center p-1.5 space-y-1 text-sm">
                  <strong>{book.volumeInfo.title}</strong>
                  <div>
                    {" "}
                    {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                  </div>
                  <time>{book.volumeInfo.publishedDate || "N/A"}</time>
                </figcaption>
              </figure>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Books;
