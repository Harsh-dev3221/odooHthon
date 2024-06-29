import React, { useState } from "react";

const Police = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Add logic to handle search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="police-container">
      <h2>Police Dashboard</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
    </div>
  );
};

export default Police;
