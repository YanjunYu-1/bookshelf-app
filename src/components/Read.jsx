const Read = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.children}
                </ol>
            </div>
        </div>
    );
}

export default Read;