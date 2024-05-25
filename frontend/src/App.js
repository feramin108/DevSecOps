import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => setMessage(data))
      .catch(error => setError(error.toString()));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {error ? <p>Error: {error}</p> : <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;

