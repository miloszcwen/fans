import React, { useState, useEffect } from "react";
import CardList from "../components/CardList.js";
import AddCard from "../components/AddCard.js";
import Modal from "../components/Modal";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fans, setFans] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    setIsFetching(true);
    if (window.localStorage.getItem("fans")) {
      setFans(JSON.parse(window.localStorage.getItem("fans")));
      setIsFetching(false);
      setError(null);
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((users) => {
          setFans(users);
          setError(null);
          setIsFetching(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsFetching(false);
        });
    }
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const deleteFan = (id) => {
    const newFans = fans.filter((fan) => fan.id !== id);
    setFans(newFans);
    window.localStorage.setItem("fans", JSON.stringify(newFans));
    // optionally delete empty fan list from ls ("reset fan list")
    // if (!newFans.length) {
    //   window.localStorage.removeItem("fans");
    // }
  };

  function handleClose() {
    setIsModalOpen(false);
  }
  function handleOpen() {
    setIsModalOpen(true);
  }

  function addFan(fan) {
    const newFans = [...fans, fan];
    setFans(newFans);
    window.localStorage.setItem("fans", JSON.stringify(newFans));
  }

  const filteredFans = fans.filter((fan) => {
    return fan.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <h1 className="bg-navy ma0 pa2 bw2">My Fanclub</h1>
      <SearchBox searchField={searchField} searchChange={onSearchChange} />
      {error ? (
        <h1>{error}</h1>
      ) : isFetching ? (
        <h1>Loading fans...</h1>
      ) : (
        <Scroll>
          <AddCard onModalOpen={handleOpen} />
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onModalClose={handleClose}
            addFan={addFan}
          ></Modal>
          <ErrorBoundry>
            <CardList fans={filteredFans} onDelete={deleteFan} />
          </ErrorBoundry>
        </Scroll>
      )}
    </>
  );
}

export default App;
