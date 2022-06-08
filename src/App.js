import "./App.css";
import {useState,useEffect} from "react"
import BooksByShelf from './data/BooksAPI'
import Book from './components/Book'
import CurrentlyReading from './components/CurrentlyReading'
import Read from './components/Read'


function App() {

const [currentReading, setCurrentReading] = useState([]);
  useEffect(() => {
    BooksByShelf("currentlyReading").then((books) => setCurrentReading(books));
  }, []);
  // console.log(currentReading)

const [reading, setReading] = useState([]);
useEffect(() => {
  BooksByShelf("read").then((books) => setReading(books));
}, []);
// console.log(reading)


const [none, setNone] = useState([]);
useEffect(() => {
  BooksByShelf("none").then((books) => setNone(books));
}, []);
// console.log(none)

  return (
    <>
      <div>
        <div className="list-books">
          <div className="list-books-title"><h1>MITTReads</h1></div>
          <div className="list-books-content">
            <div>
              <CurrentlyReading>
                {currentReading.map((book)=>(
                  <Book 
                      key={book.id}
                      imageURL={book.imageLinks.thumbnail}
                      title={book.title}
                      author={book.authors}
                  />
                ))}
              </CurrentlyReading>

              <Read>
              {reading.map((book)=>(
                  <Book 
                      key={book.id}
                      imageURL={book.imageLinks.thumbnail}
                      title={book.title}
                      author={book.authors}
                  />
                ))}
              </Read>

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
