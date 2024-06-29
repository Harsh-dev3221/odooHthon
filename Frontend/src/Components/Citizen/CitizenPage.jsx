import React, { useState } from 'react';

const CitizenPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Add logic to handle search functionality if needed
  };

  return (
    <div className="citizen-page">
      <h2>Citizen Dashboard</h2>
      <button className="report-crime-btn">
        Report Crime
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button className="show-reported-crimes-btn">
        Show Reported Crimes
      </button>
    </div>
  );
};

export default CitizenPage;
