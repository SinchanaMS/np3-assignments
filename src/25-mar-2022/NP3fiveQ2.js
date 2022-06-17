// Make a form, which will take the following 3 inputs from the user,  name, email, and mobile number
// And the form will have a save button at the end.

import { useState } from "react";

// When the user completes the form, the user should be able to save it.
// After saving data, **show a success message.**

// After data is submitted input fields should be disabled.

// Then, Besides every field, there should be an edit button, which allows users to edit the field and save it.

export default function NP3fiveQ2() {
  const [userDetails, setUserDetails] = useState({});
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [editField, setEditField] = useState("");
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const saveUserDetails = (e) => {
    e.preventDefault();
    setIsDataSaved((prev) => !prev);
    setIsDisabled(true);
  };

  const editHandler = (field) => {
    setIsDataSaved(false);
    setEditField(field);
  };

  return (
    <div>
      <form onSubmit={saveUserDetails}>
        <input
          type="text"
          name="name"
          value={userDetails?.name}
          placeholder="name"
          disabled={isDisabled ? (editField === "name" ? false : true) : false}
          onChange={inputHandler}
        />
        <button type="button" onClick={() => editHandler("name")}>
          Edit
        </button>
        <input
          type="email"
          name="email"
          value={userDetails?.email}
          placeholder="email"
          disabled={isDisabled ? (editField === "email" ? false : true) : false}
          onChange={inputHandler}
        />
        <button type="button" onClick={() => editHandler("email")}>
          Edit
        </button>
        <input
          type="number"
          name="number"
          value={userDetails?.number}
          placeholder="mobile number"
          disabled={
            isDisabled ? (editField === "number" ? false : true) : false
          }
          onChange={inputHandler}
        />
        <button type="button" onClick={() => editHandler("number")}>
          Edit
        </button>

        <button type="submit">Save</button>
      </form>
      {isDataSaved && <p>Data Saved</p>}
    </div>
  );
}
// time taken: 30mins
