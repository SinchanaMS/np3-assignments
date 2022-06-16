// Create a subscribe form with an email and subscribe button.
// On clicking subscribe, check if the email already exists in the given array..
// if it exists show a message that the email is already subscribed, else show that you are now subscribed.

import { useState } from "react";
import { email } from "./database/email";

export default function NP3threeQ1() {
  const [emailArray, setEmailArray] = useState(email);
  console.log(emailArray);

  const [inputEmail, setInputEmail] = useState("");

  const [message, setMessage] = useState("");
  const checkSubscription = (e) => {
    e.preventDefault();
    const emailExists = emailArray.some((email) => email.email === inputEmail);
    if (emailExists) {
      setMessage("You are already subscribed to this newsletter");
    } else {
      setEmailArray((email) => [
        ...email,
        { id: emailArray.length + 1, email: inputEmail }
      ]);
      setMessage("You are now subscribed to the Newsletter");
    }
  };

  return (
    <form onSubmit={checkSubscription}>
      <input
        type="email"
        placeholder="email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>
      <p>{message}</p>
    </form>
  );
}
// time taken = 12mins
