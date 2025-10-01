import data from "../data/books.json";
import BookCard from "./components/BookCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Book Catalog</h1>
      </header>

      <main className="main-content">
        {/* Left grid with book cards */}
        <div className="grid-area">
          {data.map((book) => (
            <BookCard
              key={book.isbn13}
              image={book.image}
              title={book.title}
              price={book.price}
              url={book.url}
            />
          ))}
        </div>

        {/* Right column with add button */}
        <div className="add-area">
          <button className="add-btn">+</button>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 My Book Catalog</p>
      </footer>
    </div>
  );
}

export default App;