const URL ="http://localhost:3066/books"

const BooksByShelf =async (query)=>{
    const request =await fetch(`${URL}?shelf=${query}`)
    const response = await request.json();
    return response
}

export default BooksByShelf;