const None = (props) => {
    return ( 
        <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {props.children}
                  </ol>
                </div>
              </div>
     );
}
 
export default None;