import { useState } from "react";

// Take the name from user input and display the appropriate message when clicked on "show welcome message"

// If the name is an odd number of characters display "Hello [name]" and if it's even then display "Hi [name]"

export default function NP3twoQ1() {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const lengthCheck = userName.length;

  const messageHandler = () => {
    setShowMessage((prev) => !prev);
    lengthCheck !== 0
      ? lengthCheck % 2 === 0
        ? setMessage("Hi")
        : setMessage("Hello")
      : setMessage("");
  };
  return (
    <div>
      <input value={userName} onChange={(e) => setUserName(e.target.value)} />

      <button onClick={messageHandler}>Show Welcome Message</button>
      {showMessage && <p>{`${message} ${userName}`}</p>}
    </div>
  );
}

// time taken: 10mins
