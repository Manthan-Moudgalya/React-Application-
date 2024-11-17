import { useState } from 'react';

export function PasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    // if (e) e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
    } else {
      setError('');
      console.log("Passwords match!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default PasswordForm;
