const DEFAULT_URL = "https://6464f1779c09d77a62df1045.mockapi.io/";

export const fetchBooksList = async () => {
  const data = fetch(`${DEFAULT_URL}/books`);

  return (await data).json();
};

export const fetchBooksById = async (id) => {
  const data = fetch(`${DEFAULT_URL}/books/${id}`);

  return (await data).json();
};
