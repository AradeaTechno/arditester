import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Select = ({
  id,
  options,
  multiple = false,
  withSearch = false,
  searchPlaceholder = 'Search...',
  onChange,
  label = 'Label',
  outlined = false,
  usePortal = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const selectRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchQuery('');
  }, [isOpen]);

  const toggleOpen = () => !outlined && setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (multiple) {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      );
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
    if (onChange) onChange(option);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const removeOption = (option) => {
    setSelectedOptions((prev) =>
      prev.filter((item) => item !== option)
    );
    if (onChange) onChange(null);
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-aqua-200">{part}</span>
      ) : (
        part
      )
    );
  };

  const renderOptions = () => (
    options.map((option) => {
      const isMatch = option.label.toLowerCase().includes(searchQuery.toLowerCase());
      const isSelected = selectedOptions.includes(option);
      return (
        <div
          key={option.value}
          className={`
            cursor-pointer p-2 hover:bg-gray-100 text-sm
            ${!isMatch ? 'text-black-400' : ''}
            ${isSelected ? 'bg-green-200 bg-opacity-70' : ''}
          `}
          onClick={(e) => {
            e.stopPropagation();
            handleOptionClick(option);
          }}
        >
          {highlightText(option.label, searchQuery)}
        </div>
      );
    })
  );

  const renderDropdownContent = () => (
    <div
      className="absolute bg-white border border-gray-300 mt-2 w-full rounded-b-md"
      style={{ zIndex: 1000 }}
      ref={dropdownRef}
    >
      {withSearch && (
        <div className="relative">
          <input
            type="text"
            className="p-2 border-b border-gray-300 pl-8 outline-none w-full text-sm"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
            autoFocus
          />
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </div>
        </div>
      )}
      <div className="max-h-60 overflow-y-auto">
        {renderOptions()}
      </div>
    </div>
  );

  const selectedLabel = multiple
    ? selectedOptions.length > 0
      ? selectedOptions.map((option) => (
          <div key={option.value} className="inline-flex items-center pl-3 pr-3 pt-1 pb-1 ml-2 bg-gray-100 rounded-full">
            <span className="ml-2 mr-2 text-sm">{option.label}</span>
            <button
              className="text-black border border-black rounded-lg w-4 h-4 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                removeOption(option);
              }}
            >
              &times;
            </button>
          </div>
        ))
      : ''
    : selectedOptions.length > 0
    ? (<span className="ml-2 text-sm">{selectedOptions[0].label}</span>)
    : '';

  return (
    <div className="flex items-center">
      <label htmlFor={id} className="mr-4 text-sm">{label}</label>
      <div className="relative inline-block w-full" ref={selectRef}>
        <div
          className={`cursor-pointer border border-gray-300 rounded-md p-1 bg-white flex items-center justify-between ${outlined ? 'bg-gray-300 cursor-not-allowed' : ''}`}
          onClick={toggleOpen}
          id={id}
          style={{ minHeight: '40px', maxHeight: '40px' }}
        >
          <span>{selectedLabel}</span>
          <svg
            className="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="grey"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {isOpen && (usePortal ? ReactDOM.createPortal(renderDropdownContent(), document.body) : renderDropdownContent())}
      </div>
    </div>
  );
};

export default Select;
