import { useState } from "react";
import ReactDOM from 'react-dom';

export default function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('The name you entered was: ${name}')
  }

  return (
    <form onSubmit={handleSubmit} action = "/login" method = "POST">
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
