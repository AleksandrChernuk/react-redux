import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, fetchBooksId } from "../books-redux/books/booksOpeeration";

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.entities);
  const isLoading = useSelector((state) => state.books.isLoading);
  console.log(books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(fetchBooksId(Number(form.elements.input.value)));
    form.reset();
  };

  return (
    <div>
      {isLoading && <div>Loading</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" />
        <button type="submit">submit</button>
      </form>
      <ul>
        {books.map((el) => (
          <li key={el.id}>
            <h3>{el.name}</h3>
            <p>{el.description}</p>
            <img src={el.createdAt} alt={el.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
