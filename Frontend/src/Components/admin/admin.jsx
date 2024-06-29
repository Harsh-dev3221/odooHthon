import React from 'react';

function AdminDashboard() {
  // Placeholder values for demonstration purposes
  const totalReports = 120; // Total number of reports
  const solvedReports = 80; // Number of solved reports
  const unsolvedReports = 40; // Number of unsolved reports
  const totalUsers = 500; // Total number of users
  const numberOfCitizens = 200; // Number of citizens
  const numberOfPolice = 50; // Number of police officers

  // Placeholder function for handling map view navigation
  const handleMapView = () => {
    alert('Navigating to map view...');
    // Implement your logic for navigating to the map view here
  };

  // Placeholder function for handling search action
  const handleSearch = () => {
    alert('Performing search...');
    // Implement your logic for performing a search here
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <section className="statistics-section">
        <div className="statistic">
          <span>Total Reports:</span>
          <strong>{totalReports}</strong>
        </div>
        <div className="statistic">
          <span>Solved Reports:</span>
          <strong>{solvedReports}</strong>
        </div>
        <div className="statistic">
          <span>Unsolved Reports:</span>
          <strong>{unsolvedReports}</strong>
        </div>
        <div className="statistic">
          <span>Total Users:</span>
          <strong>{totalUsers}</strong>
        </div>
        <div className="statistic">
          <span>Number of Citizens:</span>
          <strong>{numberOfCitizens}</strong>
        </div>
        <div className="statistic">
          <span>Number of Police Officers:</span>
          <strong>{numberOfPolice}</strong>
        </div>
      </section>
      <div className="buttons-section mt-4">
        <button onClick={handleMapView} className="btn btn-primary">
          See Map
        </button>
        <button onClick={handleSearch} className="btn btn-secondary">
          Search
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;