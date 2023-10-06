import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., sending data to a server)

    // Reset the div fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <div onSubmit={handleLogin}>
        <div>
          <div>Username:</div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <div>Password:</div>
          <h1>Password:</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
