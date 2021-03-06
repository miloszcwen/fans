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
  const [isLoading, setIsLoading] = useState(true);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("fans")) {
      setFans(JSON.parse(window.localStorage.getItem("fans")));
      setIsLoading(false);
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setFans(users));
      setIsLoading(false);
    }
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const deleteFan = (id) => {
    const newFans = fans.filter((fan) => fan.id !== id);
    setFans(newFans);
    window.localStorage.setItem("fans", JSON.stringify(newFans));
    if (!newFans.length) {
      window.localStorage.removeItem("fans");
    }
  };

  function handleClose() {
    setIsOpen(false);
  }
  function handleOpen() {
    setIsOpen(true);
  }

  function addFan(fan) {
    const newFans = [...fans, fan];
    setFans(newFans);
    window.localStorage.setItem("fans", JSON.stringify(newFans));
  }

  let filteredFans = [];
  if (fans.length) {
    filteredFans = fans.filter((fan) => {
      return fan.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <h1 className="bg-navy ma0 pa2 bw2">My Fanclub</h1>
        <SearchBox searchField={searchField} searchChange={onSearchChange} />
        <Scroll>
          <AddCard onModalOpen={handleOpen} />
          <Modal
            open={isOpen}
            setIsOpen={setIsOpen}
            onClose={handleClose}
            addFan={addFan}
          ></Modal>
          <ErrorBoundry>
            <CardList fans={filteredFans} onDelete={deleteFan} />
          </ErrorBoundry>
        </Scroll>
      </>
    );
  }
}

export default App;
