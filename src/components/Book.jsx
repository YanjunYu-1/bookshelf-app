const Book = ({id,imageURL,title,author,handleToggleBook}) => {
    // console.log(imageURL,title,author)

    const handleChange=(event) => {
        const selectedShelf=event.target.value
        // console.log(event.target.value)
        console.log(selectedShelf,id)
        handleToggleBook(selectedShelf,id)
    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style=
                        {{
                            width: "128px",
                            height: "193px",
                            backgroundImage: 
                            `url(${imageURL})`
                        }}

                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={handleChange}>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        </li>
    );
}

export default Book;