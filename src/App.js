import UserForm from "./components/UserForm";
import UserDisplay from "./components/UserDisplay";
import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [closeClicked, setCloseClicked] = useState(false);

  const getUserDetails = (userdetails) => {
    setUsers((prevState) => [userdetails, ...prevState]);
  };

  return (
    <div className="App overlay">
      <UserForm UserInput={getUserDetails}></UserForm>
      <UserDisplay Users={users} />
    </div>
  );
}

export default App;
