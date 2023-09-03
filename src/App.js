import UserForm from "./components/UserForm";
import UserDisplay from "./components/UserDisplay";
import React, { useState } from "react";
import styles from "./App.module.css";
import ReactDOM from 'react-dom'

function App() {
  const [users, setUsers] = useState([]);

  const getUserDetails = (userdetails) => {
    setUsers((prevState) => [userdetails, ...prevState]);
  };

  return (
    <div className={`App ${styles.overlay}`}>
      {ReactDOM.createPortal(<UserForm UserInput={getUserDetails} />, document.getElementById('overlay-root'))}
      <UserDisplay Users={users} />
    </div>
  );
}

export default App;
