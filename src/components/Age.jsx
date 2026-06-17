import { useState } from "react";

function Age() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  function checkAge(e) {
    e.preventDefault();

    if (age >= 18) {
      setMessage("Eligible");
    } else {
      setMessage("Not Eligible");
    }
  }

  return (
    <div>
      <form onSubmit={checkAge}>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />

        <button type="submit">Check</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default Age;