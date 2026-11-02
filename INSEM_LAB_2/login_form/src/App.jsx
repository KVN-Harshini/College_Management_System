
import React, { useState } from 'react';

function App() {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const login = () => {
    if (password.length < 8) {
      setMsg('Password must contain at least 8 characters');
    }
    else if (!/[!@#$%^&*]/.test(password)) {
      setMsg('Password must contain at least one special character');
    }
    else if (
      useremail === 'harshini@gmail.com' &&
      password === 'Harshini@123'
    ) {
      setMsg('Login Successful');
    }
    else {
      setMsg('Invalid Email or Password');
    }
  };

  return (
    <div>
      <h1>Login Form</h1>

      <input
        type="text"
        placeholder="Enter Useremail"
        value={useremail}
        onChange={e => setUseremail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login</button>

      <p>{msg}</p>
    </div>
  );
}

export default App;
