import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./Components/Card";
import CardContainer from "./Components/CardContainer";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Shutter Island",
      description: "Movie that is so good",
      img: "https://www.indiewire.com/wp-content/uploads/2020/02/shutterstock_editorial_5883624s.jpg",
    },
    {
      title: "The hobbit",
      description: "Movie that is so good",
      img: "https://www.indiewire.com/wp-content/uploads/2020/02/shutterstock_editorial_5883624s.jpg",
    },
    {
      title: "Inception",
      description: "Movie that is so good",
      img: "https://www.indiewire.com/wp-content/uploads/2020/02/shutterstock_editorial_5883624s.jpg",
    },
    {
      title: "Harry Potter",
      description: "Movie that is so good",
      img: "https://www.indiewire.com/wp-content/uploads/2020/02/shutterstock_editorial_5883624s.jpg",
    },
  ]);
  const handleClose = () => {
    setShow(false);
  };
  const [inputSeacrh, setInputSearch] = useState("");
  const [show, setShow] = useState(false);
  const [addMovie, setAddMovie] = useState({
    title: " ",
    description: " ",
    img: " ",
  });
  const handleChange = (e) => {
    console.log("hello");
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newData = { ...addMovie };
    newData[fieldName] = fieldValue;
    setAddMovie(newData);
    console.log(newData);
  };
  const handleSaveChange = (e) => {
    console.log(addMovie);
    e.preventDefault();
    const movie = {
      title: addMovie.title,
      description: addMovie.description,
      img: addMovie.img,
    };
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    setShow(false);
  };
  return (
    <div className="main-container">
      <Button onClick={() => setShow(true)}>Add Movie</Button>
      <input onChange={(e) => setInputSearch(e.target.value)} type="text" />
      <CardContainer
        movies={movies.filter((movie) => {
          return (
            movie.title.toLowerCase().indexOf(inputSeacrh.toLowerCase()) >= 0
          );
        })}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-inputs">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Please Enter your movie title"
            />
            <input
              type="text"
              name="img"
              onChange={handleChange}
              placeholder="Please Enter your movie image"
            />
            <input
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Please Enter your movie description"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
