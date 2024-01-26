import "./NameForm.css";
import React, { useState } from 'react';
const NameForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      setMessage(`Success: Username is ${username} and Password is ${password}`);
    } else {
      setMessage('Wrong: Please Enter The User And Password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
        </label>
          <input type="text" placeholder="Enter Your User-Name" value={username} onChange={handleUsernameChange} />
        <br />
        <label>
          Password:
        </label>
          <input type="password" placeholder="Enter Your Password" value={password} onChange={handlePasswordChange} />
        <br />
        <button className="btn" type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default NameForm;
