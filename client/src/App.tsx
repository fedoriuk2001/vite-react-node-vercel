import { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://vite-react-node-vercel-server.vercel.app/')
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
