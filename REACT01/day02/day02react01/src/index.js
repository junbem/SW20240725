import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is a simple React app.</p>
    </>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);