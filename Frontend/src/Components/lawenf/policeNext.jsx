import React from "react";


const PoliceNext = () =>{
    return(
        <div className="police-next-container">
        <h2>Police Next Actions</h2>
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="Search-btn">Search</button>
        <button className="Solved-btn">Solved</button>

        <div class="reportContent"></div>
        <div className="mediaContent"></div>

    </div>
    )
}

export default PoliceNext