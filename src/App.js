import "./App.css";
import Book from './components/Book'
function App() {
  return (
    <>
      <div>
        <div className="list-books">
          <div className="list-books-title"><h1>MITTReads</h1></div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Book />
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Book />
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Book />
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search"><a href="search.html">Add a book</a></div>
        </div>
      </div>
    </>
  );
}

export default App;
