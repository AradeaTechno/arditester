# My Dropdown Test

A customizable dropdown component for React.

## Installation

Install the package via npm:

```bash
npm install mydroptest
```


## Usage

```bash
import React from 'react';
import { Select, SelectDemo } from 'mydroptest';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

function App() {
  return (
    <div className="App">
      <h1>My Dropdown Test</h1>
      <Select options={options} />
      <SelectDemo />
    </div>
  );
}

export default App;
```