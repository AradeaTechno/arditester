import React from 'react';
import ReactDOM from 'react-dom';
import SelectDemo from './SelectDemo'; // Adjust the import path as needed
import './App.css'; // Import your TailwindCSS styles

const App = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-center my-4 text-2xl">Select Component Demo</h1>
    <SelectDemo />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
