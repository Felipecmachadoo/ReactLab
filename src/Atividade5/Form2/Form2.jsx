import { useState } from "react";

export default function Form2() {
  const [person] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

  return (
    <>
      <label>
        First Name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <br />
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
