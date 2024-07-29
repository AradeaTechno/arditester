import React, { useState } from 'react';
import Select from './Select'; // Adjust the import path as needed

const SelectDemo = () => {
  const [multiple, setMultiple] = useState(false);
  const [withSearch, setWithSearch] = useState(false);
  const [outlined, setOutlined] = useState(false);
  const [usePortal, setUsePortal] = useState(false);

  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option with icon' },
    { value: '3', label: 'Long Long Option 3' },
    { value: '4', label: 'Long Long Long Option 4' },
    { value: '5', label: 'Long Long Long Long Option 5' },
    { value: '6', label: 'Long Long Long Long Long Option 6' },
  ];

  return (
    <div className="p-4">
      <Select
        id="example-select"
        options={options}
        multiple={multiple}
        withSearch={withSearch}
        outlined={outlined}
        usePortal={usePortal}
      />

      <div className="mt-4 space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={multiple}
            onChange={() => setMultiple(!multiple)}
            className="form-checkbox"
          />
          <span>Multiple</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={withSearch}
            onChange={() => setWithSearch(!withSearch)}
            className="form-checkbox"
          />
          <span>With Search</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={outlined}
            onChange={() => setOutlined(!outlined)}
            className="form-checkbox"
          />
          <span>Outlined</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={usePortal}
            onChange={() => setUsePortal(!usePortal)}
            className="form-checkbox"
          />
          <span>Use Portal</span>
        </label>
      </div>
    </div>
  );
};

export default SelectDemo;
