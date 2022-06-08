const URL ="http://localhost:3066/books"

const Books =async (query)=>{
    const request =fetch(`${URL}?shelf=${query}`)
    const response = await (await request).json();
    return response
}

export default Books;