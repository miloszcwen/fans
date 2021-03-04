import React, { useState, useEffect } from "react";
import CardList from "../components/CardList.js";
import AddCard from "../components/AddCard.js";
import Modal from "../components/Modal";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [fans, setFans] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setFans(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const deleteFan = (id) => {
    const newFans = fans.filter((fan) => fan.id !== id);
    setFans(newFans);
  };

  function handleClose() {
    console.log("click close");
    setIsOpen(false);
  }
  function handleOpen() {
    console.log("click open");

    setIsOpen(true);
  }

  const filteredFans = fans.filter((fan) => {
    return fan.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (!fans.length) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <h1 className="bg-navy ma0 pa20 bw2">My Fanclub</h1>
        <SearchBox searchField={searchField} searchChange={onSearchChange} />
        <Scroll>
          <AddCard onModalOpen={handleOpen} />
          <Modal open={isOpen} onClose={handleClose}>
            Fancy Modal
          </Modal>
          <ErrorBoundry>
            <CardList fans={filteredFans} onDelete={deleteFan} />
          </ErrorBoundry>
        </Scroll>
      </>
    );
  }
}

export default App;
