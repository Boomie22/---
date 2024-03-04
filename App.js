import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;