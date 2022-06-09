export const updateBookShelf = async (id, shelf) => {
    const response = await fetch(`http://localhost:3010/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shelf: shelf }),
    });
    const result = await response.json();
    return result;
  };