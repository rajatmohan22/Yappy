import "./UserForm.css"; // Make sure to import your CSS file
import React, { useState } from "react";
import Popup from "./Popup";

const UserForm = (props) => {
  var [message, setMessage] = useState("You must fill all fields!")
  const [isValid, setValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target["username"], "len");
    if (
      event.target["username"].value.length !== 0 &&
      event.target["age"].value.length !== 0
    ) {
      if (event.target["age"].value > 0) {
        const userDetails = {
          key: Math.random().toString(),
          username: event.target["username"].value,
          age: event.target["age"].value,
        };
        setValid(true);
        console.log(userDetails);
        props.UserInput(userDetails);
      } else {
        setMessage("Age must be a positive integer")
        setValid(false);
      }
    } else {
      setValid(false);
    }
  };

  const CloseHandler = (close) => {
    setValid(close);
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className={`user-form ${!isValid && "low-contrast"}`}
      >
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-input"
          readOnly={isValid ? false : true}
        />

        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          className="form-input"
          readOnly={isValid ? false : true}
        />

        <button type="submit">Submit</button>
      </form>
      {!isValid && <Popup Message={message} isCloseClicked={CloseHandler} />}
    </div>
  );
};

export default UserForm;
